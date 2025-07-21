import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1650692201357-3b1b15469952?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                w-screen h-screen bg-no-repeat bg-cover bg-center 
                flex flex-col items-center justify-center p-10 gap-4 text-white">
      
      <h1 className="text-4xl font-bold">Lost your way?</h1>
      <p className="text-center max-w-md text-lg font-semibold">
        Sorry, we can't find that page. You'll find lots to explore on the home page.
      </p>
      <button 
        onClick={() => navigate('/')} 
        className="px-5 py-2 bg-white rounded text-black font-semibold cursor-pointer hover:bg-[#b3b3b3] transition"
      >
        Netflix Home
      </button>
    </div>
  );
};

export default NotFoundPage;
