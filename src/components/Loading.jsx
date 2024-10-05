import React, { useEffect, useState } from 'react'
import Error from './Error';

function Loading() {
    const [error, setError] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setError(true);
        }, 7500) 
    },[])

  return (
    <div>
        {!error &&
            sessionStorage.getItem('targetUrl') ? 
            <div>
                <img 
                    src={'https://media.tenor.com/McPQygGOuXYAAAAi/gladgers-hacker-gers-guardians-of-galaxy.gif'}
                    className='mx-auto'
                />
                {/* <h1 className='text-3xl text-white text-center mx-auto loader'>Loading...</h1> */}
                <div className='loader mx-auto mt-5 text-[#EEEEEE]'></div>
            </div>
            : !error && <h1 className='z-50 text-3xl text-[#EEEEEE] text-center mt-32'>Please specify a target URL before proceeding.</h1>
        }
        {
            error && <Error/>
        }
    </div>
  )
}   

export default Loading