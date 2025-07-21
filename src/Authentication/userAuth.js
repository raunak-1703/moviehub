import { auth,db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,sendPasswordResetEmail,setPersistence, 
    browserLocalPersistence, 
    browserSessionPersistence,  } from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";
import { toast } from "react-toastify";

export const signup= async (email,password,name,navigate,remember)=>{
    try {
        await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
      const userCredentials = await createUserWithEmailAndPassword(auth,email,password,);
      const user = userCredentials.user
      await setDoc(doc(db,'users',user.uid),{
        uid:user.uid,
        name,
        email
      })
      toast.success('Logged in successfully')
      navigate('/');
    } catch (error) {
        console.log(error.code)
      toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

export const signin =  async (email,password,navigate,remember)=>{
  try {
    await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
    const user = await signInWithEmailAndPassword(auth,email,password)
    toast.success('Logged in successfully');
    navigate('/');
  } catch (error) {
    console.log(error.code)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}

export const logout = async (navigate)=>{
    try {
     await signOut(auth)
     toast.success('Logged out successfully')
     navigate('/login')
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}
export const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        toast.success("Password reset email sent. Check your inbox.");
    } catch (error) {
     toast.error(error.code.split('/')[1].split('-').join(' '))
    }
};

