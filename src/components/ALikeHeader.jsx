import React from 'react';
import { useNavigate } from 'react-router-dom';

function ALikeHeader({ isSidebarOpen }) {
  const url = sessionStorage.getItem('targetUrl');
  const navigate = useNavigate();

  return (
    <div className={`z-50 fixed top-0 w-full h-14 bg-[#072030] flex items-center justify-between transition-all duration-300 ${isSidebarOpen ? 'pl-64' : 'pl-16'}`}>
      <div className="ml-4 flex" onClick={() => navigate('/')}>
        <h1 className="text-xl text-[#EEEEEE] cursor-pointer lg:text-2xl hover:text-orange-500 mr-2 lg:mr-4">
          Domain
        </h1>
        <h1 className="md:-ml-2 text-xl text-[#5bff5d] cursor-pointer lg:text-2xl hover:text-orange-500">
          Analyser
        </h1>
      </div>
      {url && (
        <div className={`flex items-center`}>
          <img
            onClick={() => window.open(`https://www.${url}/`)}
            className="hidden cursor-pointer mx-2 sm:block sm:h-10 sm:bg-cover sm:mx-4"
            src={`https://icon.horse/icon/${url}`}
            alt="icon"
          />
          <h1
            onClick={() => window.open(`https://www.${url}/`)}
            className="text-xl text-[#EEEEEE] cursor-pointer lg:text-2xl underline hover:transition-all hover:duration-150 hover:text-[#65747B] mr-2 lg:mr-5"
          >
            {url}
          </h1>
        </div>
      )}
    </div>
  );
}

export default ALikeHeader;
