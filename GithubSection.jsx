import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const username = 'Ishita-456'

export default function GithubSection() {
  return (
    <section id="github" className="py-20 sm:py-28 dot-grid">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="eyebrow justify-center mb-4">dataset: github_activity.csv</span>
          <h2 className="section-title">GitHub Stats</h2>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-2"
          >
            <Github size={18} /> @{username}
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="card p-4 overflow-hidden"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=00000000&title_color=FF69B4&icon_color=FFC0CB&text_color=2D1B2E`}
              alt="Ishita's GitHub stats"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-4 overflow-hidden"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=00000000&title_color=FF69B4&text_color=2D1B2E`}
              alt="Ishita's top languages"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card p-4 overflow-hidden"
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=00000000&ring=FF69B4&fire=FF69B4&currStreakLabel=FF69B4`}
            alt="Ishita's GitHub contribution streak"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
