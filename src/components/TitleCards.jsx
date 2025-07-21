import React, { useCallback, useEffect, useRef, useState } from "react";
import card_data from "../assets/cards/Cards_data.js";
import { useNavigate } from "react-router-dom";
const TitleCards = ({ title, category,className }) => {
    const navigate = useNavigate()
  const cardsRef = useRef();
  const [apidata, setApiData] = useState([]);
  const scroller = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_TMDB_BEARER_TOKEN,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category||'now_playing'}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
      const refs = cardsRef.current
      if(!refs) return 

   refs.addEventListener("wheel",scroller);

    return (()=>refs.removeEventListener("wheel", scroller));
  }, []);

    const openTrailer = async (card) => {
  try {
   
    const response = await  fetch(`https://api.themoviedb.org/3/movie/${card.id}/videos?language=en-US`, options)

    const data = await response.json();

    const trailer = data.results[0]
    if(trailer){
        navigate(`/player/${trailer.key}`,{state:{
            date:card.release_date,
            name:card.title,
            type:trailer.type,
        }
        });
    }
    else{
        alert('Error fetching the movie')
    }
  } catch (error) {
    console.error("Error fetching trailer:", error);
    alert('Error fetching the movie')
  }


  }
  return (
    <div className="mt-[50px] mb-[30px]">
      <h2 className="mb-[8px] font-semibold">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div className="flex gap-4 overflow-x-auto card-list" ref={cardsRef}>
        {apidata.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative transform transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-xl cursor-pointer"
            onClick={()=>openTrailer(card)}
          >
            <img
            src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt="image"
              className="w-[240px] rounded-md cursor-pointer transition-all max-sm:w-[200px]"
            />
            <p className="absolute bottom-[10px] right-[10px] max-sm:text-[12px]">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
