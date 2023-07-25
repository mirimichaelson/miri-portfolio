"use client"; 

import React from "react";
import Image from 'next/image'
import xIcon from'../../../public/x.svg';
// import CV from '../../../public/Miri-Michaelson-2023-CV.pdf'
import { Transition } from '@headlessui/react'
import { useActiveBarContext } from "../contexts/activeBar";
import {activeBarinterface} from '../types/activeBarInterface'

const ExpandedContent: React.FunctionComponent = () => {
  const [activeBar, setActiveBar] = useActiveBarContext()
  const color = 'bg-[#2e5468]'

  const handleBarClick = () => {
    setActiveBar((activeBar: activeBarinterface) => ({...activeBar, isActive: false}))
  }
  
  return (
    <>
      <Transition
        show={!!activeBar.isActive}
        className="tablet:-translate-x-[108.5%] laptop:-translate-x-1/2 -translate-y-[108.5%] h-full"
        enter="transition ease-in-out duration-700 transform"
        enterFrom="translate-x-full"
        enterTo="tablet:-translate-x-[108.5%] laptop:-translate-x-1/2"
        leave="transition ease-in-out duration-700 transform"
        leaveFrom="-translate-x-1/2 -translate-y-full"
        leaveTo="-translate-x-[500%]"
      >      
        <div className={`absolute left-0 flex-col bottom-0 flex m-auto phone:w-[100vw] tablet:w-[80vw] laptop:w-[50vw] p-7 pt-2 absolute  rounded-xl h-[80vh] text-[#CD853F] ${color}`}>
          <div className="flex justify-end mb-1 overflow-scroll w-full">
            <Image
              src={xIcon}
              width={30}
              height={30}
              onClick={handleBarClick}
              alt="Picture of the author"
            />
          </div>
          <div className={`h-full w-full scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-thumb-[#e05d48] overflow-scroll bg-[#527079] rounded-xl h-[75vh] text-[#f0d9c6] ${color}`}>
            <div className={`h-full p-5`}> 
              <div className="flex justify-between ">          
                <div className="shrink-0 font-bold whitespace-normal w-full text-3xl">
                  {activeBar.title}
                </div>
              </div>
              <div className="font-semibold whitespace-pre-wrap">
                {activeBar.content}
                {/* {activeBar.title == 'contact & downloadable cv' && (
                  <a
                    // href={CV}
                    href={'/Miri-Michaelson-2023-CV.pdf'}
                    download="Example-PDF-document"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Download .pdf file</button>
                  </a> */}
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  )
}

export default ExpandedContent;