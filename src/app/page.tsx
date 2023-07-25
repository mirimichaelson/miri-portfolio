'use client'

import SideBar from './components/sidebar'
import ExpandedContent from './components/expandedContent'
// import miri from '../../public/miri.png'
import logo from '../../public/logo.svg'
import Image from 'next/image';
import { useActiveBarContext } from './contexts/activeBar'
import {activeBarinterface} from './types/activeBarInterface'

const experience = `
PROFESSIONAL EXPERIENCE

SOFTWARE ENGINEER AT SLALOM BUILD
September 2021 - Present

Slalom Build is a global consultancy. 
Worked in e-commerce, automotive, & aviation sectors. Technical experience includes: 
- Creating cart pages, states & integration, product display pages,  search functionality and search product pages 
- Mobile-first, fully responsive and fully tested code
- Working closely with designers and utilising Figma. Using GraphQL. Giving bi-weekly demos to senior client stakeholder groups
- Creating and leading the frontend for PoCs, including an interactive hospitality app & a chatbot that integrates genAI with a used car search
- Competing in company-wide hackathons for game design and making a chatbot app with genAI that triages NHS patients and can reduce GP load. Reached the final & presented our game to global leadership in Atlanta
Stack: React, TypeScript, GraphQL, Next, Node, Nest, TailwindCSS, & Jest 
  
FRONTEND SOFTWARE ENGINEER AT DARKTRACE
Nov 2020 - September  2021

Darktrace is a multi-award winning AI cyber security company. 
- Accountable for the Model Editor page. Security teams use the Model Editor to tailor Darktrace's response to specific attack threats  (React)
-  Created the Mitre Att&ck integration & data display page (JQuery)
- Manipulated and displayed complex data sets, such as the 'Breach Log'.  The Breach Log displays all events that have triggered one of the models, and allow security teams to respond and inquire into the breach (JQuery)
- Added the One-Click-Defeat. This is used to prevent certain breach types from triggering the model. 
- Tested to prevent regression
Stack: JQuery, React, ES6 JS, & HTML/CSS. 

VOLUNTEERING

Code First Girls
May 2021 - August 2021 

Taught an 8-week Web Development course to help women get into tech. 
Taught classes on: HTML, CSS, responsiveness, vanilla JS.

Codebar
March 2021 - March 2022 

Weekly mentoring for new developers, including debugging & teaching programming concepts.

Code Your Future
March 2022 - July 2022 

Edu-buddy  for two women learning to code. Supported them and helped them out with coding homework as they completed the course.
`

const stack = `
Experienced: 
React, Javascript, Typescript, NextJS, JQuery, Tailwind, CSS, styled components, GraphQL, Jest

Intermediate:
Node

Learning: 
Python 
`

const aboutMeContent = `
Whilst I've been a developer for 3 years, I started out as an English Lit grad, at the University of York.

After graduating, I worked as an event manager for a year and a half, producing events at pop up spaces around London, and once even  at the Royal Albert Hall. It was an intense year, and led to a couple interesting moments (one instance was dragging a henry the hoover through Soho at 6am in the morning).

Just before the pandemic I’d started teaching myself to code using Udemy. When the lockdowns began, I started learning full-time, and was grateful to join Makers Academy, a 4-month web development bootcamp.

From there I have worked in a cyber security company and a consultancy. I’ve been in multiple industries, the finalist in hackathons, and have kept developing as an engineer.

Bonus information about me:

I live on a houseboat, and have a bunch of hobbies. Right now, I’m getting into aerial hoops. Other hobbies are (in no particular order): climbing, drawing, roller skating, ice skating, drinking great coffee, latin dancing, reading and generally travelling around new places :)
`

const contactContent = `
You can get through to me at:


email: miriammichaelson@gmail.com
number: 07399627453`

export default function Home() {
  const [activeBar, setActiveBar] = useActiveBarContext()

  const bg = 'bg-[#f0d9c6]'
  const header1 = 'text-[#e05d48]'
  const header2 = 'text-[#e67456]'
  const sidePanelColour = 'bg-[#778ce1]'

  const overlayClick = () => {
      if (activeBar.isActive) setActiveBar((activeBar: activeBarinterface) => ({...activeBar, isActive: false}))
  }

  return (
    <main className="tablet:flex min-h-screen h-screen items-center justify-between" onClick={overlayClick}>
      <div className={`${bg} basis-1/2 tablet:h-full w-full  flex items-start flex-col justify-start  space-y-8`}>
        <div className='ml-10 mt-5'>
          <Image height={70} src={logo} alt="Miri"        
            style={{
                objectFit: "cover",
                borderRadius: "100px",
              }}
          />
        </div>
        <div className='w-full flex justify-start h-[66%]'>
              {/* <Image height={200} src={miri} alt="Miri"        
              style={{
                  objectFit: "cover",
                  borderRadius: "100px",
                  marginLeft: '50px'
                }}
              /> */}
        {/* </div> */}
          <div className=" absolute flex phone:h-[88%] laptop:h-[66%]">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="#e05d48" 
              // w-20 for side bit, 30 for big line
              className="w-20">
              <path className="animate-[move_100s_linear_infinite]" strokeLinecap="round" strokeLinejoin="round" d="M19 30l-6  0l-6 6V9a" />
            </svg>
          </div>
          <div className='flex flex-col justify-center phone:h-[30rem] phone:ml-[20x]  tablet:h-full'>
            <h1 className={`phone:text-5xl tablet:text-6xl font-bold flex justify-between ${header1} items-center phone:pl-[18px] tablet:pl-14`}>Miri Michaelson</h1>
            <h1 className={`text-4xl font-bold flex justify-between ${header2} items-center pl-14`}>software engineer</h1>
          </div>
        </div>
      </div>
      <div className={`${bg} basis-1/2 h-full w-full`}>
        <div className={`${bg} h-full flex justify-center space-y-6 flex-col w-full pl-16`}>
          <div className='fixed flex-none top-0 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#e05d48"  className="w-[60rem] h-[60rem]">
              <path className="animate-[move_300s_linear_infinite]"   strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
            </svg>
          </div>
          <SideBar title="professional experience and volunteering" content={experience} colour={`${sidePanelColour}`}/>
          <SideBar title="tech stack" content={stack} colour={`${sidePanelColour}`}/>
          <SideBar title="my journey & about me" content={aboutMeContent} colour={`${sidePanelColour}`}/>
          {/* contact & downloadable cv */}
          <SideBar title="contact" content={contactContent} colour={`${sidePanelColour}`}/>
        </div>
          <ExpandedContent/>
      </div>
    </main>
  )
}
