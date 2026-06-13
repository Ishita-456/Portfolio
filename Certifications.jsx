import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="eyebrow justify-center mb-4">dataset: certifications.csv</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-gradient flex items-center justify-center flex-shrink-0">
                <Award size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-base sm:text-lg">{cert}</h3>
                <p className="text-xs text-ink/50 dark:text-cream/50 font-mono mt-1">status: in progress</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
