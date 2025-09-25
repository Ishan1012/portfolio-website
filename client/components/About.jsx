'use client';
import Image from "next/image";
import Section from "./Section";
import { motion } from "framer-motion";

const About = () => (
  <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-x-[3rem] xl:gap-x-[7rem]">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="rounded-full transition duration-200">
      <Image src='/icons/profile2.webp' width={250} height={250} alt="profile" className="w-40 h-40 md:h-50 md:w-50 xl:h-full xl:w-full rounded-full transition duration-300 hover:scale-[1.1]" />
    </motion.div>
    <Section id="about" title="About Me">
      <p className="max-w-md mx-auto text-center text-neutral-400">
        Tech enthusiast focusing on web development, UI/UX design, and machine learning. Experienced in designing user-centric applications, including a responsive portfolio and creative UI/UX challenges, committed to delivering innovative solutions and advancing technical and design expertise. 
      </p>
    </Section>
  </div>
);

export default About;