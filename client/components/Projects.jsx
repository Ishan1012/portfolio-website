'use client';
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/hooks/ProjectsHook';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  // Autoplay is passed as a plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateCurrent = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', updateCurrent);
    updateCurrent(); // set initial index
    return () => emblaApi.off('select', updateCurrent);
  }, [emblaApi, updateCurrent]);

  const scrollTo = (index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Work
        </motion.h2>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-4 select-none cursor-grab active:cursor-grabbing"
              >
                <div className="border border-neutral-800 rounded-lg p-6 h-full flex flex-col">
                  <div className="border border-neutral-900 mx-2 my-2 mb-8 rounded-md">
                    <Image src={project.img} width={500} height={250} alt={project.title} className='w-full h-auto rounded-md' />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-neutral-400 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-neutral-800 text-xs px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 mt-auto">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={`h-3 w-3 rounded-full cursor-pointer border border-neutral-500 transition-colors ${index === selectedIndex ? 'bg-white' : 'bg-neutral-500/40'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;