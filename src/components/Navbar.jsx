import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png';
import search from '../assets/search_icon.svg'
import bell from '../assets/bell_icon.svg'
import profile from '../assets/profile_img.png'
import dropdown from '../assets/caret_icon.svg'
import { logout } from '../Authentication/userAuth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const navRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('bg-[#141414]');
      } else {
        navRef.current.classList.remove('bg-[#141414]');
      }
    });
  }, []);

  return (
    <div className='flex px-4 max-md:px-2 py-2 justify-between items-center fixed text-[14px] top-0 left-0 text-[#e5e5e5]  w-full  z-1' ref={navRef}>
      <div className='flex items-center gap-[50px]'>
        <img src={logo} alt="logo" className='w-[90px]' />
        <ul className='flex gap-[20px] max-md:hidden'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>TV Shows</li>
          <li className='cursor-pointer'>Movies</li>
          <li className='cursor-pointer'>New & Popular</li>
          <li className='cursor-pointer'>My List</li>
          <li className='cursor-pointer'>Browse by Language</li>
        </ul>
      </div>

      <div className='flex gap-[15px] items-center max-sm:gap-[10px]'>
        <img src={search} alt="search" className='w-[20px] cursor-pointer' />
        <p>Children</p>
        <img src={bell} alt="bell" />
        <div className='flex cursor-pointer flex-col relative' onClick={() => setShowDropdown(!showDropdown)}>
          <div className='flex gap-2.5 items-center'>
            <img src={profile} alt="profile" className='rounded-[4px] w-[35px] max-sm:w-[20px]' />
            <img src={dropdown} alt="dropdown" />
          </div>
          <div className={`${showDropdown ? 'block' : 'hidden'} absolute top-full right-0 mt-1 w-max bg-[#191919] px-4.5 py-4 rounded-sm underline z-1`} onClick={() => logout(navigate)}>
            Sign out of Netflix
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
