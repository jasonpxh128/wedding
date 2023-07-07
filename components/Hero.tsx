'use client'
import React from 'react'
import { Cursor, Typewriter } from  'react-simple-typewriter';
{/*import BackgroundCircles from "./BackgroundCircles"*/}
import circlelogo from "@/public/assets/wedlogo91.png"
import wedbg from "@/public/assets/wedbg.webp"
import mobilebg from "@/public/assets/mobilebg.webp"


import Image from 'next/image'

import { useEffect } from 'react'


type Props = {};

export default function hero({}: Props) {
    // const [text, count] = useTypewriter({
    //     words: [
    //         "Devil's in the details here at Miyagi's ", "Wax On, Wax Off"
    //     ], 
    //     delaySpeed: 800,
    //     typeSpeed: 30,
    //     loop: true,

    // });
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'> 
        {/*<BackgroundCircles />*/}
            <Image className="z-0 invisible md:visible" src= {wedbg} alt='logo' fill style={{objectFit:"cover"}}/>
            <Image className="z-0 md:invisible" src= {mobilebg} alt='logo' fill style={{objectFit:"cover"}}/>
            <Image className="relative rounded-full mx-auto object-cover mb-8 z-10" src= {circlelogo} alt='logo'/>
            {/* <img className=' relative rounded-full h-40 w-40 mx-auto object-cover mb-8' src="/assets/logo.jpg" alt="" /> */}
            <h1 className=' text-xl md:text-5xl lg:text-4xl text-[#F48377] font-serif p-10 z-10'>
                <span>
                  <Typewriter
                    words={['You are invited to our Wedding!','See you on the 6th Jan 2024']}
                    // cursor
                    cursorStyle='_'
                    loop={true}
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}  
                  
                  />
                </span>
                <Cursor cursorColor="#EF4444" cursorStyle='_'/>
            </h1>
            <a href="https://forms.gle/FyKxxWpVwj94kCpK7" className='z-10'>
              <button className="bg-[#F48377] hover:bg-white text-white hover:text-[#F48377] font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out z-10">RSVP Here</button>
            </a>
            {/* <h2 className=' text-2xl uppercase text-gray-500 pb-2 tracking-[15px]'>6th Jan 2024</h2> */}

    </div>
  );
}
