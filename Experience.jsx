import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { timeline } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 dot-grid">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="eyebrow justify-center mb-4">dataset: experience.csv</span>
          <h2 className="section-title">Experience &amp; Learning</h2>
        </div>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-2.5 sm:left-3.5 top-0 bottom-0 w-0.5 bg-secondary/60 dark:bg-primary/20" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-8 sm:-left-10 top-1 w-6 h-6 rounded-full bg-pink-gradient flex items-center justify-center shadow-md shadow-primary/30">
                  <GraduationCap size={13} className="text-white" />
                </span>
                <div className="card p-5 sm:p-6">
                  <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-ink/65 dark:text-cream/65 text-sm sm:text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
