import { motion } from 'framer-motion'
import { Code, Layout, Server, Database, Wrench } from 'lucide-react'
import { skillGroups } from '../data/content'

const icons = {
  Languages: Code,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  Tools: Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 dot-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="eyebrow justify-center mb-4">dataset: skills.csv</span>
          <h2 className="section-title">Skills</h2>
          <p className="text-ink/60 dark:text-cream/60 max-w-2xl mx-auto">
            Technologies and tools I work with across data, web and software development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.title] || Code
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-gradient flex items-center justify-center mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-mono px-3 py-1 rounded-full bg-secondary/30 dark:bg-primary/10 text-ink/80 dark:text-cream/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
