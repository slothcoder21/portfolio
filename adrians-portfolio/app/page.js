import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from './components/projectTile';

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
              <Link href="#about-me" className="font-DMSans text-base md:text-lg relative hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:h-[1px] before:w-0 hover:before:w-full before:bottom-0 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:h-[1px] after:w-0 hover:after:w-full after:bottom-0 after:right-0">
                About Me.
              </Link>
              <Link href="#projects" className="font-DMSans text-base md:text-lg relative hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:h-[1px] before:w-0 hover:before:w-full before:bottom-0 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:h-[1px] after:w-0 hover:after:w-full after:bottom-0 after:right-0">
                Projects.
              </Link>
              <Link href="https://github.com/slothcoder21/portfolio" className="font-DMSans text-base md:text-lg relative hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:h-[1px] before:w-0 hover:before:w-full before:bottom-0 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:h-[1px] after:w-0 hover:after:w-full after:bottom-0 after:right-0">
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

      <section id="about-me" className="w-full min-h-screen">
        <h1 className="text-4xl font-medium mt-16 md:mt-48 mx-6 md:mx-24">
          About Me.
        </h1>
        <div>
          <h2 className="text-3xl font-medium mt-3 md:mt-10 mx-6 md:mx-24">
            Bio: 
          </h2>
        </div>
        <div id="Timeline" className="justify-center">
          <Timeline position='alternate-reverse'>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ 
                  backgroundColor: '#000000'
                }} />
                <TimelineConnector sx={{
                  backgroundColor: '#000000'
                }} />
              </TimelineSeparator>
              <TimelineContent className="font-medium font-DMSans text-2xl">
                2003 - Birth
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ 
                  backgroundColor: '#000000'
                }} />
                <TimelineConnector sx={{
                  backgroundColor: '#000000'
                }} />
              </TimelineSeparator>
              <TimelineContent className="font-medium font-DMSans text-2xl">
                2023 - Completed A.S. in Computer Science @ De Anza College
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ 
                  backgroundColor: '#000000'
                }} />
                <TimelineConnector sx={{
                  backgroundColor: '#000000'
                }} />
              </TimelineSeparator>
              <TimelineContent className="font-medium font-DMSans text-2xl">
                2024 - Front-End Developer Intern @ NSI
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ 
                  backgroundColor: '#000000'
                }} />
                <TimelineConnector sx={{
                  backgroundColor: '#000000'
                }} />
              </TimelineSeparator>
              <TimelineContent className="font-medium font-DMSans text-2xl">
                2026 - Completing B.S. in Computer Science and Statistics
                and a minor in Technology Management @ UC Davis
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div id="ilove">
          <h2 className="text-3xl font-medium mt-3 md:mt-10 mx-6 md:mx-24">
            I love:
          </h2>
          <span className='inline-flex'>
            <Image
              src="/outdoor.svg"
              alt="outdoor"
              width={300}
              height={478}
              className='rounded-md mt-3 md:mt-10 mx-6 md:mx-24'
            />
            <div className='mt-16'>
              <h1 className='font-medium text-2xl'>
                The outdoors!
              </h1>
              <p className='font-light text-xl'>
                I love spending my time outside in nature! 
              </p>
            </div>
          </span>
          
          <span className='inline-flex'>
            <Image
              src="/f1.svg"
              alt="outdoor"
              width={300}
              height={478}
              className='rounded-md mt-3 md:mt-10 mx-6 md:mx-24'
            />
            <div className='mt-16'>
              <h1 className='font-medium text-2xl'>
                Formula 1!
              </h1>
              <p className='font-light text-xl'>
                I love watching F1 races. I went to the 2023 Grand Prix in Las Vegas. 
              </p>
            </div>
          </span>

          <span className='inline-flex'>
            <Image
              src="/food.svg"
              alt="outdoor"
              width={300}
              height={478}
              className='rounded-md mt-3 md:mt-10 mx-6 md:mx-24'
            />
            <div className='mt-16'>
              <h1 className='font-medium text-2xl'>
                Food!
              </h1>
              <p className='font-light text-xl'>
                At heart, I am truly a foodie. I love trying new foods everywhere I go.
              </p>
              <p>
              This may be the reason why I have a gigantic hole in my wallet....
              </p>
            </div>
          </span>

          <span className='inline-flex'>
            <Image
              src="/climbing.svg"
              alt="outdoor"
              width={300}
              height={478}
              className='rounded-md mt-3 md:mt-10 mx-6 md:mx-24'
            />
            <div className='mt-16'>
              <h1 className='font-medium text-2xl'>
                Sports!
              </h1>
              <p className='font-light text-xl'>
                On my free time, I love to stay active. Whether it may be climbing, weight lifting, playing badminton, running, or swimming, I enjoy
                staying healthy.
              </p>
            </div>
          </span>
        </div>
      </section>

      <section id="projects" className="w-full min-h-screen">
        <h1 className="text-4xl font-medium mt-16 md:mt-48 mx-6 md:mx-24">
          Projects.
        </h1>
        <div>
          <Card 
          title='Test'
          image=''
          description='Test'
          href='Test'
          />
        </div>
        
      </section>

    </>
    
  );
}
