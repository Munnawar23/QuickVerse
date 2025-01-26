import React from 'react'
import { motion } from 'framer-motion';

import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className='flex min-h-screen flex-wrap items-center mt-20 lg:mt-0'>
      <div className="w-full p-8 md:w-1/2">
      {/* <div className="mb-4 flex space-x-2">
        <motion.img 
        initial={{opacity:0, scale:0.8}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.8, delay: 0.1}}
        src={image1} alt="image" className='h-12 w-12 rounded-full border-2 border-orang-50' />
        <motion.img 
         initial={{opacity:0, scale:0.8}}
         animate={{opacity: 1, scale: 1}}
         transition={{duration: 0.8, delay: 0.2}}
        src={image2} alt="image" className='h-12 w-12 rounded-full border-2 border-orang-50' />
      </div> */}
      <motion.h1 
       initial={{opacity:0, y:-30}}
       animate={{opacity: 1, y: 0}}
       transition={{duration: 0.8,}}
      className='text-4xl tracking-tighter md:text-5xl lg:text-7xl font-bold'>
      India’s First Hyper Local 
      <span className='text-[#8F1413] '> Delivery Startup </span>  for Educational Campuses 
      </motion.h1>
      <motion.button 
      initial={{opacity:0, y:-30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1,}}
      className='mt-8 flex items-center gap-2 rounded-full text-white bg-[#8F1413] px-4 py-3 hover:bg-[#103e60]'>
        <span>Know More</span>
        <i class="ri-arrow-right-line"></i>
      </motion.button>
      </div>
      <div className="w-full md:w-1/2 lg:p-8 lg:mt-20 mb-28 lg:mb-0">
      <motion.img 
      initial={{opacity:0, scale: 0.8, }}
      animate={{opacity: 1, scale: 1, }}
      transition={{duration: 1,}}
      src={hero} alt=" QuickVerse" className='lg:ml-24' /></div>
    </section>
  )
}

export default Hero