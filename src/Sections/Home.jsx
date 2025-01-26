import React from 'react';
import main from '../assets/main.mp4';

const Home = () => {
  return (
    <section className='h-screen w-full relative'>
      <video 
        src={main} 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover" 
      />
      <div className="absolute bottom-10 left-0 right-0 text-center text-white font-bold px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl ">
          India’s First <br />
          Hyper Local Delivery <br />
          Startup for <br />
          Educational Campuses
        </h1>
      </div>
    </section>
  );
};

export default Home;
