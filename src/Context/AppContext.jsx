import { onAuthStateChanged } from "firebase/auth";
import { children, createContext, useEffect, useState } from "react";

export const Context = createContext()

 import React from 'react'
import { auth } from "../Authentication/firebase";
 
 const ContextProvider = ({children}) => {
    const [user,Setuser] = useState(null);
    const [loading,setLoadng] = useState(true);
    const [loading2,setLoading2] =useState(false)
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        Setuser(currentUser);
        setLoadng(false)
    })
    return ()=> unsubscribe();
    },[])
    
   return (
     <Context.Provider value={{user,loading,loading2,setLoading2}}>
        {children}
     </Context.Provider>
   )
 }
 
 export default ContextProvider