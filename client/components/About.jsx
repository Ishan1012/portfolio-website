'use client';
import Image from "next/image";
import Section from "./Section";
import { motion } from "framer-motion";

const About = () => (
  <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-12 lg:gap-20 xl:gap-28 px-4 sm:px-8 max-w-6xl mx-auto">

    {/* Profile Image Section */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="relative flex-shrink-0"
    >
      <div className="rounded-full overflow-hidden border-4 border-neutral-800/50 shadow-xl">
        <Image
          src='/icons/profile2.webp'
          width={250}
          height={250}
          alt="Ishan Dwivedi Profile"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover transition duration-500 hover:scale-110"
        />
      </div>
    </motion.div>

    {/* Text Section */}
    <div className="flex-1 max-w-xl">
      <Section id="about" title="About Me">
        <p className="text-base sm:text-lg text-neutral-400 leading-relaxed text-center md:text-left">
          Tech enthusiast focusing on web development, UI/UX design, and machine learning. Experienced in designing user-centric applications, including a responsive portfolio and creative UI/UX challenges, committed to delivering innovative solutions and advancing technical and design expertise.
        </p>
      </Section>
    </div>

  </div>
);

export default About;