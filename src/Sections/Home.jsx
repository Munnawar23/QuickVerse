import React from 'react';
import Navbar from '../Components/Navbar';
import drone from "../assets/drone.mp4"; // Importing the video file

const Home = () => {
  return (
    <section className="home h-screen w-full relative">
      {/* Full-Screen Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={drone} type="video/mp4" /> {/* Set the source to the imported video */}
        Your browser does not support the video tag.
      </video>

      {/* Navbar on top of the video */}
      <Navbar />

      {/* Text at the bottom center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 text-center text-white">
        <h2 className="text-2xl font-bold">India’s First</h2>
        <h3 className="text-xl">Hyper Local Delivery</h3>
        <p className="text-lg">Startup for Educational Campuses</p>
      </div>
    </section>
  );
};

export default Home;
