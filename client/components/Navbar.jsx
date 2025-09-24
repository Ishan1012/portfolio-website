'use client';
import { motion } from 'framer-motion';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
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
        <a href="#" className="text-2xl font-bold tracking-tighter text-teal-300">
            ID
        </a>
        <div className="hidden md:flex items-center space-x-6 ml-25">
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
          <button className="text-white hover:text-teal-300 transition-colors duration-300 cursor-pointer">
            Login
          </button>
          <button className="border border-white px-4 py-1.5 rounded-md text-sm hover:border-teal-300 hover:bg-teal-300 cursor-pointer hover:text-black transition-colors duration-300">
            Register
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;