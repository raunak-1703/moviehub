import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TitleCards from "../components/TitleCards";
import Footer from "../components/Footer";
import hero_banner from "../assets/hero_banner.jpg";
import hero_Title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="relative">
        <img src={hero_banner} alt="banner" className="w-full hero_img" />
        <div className="absolute w-full pl-[6%] bottom-0">
          <img
            src={hero_Title}
            alt="title"
            className="w-[90%] max-w-[420px] mb-[30px] max-sm:hidden "
          />
          <p className="max-w-[700px] text-md mb-[20px] max-sm:text-[12px] max-sm:mb-2.5 pl-[5px]">
            Discovering his ties to a secret ancient order ,a young man living
            in modern Istanabul embarks on a quiet to save the city from an
            immortal enemy.
          </p>
          <div className="flex items-center gap-2.5 mb-12.5 max-lg:mb-3.5">
            <button
              className="flex items-center px-6 py-2 gap-2.5 text-[15px] font-semibold  bg-white rounded-[4px] cursor-pointer text-black hover:bg-[#ffffffbf] max-sm:p-[4px_10px] max-sm:gap-[5px] max-sm:text-[10px]"
              onClick={() => {
                navigate(`/player/${'80dqOwAOhbo'}`,{
                  state:{
                    date:'14-11-2018',
                    name:'The Protector',
                    type:"Movie"
                  }
                });
              }}
            >
              
              <img src={play_icon} alt="play" className="w-6.5 max-sm:w-4" /> Play
            </button>
            <button className="flex items-center px-6 py-2 gap-2.5 text-[15px] font-semibold  bg-[#6d6d6eb3] rounded-[4px] cursor-pointer text-white hover:bg-[#6d6d6e66] max-sm:p-[4px_10px] max-sm:gap-[5px] max-sm:text-[10px]">
              
              <img src={info_icon} alt="info" className="w-6.5 max-sm:w-4" />
              More Info
            </button>
          </div>
          {windowWidth > 1024 && <TitleCards />}
        </div>
      </div>
      <div className="pl-[6%]">
        <TitleCards title="Blockbuster Movie" category="top_rated" />
        <TitleCards title="Only on Netflix" category="upcoming" />
        <TitleCards title="Upcomings" category="now_playing" />
        <TitleCards title="Top picks for you" category={"popular"} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
