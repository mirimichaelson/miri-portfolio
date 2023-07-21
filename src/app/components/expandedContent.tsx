"use client"; 

import React from "react";
import Image from 'next/image'
import xIcon from'../../../public/x.png';
import { Transition } from '@headlessui/react'
import { useActiveBarContext } from "../contexts/activeBar";
import {activeBarinterface} from '../types/activeBarInterface'

const expandedContent: React.FunctionComponent = () => {
  const [activeBar, setActiveBar] = useActiveBarContext()
  const color = activeBar.colour

  const handleBarClick = () => {
    setActiveBar((activeBar: activeBarinterface) => ({...activeBar, isActive: false}))
  }
  
  return (
    <div>
      <Transition
        show={!!activeBar.isActive}
        className=" bottom-0 m-auto translate-x-0"
        enter="transition ease-in-out duration-700 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-700 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >      
        <div className={`right-0 bottom-0  m-auto p-20 absolute w-full rounded-xl h-[75vh] ${color}`}>hi
          <div className="flex justify-end">
            {activeBar.text}
            {activeBar.content}
            <Image
              src={xIcon}
              width={20}
              height={20}
              onClick={handleBarClick}
              alt="Picture of the author"
            />
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default expandedContent;