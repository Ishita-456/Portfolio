import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { highlights } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-4">dataset: about_me.csv</span>
          <h2 className="section-title">About Me</h2>
          <p className="text-ink/70 dark:text-cream/70 leading-relaxed text-base sm:text-lg">
            I am a Data Science student passionate about Software Development,
            Artificial Intelligence, Data Science, Machine Learning, Deep Learning
            and problem solving. I enjoy building projects, practicing Data
            Structures and Algorithms, and exploring modern technologies. My goal
            is to create impactful solutions while continuously improving my
            technical skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card p-6 sm:p-8"
        >
          <h3 className="font-display font-semibold text-lg mb-5">Highlights</h3>
          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-ink/80 dark:text-cream/80">
                <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
