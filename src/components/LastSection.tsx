// import React from 'react'
// import Button from "./Button";
import { Link } from "react-router-dom";


function LastSection() {
    const handleClick =() => {
        console.log('handleClick');
    };
  return (
    <div className='rev-sec bg-[#1E3448] border border-black p-24 mt-24 '>
       <div className="flex flex-col gap-9 text-white capitalize text-center">
        <h1 className="font-bold text-4xl">
            revolutionizing link optimizations
        </h1>
        <div className="text-center">
            <Link to='/quote'>
           <button className="pl-7 pr-7 pt-2 pb-2 bg-white text-blue-700 rounded-full w-1/8 text-center " onClick={handleClick}>
            
            Get Started
           </button>
           </Link>
           </div>
       </div>
    </div>
  )
}

export default LastSection
