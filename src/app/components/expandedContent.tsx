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
      <div className={`right-0 flex-col bottom-0 flex m-auto p-5  absolute w-full rounded-xl h-[75vh] text-[#ffebcd] ${color}`}>
        <div className={`h-full w-full scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-thumb-[#CD853F] overflow-scroll  rounded-xl h-[75vh] text-[#ffebcd] ${color}`}>
          <div className={` bg-[#CD853F] opacity-30 p-5`}>
          <div className="flex justify-between">          
            <div className="shrink-0 font-bold text-lg">{activeBar.title}</div>
            <div className="flex-none w-full justify-end overflow-scroll w-[20px] h-[20px]">
              <Image
                src={xIcon}
                width={20}
                height={20}
                onClick={handleBarClick}
                alt="Picture of the author"
              />
            </div>
            </div>
            {activeBar.content}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default expandedContent;