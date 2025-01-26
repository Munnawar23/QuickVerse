import React from 'react';
import { motion } from 'framer-motion';

import hero from "../assets/hero.png";

const Hero = () => {
  // Function to handle scroll to "about" section
  const handleScrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,  // Scroll to the top of the "about" section
        behavior: "smooth",      // Smooth scroll effect
      });
    }
  };

  return (
    <section className='flex min-h-screen flex-wrap items-center mt-20 lg:mt-0'>
      <div className="w-full p-8 md:w-1/2">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl tracking-tighter md:text-5xl lg:text-7xl font-bold text-[#103e60]'>
          India’s First Hyper Local 
          <span className='text-[#8F1413] '> Delivery Startup </span>  for Educational Campuses
        </motion.h1>
        <motion.button 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onClick={handleScrollToAbout}  // Use the function here
          className='mt-8 flex items-center gap-2 rounded-full text-white bg-[#8F1413] px-4 py-3 hover:bg-[#103e60]'>
          <span>Know More</span>
          <i className="ri-arrow-right-line"></i>
        </motion.button>
      </div>
      <div className="w-full md:w-1/2 lg:p-8 lg:mt-20 mb-28 lg:mb-0">
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={hero} alt="QuickVerse" className='lg:ml-24' />
      </div>
    </section>
  );
}

export default Hero;
