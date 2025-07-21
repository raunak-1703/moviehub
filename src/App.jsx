import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Player from './pages/Player'
import { ToastContainer } from 'react-toastify'
import ResetPassword from './pages/passwordReseet'
import { Context } from './Context/AppContext'
import loader from './assets/netflix_spinner.gif'
import NotFoundPage from './pages/NotFoundPage'


const App = () => {
  const {user,loading,loading2} = useContext(Context)
  if(loading){
    return(<div className="w-screen h-screen flex items-center justify-center">
          <img src={loader} alt="loading" className="w-15"/>
        </div>)
  }
  
  return (
    <>
    <Routes>
      <Route path='/' element={user?<HomePage/>:<Navigate to={'/login'}/>}/>
      <Route path='/login' element={!user?<Login/>:<Navigate to={'/'}/>}/>
      <Route path='/reset-password' element={!user?<ResetPassword/>:<Navigate to={'/'}/>}/>
      <Route path='/player/:id' element={user?<Player/>:<Navigate to={'/login'}/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    <ToastContainer theme='dark'/>
    </>
  )
}

export default App