import React, { useState } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "../Data/services";

const Services = () => {
  const [activeTab, setActiveTab] = useState(SERVICES[0]);

  return (
    <section
      className="p-6 text-emerald-950 border-b-2 max-w-7xl mx-auto"
      id="services"
    >
      <div className="container mx-auto">
        <motion.h2
          className="my-8 text-center text-4xl text-[#103e60]  font-bold sm:font-extrabold tracking-tighter uppercase"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>

        {/* Tab Buttons */}
        <div className="flex items-center justify-center lg:space-x-8">
          {SERVICES.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold lg:tracking-tighter transition-colors text-lg lg:text-2xl ${
                activeTab.id === tab.id
                  ? "border-b-2 border-[#103e60] text-[#103e60]"
                  : "text-gray-700"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {tab.title}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          key={activeTab.id}
          className="mt-8 flex flex-col items-center lg:flex-row"
        >
          {/* Content Section */}
          <div className="p-4 lg:w-1/2">
            <h2 className="mb-4 text-3xl text-[#103e60] font-semibold lg:text-4xl">
              {activeTab.content}
            </h2>
            <p className="text-lg tracking-tighter lg:text-2xl">
              {activeTab.description}
            </p>
          </div>

          {/* Image Section */}
          <div className="p-4 lg:w-1/2">
            <img
              src={activeTab.image}
              alt={activeTab.title}
              className="rounded-lg lg:h-[400px] lg:w-[500px] h-[300px] w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
