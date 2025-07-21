import { onAuthStateChanged } from "firebase/auth";
import { children, createContext, useEffect, useState } from "react";

export const Context = createContext()

 import React from 'react'
import { auth } from "../Authentication/firebase";
 
 const ContextProvider = ({children}) => {
    const [user,Setuser] = useState(null);
    const [loading,setLoadng] = useState(true);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        Setuser(currentUser);
        setLoadng(false)
    })
    return ()=> unsubscribe();
    },[])
    
   return (
     <Context.Provider value={{user,loading}}>
        {children}
     </Context.Provider>
   )
 }
 
 export default ContextProvider