'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'
import { portfolio } from '@/data/content'
import { cn } from '@/lib/utils'

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolio[0] | null>(null)

  return (
    <section id="work" className="pt-24 md:pt-32 pb-8 bg-card/50">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-accent mb-4 block">
            Selected Work
          </span>
          <h2 className="heading-section">
            Projects that{' '}
            <span className="text-gradient">deliver results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group cursor-pointer"
              onClick={() => i < 3 ? null : setSelectedProject(project)}
            >
              {i === 0 ? (
                <a 
                  href="https://www.youtube.com/watch?v=l3_M9iCL2GU&t=19s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={project.image}
                      alt="Promedon brand and website project"
                      fill
                      className="object-cover"
                    />
                  </div>
                </a>
              ) : i === 1 ? (
                <a 
                  href="https://rikkemolge.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={project.image}
                      alt="Rikke Molge jewelry e-commerce project"
                      fill
                      className="object-cover"
                    />
                  </div>
                </a>
              ) : i === 2 ? (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={project.image}
                    alt="E-commerce growth performance dashboard showing sales results"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <a 
                  href="https://www.youtube.com/watch?v=yayTFb0dJFw&t=2s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View product launch video case study"
                  className="block"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={project.image}
                      alt="Brand identity and strategy project for tech startup"
                      fill
                      className="object-cover"
                    />
                  </div>
                </a>
              )}
              <span className="text-xs font-mono uppercase tracking-wider text-accent mb-2 block">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-foreground/5 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-card rounded-2xl overflow-hidden border border-foreground/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background rounded-full hover:bg-foreground/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative aspect-video">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-8">
                <span className="text-xs font-mono uppercase tracking-wider text-accent mb-2 block">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-semibold mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-2 rounded-full bg-foreground/5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
