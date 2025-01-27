import React from "react";
import { CAMPUSES_DATA } from "../Data/campuses";
import "remixicon/fonts/remixicon.css";
import { motion } from "framer-motion";

const Campuses = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="campuses">
      <div className="lg:my-20 my-10">
        <motion.h2
          className="text-3xl lg:text-4xl text-[#103e60] font-bold sm:font-extrabold tracking-tighter text-center uppercase mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Our Top Campuses
        </motion.h2>
        {CAMPUSES_DATA.map((campus, index) => (
          <div key={index} className="mb-12 mx-4 flex flex-col lg:flex-row">
            {/* Image Section */}
            <motion.div
              className={`lg:w-1/2 mb-4 lg:mb-0 ${
                index % 2 === 0 ? "" : "lg:order-2"
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <img
                src={campus.image}
                alt={campus.title}
                className="w-full h-auto object-fit rounded-lg"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              className={`lg:w-1/2 flex flex-col ${
                index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl lg:text-3xl font-semibold text-[#103e60] ">
                {campus.title}
              </h3>
              <p className="mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9">
                {campus.description}
              </p>
              {/* Highlights Section */}
              <ul className="flex flex-col gap-2">
                {campus.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-lg lg:text-xl"
                  >
                    <i className="ri-checkbox-circle-fill text-[#103e60] mr-2"></i>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Campuses;
