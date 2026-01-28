'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-8 bg-black/50 backdrop-blur-sm"
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:scale-[1.2] transition duration-300">
          I<span className='text-teal-300'>D</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6 ml-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a href='mailto:ishandwivedi1210@gmail.com' className="border border-white px-4 py-1.5 rounded-md text-sm hover:border-teal-300 hover:bg-teal-300 cursor-pointer hover:text-black transition-colors duration-300">
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;