import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="eyebrow justify-center mb-4">dataset: projects.csv</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-ink/60 dark:text-cream/60 max-w-2xl mx-auto">
            A few things I've built while learning, practicing and exploring new ideas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6 sm:p-7 flex flex-col"
            >
              <h3 className="font-display font-semibold text-xl mb-2">{project.title}</h3>
              <p className="text-ink/65 dark:text-cream/65 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-secondary/30 dark:bg-primary/10 text-ink/70 dark:text-cream/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 !py-2.5 text-sm"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={project.demo}
                  className="btn-primary flex-1 !py-2.5 text-sm"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
