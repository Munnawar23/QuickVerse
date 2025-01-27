import React from "react";
import { REVIEW_DATA } from "../Data/reviews";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 lg:py-20 py-10 border-b-2" id="reviews">
      <motion.h2
        className="text-3xl text-[#103e60] font-extrabold tracking-tighter lg:text-4xl text-center uppercase mb-8 mx-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        What People Say
      </motion.h2>
      
      <div className="containers mx-auto flex flex-wrap gap-8">
        {REVIEW_DATA.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`rounded-3xl p-4 ${testimonial.bgColor} ${testimonial.textColor} flex min-w-[250px] h-[450px] flex-1 flex-col items-center justify-between`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.2 }} 
            viewport={{ once: true }}
          >
            {/* Image */}
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="h-32 w-32 rounded-3xl object-cover"
            />
            
            {/* Testimonial text */}
            <p className="text-lg md:text-xl lg:text-lg text-center px-4">
              {testimonial.text}
            </p>
            
            {/* Author and title */}
            <div className="text-center">
              <p className="font-bold">{testimonial.author}</p>
              <p className="text-sm">{testimonial.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
