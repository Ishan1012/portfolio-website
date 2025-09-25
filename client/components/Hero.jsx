'use client';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="h-120 pt-20 w-full flex flex-col justify-center items-center relative">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        >
          Hi! I'm <span className='text-teal-300'>Ishan Dwivedi</span>
        </motion.h1>
        <TypeAnimation
          sequence={[
            "I'm a Full Stack Developer.",
            2000,
            "I'm a UI/UX Enthusiast.",
            2000,
            "I build minimalist web experiences.",
            2000,
          ]}
          wrapper="p"
          speed={50}
          className="text-lg md:text-2xl text-neutral-400"
          repeat={Infinity}
        />
        <button onClick={() => {}} className='mt-10 py-3 px-8 rounded-md text-neutral-800 bg-white cursor-pointer'>
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;