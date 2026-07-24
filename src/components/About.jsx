import { motion } from 'framer-motion'

const strengths = [
  'Backend services and REST APIs',
  'Event-driven and reactive workflows',
  'Production debugging and maintainability',
  'React-based internal and customer-facing tools',
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
      <motion.div
        className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title">Engineering with ownership, not just implementation.</h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            I’m a full-stack software engineer with more than three years of experience working on scalable microservices and web applications. At Infosys, I’ve contributed to backend APIs, real-time dashboards, and full-stack tools using Java, Spring Boot, React, GraphQL, and related technologies.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            I enjoy understanding why a system behaves the way it does, simplifying complex business logic, and turning production lessons into cleaner designs. Outside work, I focus on system design, DSA, and side projects that deepen my engineering judgment.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div key={strength} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                {strength}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
