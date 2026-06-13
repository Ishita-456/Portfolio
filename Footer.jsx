import { Github, Linkedin, Code2, Mail, Heart } from 'lucide-react'
import { socials } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-secondary/40 dark:border-primary/15 py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold">© 2026 Ishita Ghayade</p>
          <p className="text-sm text-ink/50 dark:text-cream/50 flex items-center gap-1 justify-center sm:justify-start mt-1">
            Built with <Heart size={14} className="text-primary fill-primary" /> using React and Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FooterIcon href={socials.github} label="GitHub" icon={<Github size={18} />} />
          <FooterIcon href={socials.linkedin} label="LinkedIn" icon={<Linkedin size={18} />} />
          <FooterIcon href={socials.leetcode} label="LeetCode" icon={<Code2 size={18} />} />
          <FooterIcon href={`mailto:${socials.email}`} label="Email" icon={<Mail size={18} />} />
        </div>
      </div>
    </footer>
  )
}

function FooterIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/30 dark:bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
    >
      {icon}
    </a>
  )
}
