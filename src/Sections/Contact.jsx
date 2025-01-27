import React from 'react';
import { CONTACT_INFO } from '../Data/contactInfo';
import { RiMailLine, RiMapPinLine, RiPhoneLine } from '@remixicon/react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto" id="contact">
      <div className="my-10 lg:my-20">
        <motion.h2
          className="text-3xl text-[#103e60] lg:font-extrabold font-bold tracking-tighter lg:text-4xl text-center uppercase mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Contact us
        </motion.h2>

        <motion.p
          className="max-w-2xl lg:text-2xl text-xl mb-12 text-center mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          {CONTACT_INFO.text}
        </motion.p>

        <motion.div
          className="flex flex-col lg:flex-row justify-around mx-4 text-[#103e60]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <RiPhoneLine className="text-3xl mr-4" />
            <div className="">
              <p className="lg:text-lg text-xl font-semibold">{CONTACT_INFO.phone.label}</p>
              <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
            </div>
          </motion.div>

          <motion.div
            className="flex mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <RiMailLine className="text-3xl mr-4" />
            <div className="">
              <p className="lg:text-lg text-xl font-semibold">{CONTACT_INFO.email.label}</p>
              <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
            </div>
          </motion.div>

          <motion.div
            className="flex"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <RiMapPinLine className="text-3xl mr-4" />
            <div className="">
              <p className="lg:text-lg text-xl font-semibold">{CONTACT_INFO.address.label}</p>
              <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
