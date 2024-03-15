// import React from 'react';

interface AppNameProps {
  text: string;
}

function AppName({ text }: AppNameProps) {
  return (
    <div className='text-[45px]  w-full h-[100vh] bg-slate-400 text-white font-extrabold uppercase flex justify-center items-center text-center tracking-wide'>
      {text}
    </div> 
  );
}

export default AppName;