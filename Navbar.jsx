import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Navbar({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-xl tracking-tight">
          Ishita<span className="text-primary">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 dark:text-cream/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-secondary/50 dark:border-primary/30 hover:bg-secondary/20 dark:hover:bg-primary/10 transition-colors"
          >
            {isDark ? <Sun size={18} className="text-secondary" /> : <Moon size={18} className="text-primary" />}
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center border border-secondary/50 dark:border-primary/30"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-dark-bg border-t border-secondary/30 dark:border-primary/15"
          >
            <div className="flex flex-col px-5 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-ink/80 dark:text-cream/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
