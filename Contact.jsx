import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Code2, Send, CheckCircle2 } from 'lucide-react'
import { socials } from '../data/content'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.'
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.'
    if (!form.message.trim()) newErrors.message = 'Message cannot be empty.'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 dot-grid">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="eyebrow justify-center mb-4">dataset: contact.csv</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-ink/60 dark:text-cream/60 max-w-2xl mx-auto">
            Have an opportunity, project idea, or just want to connect? Send a message below.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="card p-6 sm:p-8 lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="font-display font-semibold text-xl mb-1">Ishita Ghayade</h3>
              <p className="text-sm text-ink/60 dark:text-cream/60">
                Aspiring Data Science Engineer
              </p>
            </div>

            <ContactLink icon={<Mail size={18} />} label={socials.email} href={`mailto:${socials.email}`} />
            <ContactLink icon={<Linkedin size={18} />} label="LinkedIn Profile" href={socials.linkedin} />
            <ContactLink icon={<Github size={18} />} label="GitHub Profile" href={socials.github} />
            <ContactLink icon={<Code2 size={18} />} label="LeetCode Profile" href={socials.leetcode} />
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            noValidate
            className="card p-6 sm:p-8 lg:col-span-3 grid sm:grid-cols-2 gap-5"
          >
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Field
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              error={errors.subject}
              full
            />
            <div className="sm:col-span-2 flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-ink/70 dark:text-cream/70">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                className="rounded-xl border border-secondary/50 dark:border-primary/20 bg-transparent px-4 py-3 text-sm focus:border-primary outline-none transition-colors resize-none"
              />
              {errors.message && <span className="text-xs text-primary">{errors.message}</span>}
            </div>

            <div className="sm:col-span-2 flex items-center gap-4">
              <button type="submit" className="btn-primary">
                Send Message <Send size={16} />
              </button>
              {submitted && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-sm text-primary font-medium"
                >
                  <CheckCircle2 size={16} /> Message sent successfully!
                </motion.span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, error, type = 'text', full }) {
  return (
    <div className={`flex flex-col gap-1.5 ${full ? 'sm:col-span-2' : ''}`}>
      <label htmlFor={name} className="text-sm font-medium text-ink/70 dark:text-cream/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        className="rounded-xl border border-secondary/50 dark:border-primary/20 bg-transparent px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
      />
      {error && <span className="text-xs text-primary">{error}</span>}
    </div>
  )
}

function ContactLink({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-sm text-ink/70 dark:text-cream/70 hover:text-primary transition-colors"
    >
      <span className="w-10 h-10 rounded-full bg-secondary/30 dark:bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
        {icon}
      </span>
      <span className="break-all">{label}</span>
    </a>
  )
}
