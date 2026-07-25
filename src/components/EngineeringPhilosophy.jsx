import { motion } from 'framer-motion'
import {
  FaBookOpen,
  FaCubes,
  FaExpandArrowsAlt,
  FaTools,
} from 'react-icons/fa'

const principles = [
  {
    title: 'Readability over cleverness',
    description:
      'Code should communicate intent clearly so another engineer can understand, review, and safely change it.',
    icon: FaBookOpen,
  },
  {
    title: 'Maintainability over shortcuts',
    description:
      'Good abstractions, focused responsibilities, and reliable tests create faster delivery over the long term.',
    icon: FaTools,
  },
  {
    title: 'Systems over isolated features',
    description:
      'I consider data flow, failure behaviour, observability, and how each component affects the wider product.',
    icon: FaCubes,
  },
  {
    title: 'Evolution over over-engineering',
    description:
      'Build for today with clear extension points, then scale the design when real requirements justify it.',
    icon: FaExpandArrowsAlt,
  },
]

export default function EngineeringPhilosophy() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-20 overflow-hidden bg-slate-50 dark:bg-slate-900/30"
    >
      <div className="section-shell">
        <motion.div
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <p className="section-kicker">Engineering philosophy</p>
            <h2 className="section-title">
              Build software people can understand, trust, and evolve.
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            I believe strong engineering is less about writing the most complex
            solution and more about making thoughtful trade-offs. My goal is to
            create software that remains clear under change, dependable in
            production, and useful to the people it serves.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {principles.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              className="surface-card-hover group p-6 sm:p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950 dark:text-blue-300">
                  <Icon size={21} aria-hidden="true" />
                </span>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
                    {description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.blockquote
          className="mt-8 rounded-[2rem] border border-blue-200 bg-blue-50 px-6 py-7 text-xl font-bold leading-8 text-slate-900 sm:px-9 dark:border-blue-900 dark:bg-blue-950/30 dark:text-white"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          “Make the right thing easy to understand, safe to change, and reliable
          to operate.”
        </motion.blockquote>
      </div>
    </section>
  )
}
