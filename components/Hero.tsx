'use client'
import React from 'react'
import { Cursor, Typewriter } from  'react-simple-typewriter';
import {Playfair_Display} from '@next/font/google'
{/*import BackgroundCircles from "./BackgroundCircles"*/}
import circlelogo from "@/public/assets/wedlogo92.svg"
import mobilelogo from "@/public/assets/wedlogo91w.svg"
import wedbg from "@/public/assets/wedbg1.webp"
import mobilebg from "@/public/assets/mobilebg1.webp"


import Image from 'next/image'

import { useEffect } from 'react'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500'] 
})

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
    <main className={playfair.className}>
      <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'> 
        {/*<BackgroundCircles />*/}
            <Image className="z-0 invisible md:visible" src= {wedbg} alt='logo' fill style={{objectFit:"cover"}}/>
            <Image className="z-0 md:invisible" src= {mobilebg} alt='logo' fill style={{objectFit:"cover"}}/>
            <Image className="relative rounded-full mx-auto object-cover mb-8 z-10" src= {mobilelogo} alt='logo'/>

            {/* <img className=' relative rounded-full h-40 w-40 mx-auto object-cover mb-8' src="/assets/logo.jpg" alt="" /> */}
            <h1 className=' text-xl md:text-5xl lg:text-4xl text-white font-serif pt-12 md:pt-0 z-10 md:mt-0 mt-10'>
                <span>
                January | 6th | 
                  {/* <Typewriter
                    words={['You are invited to our Wedding!','See you on the 6th Jan 2024']}
                    // cursor
                    cursorStyle='_'
                    loop={true}
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}  
                  
                  /> */}
                </span>
                <span className=' text-[#E94D77] font-semibold'> 2024</span>
                <span className='inline-block md:block'>
                  HILTON HOTEL PETALING JAYA
                </span>
            </h1>
            <h1 className=' text-2xl md:text-5xl lg:text-4xl font-serif p-2 z-10'>
              <Cursor cursorColor="#EF4444" cursorStyle='\/'/>
            </h1>
            <a href="https://forms.gle/FyKxxWpVwj94kCpK7" className='z-10'>
              <button className="bg-[#E94D77] hover:bg-white text-white hover:text-[#E94D77] font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out z-10">RSVP Here</button>
            </a>
            {/* <h2 className=' text-2xl uppercase text-gray-500 pb-2 tracking-[15px]'>6th Jan 2024</h2> */}

    </div>
    </main>
    
  );
}
