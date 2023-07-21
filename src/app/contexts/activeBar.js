'use client'

import { createContext, useContext, useState } from 'react'

const Context = createContext()

export function ActiveBarProvider({ children }) {
  const [activeBar, setActiveBar] = useState(false)
  
  return (
    <Context.Provider value={[activeBar, setActiveBar]}>
      {children}
    </Context.Provider>
  )
}

export function useActiveBarContext() {
  return useContext(Context)
}
