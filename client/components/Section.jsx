'use client';
import { motion } from 'framer-motion';

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 px-4 border-t border-neutral-900">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
};

export default Section;