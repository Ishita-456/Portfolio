import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FolderGit2, Award, GitBranch, Trophy } from 'lucide-react'
import { achievements } from '../data/content'

const icons = [FolderGit2, Award, GitBranch, Trophy]

function Counter({ value, isInView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1200
    const startTime = performance.now()

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(value)
    }

    requestAnimationFrame(step)
  }, [isInView, value])

  return <span>{count}+</span>
}

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="eyebrow justify-center mb-4">dataset: achievements.csv</span>
          <h2 className="section-title">Achievements</h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-gradient flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-primary">
                  <Counter value={item.value} isInView={isInView} />
                </p>
                <p className="text-sm text-ink/60 dark:text-cream/60 mt-2">{item.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
