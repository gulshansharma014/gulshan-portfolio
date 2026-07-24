import { motion } from 'framer-motion'
import { FaCode, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const contactLinks = [
  { label: 'Email', value: 'gulshansharma014@gmail.com', href: 'mailto:gulshansharma014@gmail.com', icon: FaEnvelope },
  { label: 'LinkedIn', value: 'gulshankumar014', href: 'https://www.linkedin.com/in/gulshankumar014/', icon: FaLinkedinIn },
  { label: 'GitHub', value: 'gulshansharma014', href: 'https://github.com/gulshansharma014', icon: FaGithub },
  { label: 'LeetCode', value: 'Gulshansharma', href: 'https://leetcode.com/u/Gulshansharma/', icon: FaCode },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white dark:bg-slate-950">
      <motion.div
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10 lg:px-14 dark:border dark:border-slate-800">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Let’s connect</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Open to meaningful software engineering opportunities.</h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                For product engineering roles, technical collaboration, or a conversation about Java, Spring Boot, React, and distributed systems, reach me through any channel below.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="rounded-2xl border border-slate-700 bg-slate-900 p-4 transition hover:-translate-y-0.5 hover:border-blue-500"
                >
                  <Icon className="text-blue-400" size={19} />
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
                  <p className="mt-1 break-all text-sm font-semibold text-white">{value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
