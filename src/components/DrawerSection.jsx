import React from 'react'
import { useNavigate } from 'react-router-dom'

function DrawerSection({current, title, logo, url}) {
    const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/${url}`)} className='flex py-4 border-2 border-transparent relative space-x-2 hover:border-[#EEEEEE] hover:text-[#65747B] hover:transition-colors hover:duration-500 cursor-pointer'>
        <img className={current ? 'ml-3' : 'ml-3'} src={logo} />
        <h1 className={current ? 'block' : 'hidden'}>{title}</h1>
    </div>
  )
}

export default DrawerSection