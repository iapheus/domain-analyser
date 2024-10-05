import React, { useEffect, useState } from 'react';
import HackerAnimation from '../components/HackerAnimation';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    if(url === ''){
      return
    }
    const cleanedUrl = url.replace(/^(https?:\/\/)?(www\.)?/i, '').replace(/\/$/, ''); 
    sessionStorage.setItem('targetUrl', cleanedUrl);
    navigate('/quality');
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <div className="bg-[#072030] p-6 md:p-8 rounded-lg max-w-md w-full text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#EEEEEE] mb-4">
          Get the Inside Scoop on Your Website's Security
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          In only 20 seconds, uncover the vulnerabilities hackers might exploit.
        </p>
        <p className="text-base md:text-lg text-[#EEEEEE] mb-8">
          Simply input your URL to reveal hidden risks 👇
        </p>
        <input
          type="text"
          className="w-full p-3 bg-[#1A313F] text-[#EEEEEE] md:text-lg border-none rounded-md mb-4 focus:outline-none"
          placeholder="Enter URL here..."
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <button
          className="w-full py-2 md:py-3 text-base md:text-lg text-[#EEEEEE] bg-[#0D2635] rounded-md hover:bg-[#1A313F] focus:outline-none border-2 border-transparent animate-border-animation"
          onClick={handleClick}
        >
          Check Security
        </button>
      </div>
      <HackerAnimation />
    </div>
  );
}

export default Main;
