import { motion } from 'framer-motion'
import {
  FaBriefcase,
  FaCode,
  FaLayerGroup,
  FaJava,
} from 'react-icons/fa'

const metrics = [
  {
    value: '3+',
    label: 'Years of experience',
    detail: 'Building enterprise and full-stack software',
    icon: FaBriefcase,
  },
  {
    value: '450+',
    label: 'DSA problems solved',
    detail: 'Across LeetCode and other coding platforms',
    icon: FaCode,
  },
  {
    value: '1',
    label: 'Flagship product',
    detail: 'Designed, built, and deployed end to end',
    icon: FaLayerGroup,
  },
  {
    value: 'Java',
    label: 'Primary engineering focus',
    detail: 'Spring Boot, Kafka, APIs, and distributed systems',
    icon: FaJava,
  },
]

export default function EngineeringMetrics() {
  return (
    <section
      aria-label="Engineering metrics"
      className="border-y border-slate-200 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-900/35"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(({ value, label, detail, icon: Icon }, index) => (
            <motion.article
              key={label}
              className="group min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-800"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                    {value}
                  </p>
                  <h2 className="mt-2 text-sm font-bold text-slate-800 dark:text-slate-200">
                    {label}
                  </h2>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950 dark:text-blue-300">
                  <Icon size={20} aria-hidden="true" />
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
