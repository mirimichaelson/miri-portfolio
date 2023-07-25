"use client"; 

import React from "react";
import { useActiveBarContext } from "../contexts/activeBar";

interface SideBarProps {
  title:string,
  content: string,
  colour: string,
}

const SideBar: React.FunctionComponent<SideBarProps> = ({content, title, colour}: SideBarProps) => {
  const [activeBar, setActiveBar] = useActiveBarContext()

  const handleBarClick = () => {
    if (!activeBar.isActive) setActiveBar({title, content, colour, isActive: true})
  }

  return (
    <div className={`transition-all delay-150 w-full hover:pl-20 z-1 relative `} onClick={handleBarClick}>
      <div className={`transition-all delay-200 w-full pr-15 h-28 rounded-l-lg ${colour}`} >
        <div className="flex pl-8 items-center h-full text-xl font-medium text-[#ffebcd] ">
          {title}
        </div>
      </div>
    </div>
  )
}

export default SideBar;