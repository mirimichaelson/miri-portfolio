'use client'

import SideBar from './components/sidebar'
import ExpandedContent from './components/expandedContent'

export default function Home() {

  return (
    <main className="flex min-h-screen h-screen items-center justify-between">
      <div className='bg-[#FCC981] basis-1/2 h-full w-full flex items-start flex-col justify-center  space-y-8'>
        <h1 className=' text-6xl font-bold flex justify-between text-[#CD853F] items-center pl-14'>Miri Michaelson</h1>
        <h1 className=' text-4xl font-bold flex justify-between text-[#f29547] items-center pl-14'>software engineer</h1>
      </div>
      <div className='bg-[#FCC981] basis-1/2 h-full flex justify-center space-y-6 flex-col w-full pl-16'>
        <SideBar title="Work experience" content="" colour="bg-[#f6be39]"/>
        <SideBar title="Volunteering" content="" colour="bg-[#ffa866]"/>
        <SideBar title="My journey & about me" content="" colour="bg-[#f3994d]"/>
        <SideBar title="Contact" content="" colour="bg-[#d89585]"/>
        <ExpandedContent/>
      </div>
    </main>
  )
}
