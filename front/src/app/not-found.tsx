'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

const PageNotFound: React.FC = () => {

    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        router.push('/');
    }

    const handleClick2 = () => {
        console.log(pathname);
    }

  return (
    <div className='fixed bg-white z-50 inset-0'>
      <nav className="w-full h-20 pl-24 flex items-center">
        <a href="#" className="text-black font-inconsolata font-bold text-2xl">
          404 NOT FOUND
        </a>
      </nav>

      <main className="w-11/12 h-4/5 flex justify-between">
        <div className="w-9/10 h-full mx-auto flex items-center">
          <img
            src="https://pbs.twimg.com/media/GPgcuitXkAAKTYh?format=jpg&name=medium"
            className="block w-[539.22px] animate-upAndDown mr-10"
            alt="Scarecrow"
          />

          <div className="w-[586px] h-full flex flex-col justify-center">
            <h1 className="text-6xl font-bold leading-tight tracking-tight">
              I have bad news for you
            </h1>

            <p className="w-[381px] h-[108px] text-2xl mt-9">
              The page you are looking for might be removed or is temporarily unavailable
            </p>

            <button className="w-[216px] h-[68px] bg-black text-white my-16 rounded-xl" onClick={handleClick}>
              Back to homepage
            </button>
           
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageNotFound;
