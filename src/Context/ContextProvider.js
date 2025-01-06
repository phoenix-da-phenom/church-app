import { createContext, useContext, useState } from "react";

const StateContext= createContext({
    loadVideo: false,
    setLoadVideo: () => {}

})

export const ContextProvider= ({children}) =>{
    const [loadVideo , setLoadVideo]= useState(false)

    return (
        <StateContext.Provider
        value={{ 
            loadVideo,
            setLoadVideo
         }}
        >

{children}

        </StateContext.Provider>
    )

}

export const useStateContext= () => useContext(StateContext)