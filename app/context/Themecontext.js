"use client"

import { createContext, useState } from "react"

export const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
    const [mode,setMpde]=useState("dark");

    const toggle=()=>{
        setMpde((prev)=>(prev==="dark" ? "light" :"dark"));
    }

    return (<ThemeContext.Provider value={{toggle,mode}}>
    <div className={`theme  ${mode}`}>
    {children}
    </div>
    
    </ThemeContext.Provider>)
}