import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, Mail, ArrowRight, Download } from 'lucide-react'
import { socials } from '../data/content'

const scatterPoints = [
  [40, 220], [90, 180], [70, 260], [140, 150], [180, 190],
  [210, 120], [250, 160], [290, 90], [320, 130], [360, 60],
  [120, 240], [230, 210], [300, 190], [160, 90], [380, 110],
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden dot-grid"
    >
      <div className="absolute inset-0 bg-pink-radial pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center relative">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow mb-5">dataset: introduction.csv</span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-primary">Ishita</span> <span aria-hidden>👋</span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl font-medium text-ink/80 dark:text-cream/80">
            Aspiring Data Science Engineer{' '}
            <span className="text-primary">|</span> AI &amp; Data Science Enthusiast
          </p>

          <p className="mt-4 text-base sm:text-lg text-ink/60 dark:text-cream/60 max-w-xl">
            I build projects, solve problems, and continuously learn new technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" download className="btn-outline">
              Download Resume <Download size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me <Mail size={18} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <SocialIcon href={socials.github} label="GitHub" icon={<Github size={20} />} />
            <SocialIcon href={socials.linkedin} label="LinkedIn" icon={<Linkedin size={20} />} />
            <SocialIcon href={socials.leetcode} label="LeetCode" icon={<Code2 size={20} />} />
            <SocialIcon href={`mailto:${socials.email}`} label="Email" icon={<Mail size={20} />} />
          </div>
        </motion.div>

        {/* Signature visual: scatter plot -> regression line, with avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            <svg
              viewBox="0 0 420 320"
              className="w-full h-full"
              role="img"
              aria-label="Illustration of a scatter plot with a fitted trend line, representing data analysis"
            >
              {/* axes */}
              <line x1="30" y1="20" x2="30" y2="290" stroke="#FFC0CB" strokeWidth="2" />
              <line x1="30" y1="290" x2="400" y2="290" stroke="#FFC0CB" strokeWidth="2" />

              {/* scatter points */}
              {scatterPoints.map(([x, y], i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="6"
                  fill="#FF69B4"
                  opacity="0.75"
                  className="animate-pulseDot"
                  style={{ animationDelay: `${i * 0.12}s` }}
                />
              ))}

              {/* regression line */}
              <line
                x1="35"
                y1="255"
                x2="395"
                y2="55"
                stroke="#FF69B4"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="600"
                className="animate-drawline"
              />
            </svg>

            {/* Avatar placeholder */}
            <div className="absolute -bottom-4 -right-2 sm:bottom-2 sm:right-4 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-pink-gradient p-1 shadow-xl shadow-primary/30 animate-float">
              <div className="w-full h-full rounded-full bg-white dark:bg-dark-card flex items-center justify-center overflow-hidden border-4 border-white dark:border-dark-card">
                <span className="font-display font-bold text-3xl sm:text-4xl text-primary">IG</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-full flex items-center justify-center bg-white dark:bg-dark-card border border-secondary/50 dark:border-primary/20 text-primary hover:bg-primary hover:text-white hover:-translate-y-1 shadow-sm transition-all duration-300"
    >
      {icon}
    </a>
  )
}
