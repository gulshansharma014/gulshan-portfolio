import { motion } from 'framer-motion'
import { FaArrowRight, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const technologies = ['Java 17', 'Spring Boot', 'Kafka', 'React', 'PostgreSQL']

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_38%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_35%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Software Engineer at Infosys
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
            Backend-first full-stack engineer
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-7xl dark:text-white">
            Building scalable systems and practical digital products.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I’m Gulshan Kumar, a software engineer working with Java, Spring Boot, distributed systems, and React to build maintainable backend services and useful web applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              View projects <FaArrowRight size={14} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200"
            >
              View resume
            </a>
            <a
              href="https://github.com/gulshansharma014"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-xl border border-slate-300 p-3 text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/gulshankumar014/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-xl border border-slate-300 p-3 text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-2xl shadow-slate-200/60 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Current direction</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">Engineering for scale and clarity</h2>
          <div className="mt-7 space-y-5">
            {[
              ['Production engineering', 'Reliable Spring Boot services, clean APIs, testing, and observability.'],
              ['Distributed systems', 'Kafka-based workflows, resilient integrations, and asynchronous processing.'],
              ['Full-stack delivery', 'Backend-first products with focused, accessible React interfaces.'],
            ].map(([title, description], index) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
