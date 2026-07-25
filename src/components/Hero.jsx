import { motion } from 'framer-motion'
import {
  FaArrowDown,
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa'
import {
  HiOutlineCloud,
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineLightningBolt,
} from 'react-icons/hi'

const technologies = [
  'Java 17',
  'Spring Boot',
  'Kafka',
  'PostgreSQL',
  'React',
]

const systemNodes = [
  {
    label: 'API',
    detail: 'Spring Boot',
    icon: HiOutlineCode,
  },
  {
    label: 'Events',
    detail: 'Apache Kafka',
    icon: HiOutlineLightningBolt,
  },
  {
    label: 'Data',
    detail: 'PostgreSQL',
    icon: HiOutlineDatabase,
  },
  {
    label: 'Delivery',
    detail: 'Docker & CI/CD',
    icon: HiOutlineCloud,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-slate-200/70 pt-16 dark:border-slate-800"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-white dark:bg-slate-950" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,_rgba(37,99,235,0.16),_transparent_30%),radial-gradient(circle_at_88%_18%,_rgba(14,165,233,0.12),_transparent_27%)] dark:bg-[radial-gradient(circle_at_10%_10%,_rgba(59,130,246,0.2),_transparent_31%),radial-gradient(circle_at_88%_18%,_rgba(14,165,233,0.12),_transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,_rgba(148,163,184,0.08)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(148,163,184,0.08)_1px,_transparent_1px)] bg-[size:46px_46px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] dark:opacity-30" />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Software Engineer at Infosys
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-7 text-sm font-extrabold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400"
          >
            Java Backend Engineer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-4 max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white"
          >
            I build backend systems that stay{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              reliable at scale.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300"
          >
            I’m Gulshan Kumar, a backend-first software engineer focused on
            Java, Spring Boot, Kafka, distributed workflows, and production
            systems—with React as a supporting skill for complete product
            delivery.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-200 bg-white/85 px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-blue-800 dark:hover:text-blue-300"
              >
                {technology}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
            >
              View featured work
              <FaArrowRight size={14} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white/70 px-5 py-3 font-semibold text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:focus:ring-offset-slate-950"
            >
              View resume
            </a>

            <a
              href="https://github.com/gulshansharma014"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Gulshan Kumar's GitHub profile"
              className="rounded-xl border border-slate-300 bg-white/70 p-3 text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:focus:ring-offset-slate-950"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/gulshankumar014/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Gulshan Kumar's LinkedIn profile"
              className="rounded-xl border border-slate-300 bg-white/70 p-3 text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:focus:ring-offset-slate-950"
            >
              <FaLinkedinIn size={20} />
            </a>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="#about"
            className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            Explore my engineering journey
            <FaArrowDown size={12} />
          </motion.a>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-blue-500/10 blur-3xl" />

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-300/50 dark:border-slate-800 dark:shadow-black/30 sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-800 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                  Backend system view
                </p>
                <h2 className="mt-2 text-xl font-bold">From request to reliable delivery</h2>
              </div>

              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Incoming request
                  </p>
                  <p className="mt-1 font-mono text-sm text-cyan-300">
                    POST /api/v1/process
                  </p>
                </div>
                <span className="rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-300">
                  200 OK
                </span>
              </div>
            </div>

            <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
              <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 sm:block" />

              {systemNodes.map(({ label, detail, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.45 + index * 0.09 }}
                  className="relative rounded-2xl border border-slate-800 bg-slate-900 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                    <Icon size={21} />
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.17em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 font-semibold text-slate-100">{detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ['3+', 'Years'],
                ['450+', 'DSA solved'],
                ['1', 'Flagship product'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-4 text-center"
                >
                  <p className="text-xl font-extrabold text-white sm:text-2xl">{value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500 sm:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
