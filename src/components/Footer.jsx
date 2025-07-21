import React from 'react'
import youtube_icon from '../assets/youtube_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import facebook_icon from '../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className='flex flex-col pl-[6%] mb-[20px]'>
        <div className='flex my-10 gap-5'>
        <img src={youtube_icon} alt="youtube" className='w-7.5 cursor-pointer  max-sm:w-6'/>
        <img src={twitter_icon} alt="twitter" className='w-7.5 cursor-pointer max-sm:w-6'/>
        <img src={instagram_icon} alt="instagram" className='w-7.5 cursor-pointer max-sm:w-6'/>
        <img src={facebook_icon} alt='facebook_icon' className='w-7.5 cursor-pointer max-sm:w-6'/>
        </div>
        <div>
            <ul className='grid grid-cols-4 gap-[15px] mb-7.5 max-sm:grid-cols-2 max-sm:gap-2 max-sm:text-[14px]'>
            <li className='cursor-pointer w-fit'>Audio Description</li>
            <li className='cursor-pointer w-fit'>Help center</li>
            <li className='cursor-pointer w-fit'>Gift cards</li>
            <li className='cursor-pointer w-fit'>Media Center</li>
            <li className='cursor-pointer w-fit'>Investor Relation</li>
            <li className='cursor-pointer w-fit'>Jobs</li>
            <li className='cursor-pointer w-fit'>Terms of use</li>
            <li className='cursor-pointer w-fit'>Privacy</li>
            <li className='cursor-pointer w-fit'>Legal Notices</li>
            <li className='cursor-pointer w-fit'>Cookie Preferences</li>
            <li className='cursor-pointer w-fit'>Corporate Information</li>
            <li className='cursor-pointer w-fit'>Contact</li>
            </ul>
            <p className='text-gray-500 text-sm'>&copy; 1997-2025 Netflix, Inc.</p>
        </div>
    </div>
  )
}

export default Footer