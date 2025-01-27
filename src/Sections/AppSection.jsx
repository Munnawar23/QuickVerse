import React from 'react';
import app1 from "../assets/app1.png";

const AppSection = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 pb-16 h-full" id="app">
      <h2 className="my-8 text-center text-4xl text-[#103e60] font-bold sm:font-extrabold tracking-tighter uppercase">
        Quick-Verse 2.0
      </h2>
      <div className="links h-auto w-[90%] mx-auto lg:w-full bg-yellow-100 rounded-[50px] p-6 lg:p-20 flex flex-col lg:flex-row justify-between items-center">
        <div className="text-content lg:w-2/3 lg:mb-0 px-4 sm:px-8">
          <h3 className="lg:text-2xl text-xl mb-4 sm:mb-8 lg:mt-0 mt-2 font-bold text-gray-700">Our App is Live Now!</h3>
          <p className="lg:text-4xl text-4xl lg:mt-0 mt-8 text-[#103e60] font-semibold mb-6 sm:mb-10 lg:mb-12">
            Download our app to order <br /> on your campus.
          </p>
          <div className="flex flex-col lg:flex-row space-y-6 sm:space-y-8 lg:space-y-0 lg:gap-5">
            <a
              href="https://play.google.com/store/apps/details?id=com.quickverse&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full lg:w-56 border-2 border-[#103e60] rounded-full px-6 py-3 hover:shadow-lg hover:border-gray-400 mb-6 sm:mb-8 lg:mb-0"
            >
              <i className="ri-google-play-line text-2xl text-[#103e60] mr-4"></i>
              <span className="text-gray-800 font-medium">Download from Play Store</span>
            </a>
            <a
              href="https://apps.apple.com/in/app/quickverse/id6584528967"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full lg:w-56 border-2 border-[#103e60] rounded-full px-6 py-3 hover:shadow-lg hover:border-gray-400 mb-6 sm:mb-8 lg:mb-0"
            >
              <i className="ri-apple-fill text-2xl text-[#103e60] mr-4"></i>
              <span className="text-gray-800 font-medium">Download from App Store</span>
            </a>
          </div>
        </div>
        <div className="image-content lg:w-1/3 mt-10 lg:mt-0 hidden lg:block">
          <img src={app1} alt="App" className="w-full h-auto rounded-[50px]" />
        </div>
      </div>
    </section>
  );
};

export default AppSection;
