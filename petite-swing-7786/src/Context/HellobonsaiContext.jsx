import React, { useState } from 'react'
import { createContext } from 'react'


export const  HellobonsaiContext = createContext()


const HellobonsaiProvider = ({children}) =>{
    
    const [route, setroute] = useState('/dashboard')
    
    
    const set =(val)=>{
        setroute(val)
    }


    return <HellobonsaiContext.Provider value={{set , route}}>
        {children}
    </HellobonsaiContext.Provider>
}


export default HellobonsaiProvider