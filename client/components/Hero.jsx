'use client';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} className="flex justify-center items-center gap-x-3 mt-10">
          <Link target='_blank' href="mailto:ishandwivedi1210@gmail.com" className='p-1.5 rounded-full text-neutral-800 border-2 border-neutral-100 hover:border-rose-500 hover:text-rose-500 hover:bg-transparent bg-neutral-100 cursor-pointer transition duration-200'>
            <Mail size={30} />
          </Link>
          <Link target='_blank' href="https://www.linkedin.com/in/ishan-dwivedi-8146712b9/" className='p-1.5 rounded-full text-neutral-800 border-2 border-neutral-100 hover:border-cyan-500 hover:text-cyan-500 hover:bg-transparent bg-neutral-100 cursor-pointer transition duration-200'>
            <Linkedin size={30} />
          </Link>
          <Link target='_blank' href="https://github.com/Ishan1012/" className='p-1.5 rounded-full text-neutral-800 border-2 border-neutral-100 hover:border-gray-500 hover:text-gray-500 hover:bg-transparent bg-neutral-100 cursor-pointer transition duration-200'>
            <Github size={30} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;