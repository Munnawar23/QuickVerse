import React from 'react';
import { SERVICES_CONTENT } from '../Data/campuses';
import 'remixicon/fonts/remixicon.css'; // Make sure remixicon is installed and imported

const Campuses = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="campuses">
      <div className="lg:my-20 my-10">
        <h2 className="text-3xl lg:text-4xl text-[#103e60] font-bold sm:font-extrabold tracking-tighter text-center uppercase mb-20">
          Our Top Campuses
        </h2>
        {SERVICES_CONTENT.map((services, index) => (
          <div key={index} className="mb-12 mx-4 flex flex-col lg:flex-row">
            {/* Image Section */}
            <div
              className={`lg:w-1/2 mb-4 lg:mb-0 ${
                index % 2 === 0 ? '' : 'lg:order-2'
              }`}
            >
              <img
                src={services.image}
                alt={services.title}
                className="w-full h-auto object-fit rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div
              className={`lg:w-1/2 flex flex-col ${
                index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'
              }`}
            >
              <h3 className="text-xl lg:text-3xl font-semibold text-[#103e60] ">
                {services.title}
              </h3>
              <p className="mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9">
                {services.description}
              </p>
              {/* Highlights Section */}
              <ul className="flex flex-col gap-2">
                {services.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-lg lg:text-xl">
                    <i className="ri-checkbox-circle-fill text-[#103e60] mr-2"></i>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Campuses;
