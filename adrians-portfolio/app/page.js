import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen relative">
        <div id="Home">
          <div id="header" className="flex flex-col md:flex-row items-center md:items-start md:justify-between p-6 md:p-0">
            <div className="flex-shrink-0 md:ml-24">
              <Link href="#Home">
                <Image
                  src="/logo.svg"
                  alt="Computer Icon"
                  width={67}
                  height={69}
                  className="md:absolute md:mt-16"
                />
              </Link>
              
            </div>
            <div id="Navbar" className="mt-6 md:mt-16 text-[#858585] space-x-4 md:space-x-10 md:mr-24">
              <Link href="#about-me" className="font-DMSans text-base md:text-lg relative
              hover:text-black cursor-pointer transition-all ease-in-out 
              before:transition-[width] before:ease-in-out before:duration-700 
              before:absolute before:bg-black before:h-[1px] before:w-0 hover:before:w-full 
              before:bottom-0 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 
              after:absolute after:bg-black after:h-[1px] after:w-0 hover:after:w-full after:bottom-0 after:right-0">
                About Me.
              </Link>
              <Link href="#projects" className="font-DMSans text-base md:text-lg relative
              hover:text-black cursor-pointer transition-all ease-in-out 
              before:transition-[width] before:ease-in-out before:duration-700 
              before:absolute before:bg-black before:h-[1px] before:w-0 hover:before:w-full 
              before:bottom-0 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 
              after:absolute after:bg-black after:h-[1px] after:w-0 hover:after:w-full after:bottom-0 after:right-0">
                Projects.
              </Link>
              <Link href="#source-code" className="font-DMSans text-base md:text-lg relative
              hover:text-black cursor-pointer transition-all ease-in-out 
              before:transition-[width] before:ease-in-out before:duration-700 
              before:absolute before:bg-black before:h-[1px] before:w-0 hover:before:w-full 
              before:bottom-0 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 
              after:absolute after:bg-black after:h-[1px] after:w-0 hover:after:w-full after:bottom-0 after:right-0">
                Source Code.
              </Link>
            </div>
          </div>
          <div id="title" className="mt-16 md:mt-48 mx-6 md:mx-24">
            <h1 className="font-ibm font-medium text-4xl md:text-6xl drop-shadow-md">
              Hi, I'm Adrian.
            </h1>
            <h2 className="font-DMSans text-2xl md:text-4xl font-normal mt-4">
              I'm a student and an aspiring software engineer.
            </h2>
          </div>
        </div>
      </main>

      <section id="about-me" className='w-full min-h-screen'>
        <h1 className="text-4xl font-medium mt-16 md:mt-48 mx-6 md:mx-24 overflow-x-hidden overflow-y-hidden">
          About Me.
        </h1>
        <div id="Timeline" className='justify-center'>

        </div>
      </section>

      <section id="projects" className='w-full min-h-screen'>
        <h1>
          Projects.
        </h1>
      </section>
    </>
    
  );
}
