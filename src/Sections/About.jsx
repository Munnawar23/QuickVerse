import React from 'react'; 
import { motion } from 'framer-motion';
import aboutVideo from '../assets/drone.mp4';  

const About = () => { 
    const videoVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return ( 
        <section className='max-w-7xl mx-auto border-b-2 mt-10 ' id='about'> 
            <h2 
                className='text-3xl text-[#8F1413] font-extrabold tracking-tighter lg:text-4xl text-center uppercase mb-8 mx-4'
            > 
                why quick-verse 
            </h2> 
            <motion.div 
                className="flex flex-col items-center lg:space-x-8 mx-4 mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
            > 
                <motion.div 
                    className="mb-8 lg:mb-0" 
                    variants={videoVariants} 
                    transition={{ duration: 0.8, delay: 0.2 }}
                > 
                    <motion.video
                        src={aboutVideo}
                        alt="About QuickVerse"
                        className='w-[600px] h-[300px] lg:w-[1000px] lg:h-[500px] object-cover'
                        autoPlay 
                        loop 
                        muted
                    />
                </motion.div> 
                <motion.p 
                    className='text-xl lg:text-4xl font-light text-center lg:text-left max-w-5xl mx-auto lg:mt-8' 
                    variants={textVariants}
                    transition={{ duration: 0.8, delay: 0.4 }}
                > 
                    QuickVerse is a hyper-local delivery startup transforming campus life with cutting-edge drone technology. We specialize in fast, reliable, and eco-friendly delivery of groceries, meals, books, and more, tailored to meet the needs of India's top campuses. Our advanced drone delivery system ensures swift service while reducing environmental impact, making QuickVerse a smarter, greener choice. Whether it’s a late-night meal, urgent groceries, or a last-minute textbook, we’re here to make campus life simpler and more efficient. 
                </motion.p> 
                <motion.div 
                    className="details w-[90%] lg:w-[80%] flex items-center justify-between mt-10"
                    variants={textVariants}
                    transition={{ duration: 0.8, delay: 0.6 }}
                > 
                    <div className="text-center"> 
                        <h3 className="text-2xl lg:text-3xl text-[#8F1413] font-semibold">22,000+</h3> 
                        <p className="text-sm lg:text-lg text-[#103e60]">Orders Delivered</p> 
                    </div> 
                    <div className="text-center"> 
                        <h3 className="text-2xl lg:text-3xl text-[#8F1413] font-semibold">85+</h3> 
                        <p className="text-sm lg:text-lg text-[#103e60]">Total Vendors</p> 
                    </div> 
                    <div className="text-center"> 
                        <h3 className="text-2xl lg:text-3xl text-[#8F1413] font-semibold">10+</h3> 
                        <p className="text-sm lg:text-lg text-[#103e60]">Total Campuses</p> 
                    </div> 
                </motion.div> 
            </motion.div> 
        </section> 
    ); 
}; 

export default About;
