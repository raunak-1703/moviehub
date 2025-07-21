import React from 'react'
import back_arrow_icon from '../assets/back_arrow_icon.png'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
const Player = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const location = useLocation();
  if(!location.state){
    return <Navigate to='/'/>
  }
  const {date,name,type}  = location.state;

  return (
    <div className='h-screen relative flex flex-col items-center]'>
      <img src={back_arrow_icon} alt="icon" className='absolute cursor-pointer w-12.5 top-5 left-5' onClick={()=>navigate(-1)}/>
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${id}`} title="Movie trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='m-auto rounded-2xl'></iframe>
      <div className='flex items-center justify-between w-[90%] m-auto'>
      <p>{date}</p> 
      <p>{name}</p> 
      <p>{type}</p> 
      </div>
    </div>
  )
}

export default Player