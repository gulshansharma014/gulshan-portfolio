import { motion } from 'framer-motion'
import {
  HiOutlineBeaker,
  HiOutlineExclamationCircle,
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
} from 'react-icons/hi'

const technologies = [
  'Java 17',
  'Spring Boot',
  'Kafka',
  'Spring WebFlux',
  'GraphQL',
  'PostgreSQL',
  'Couchbase',
  'OpenSearch',
  'React',
]

const systems = [
  {
    title: 'Event-driven workflows',
    description:
      'Built and maintained Kafka-backed processing flows for asynchronous enterprise operations.',
    icon: HiOutlineLightningBolt,
  },
  {
    title: 'Change-detection framework',
    description:
      'Designed comparator-based business logic using reusable strategies, SOLID principles, and feature flags.',
    icon: HiOutlineCode,
  },
  {
    title: 'Reactive services',
    description:
      'Worked with Spring WebFlux, reactive repositories, and fallback flows for resilient data access.',
    icon: HiOutlineBeaker,
  },
  {
    title: 'Data-intensive services',
    description:
      'Implemented persistence and query flows across PostgreSQL, Couchbase, Hibernate, and JPA.',
    icon: HiOutlineDatabase,
  },
  {
    title: 'Production diagnostics',
    description:
      'Investigated failures through logs, dashboards, traces, and data analysis to isolate root causes.',
    icon: HiOutlineExclamationCircle,
  },
  {
    title: 'Maintainable releases',
    description:
      'Used automated testing, CI/CD, feature toggles, and clean abstractions to reduce release risk.',
    icon: HiOutlineShieldCheck,
  },
]

const principles = [
  'Maintainability over cleverness',
  'Clear boundaries and reusable abstractions',
  'Observability before assumptions',
  'Incremental, low-risk delivery',
]

const timeline = [
  {
    year: '2022',
    title: 'Joined Infosys',
    description:
      'Started working on enterprise travel platforms and production-grade software delivery.',
  },
  {
    year: '2023',
    title: 'Backend foundations',
    description:
      'Deepened experience with Java, Spring Boot, REST APIs, persistence, testing, and production support.',
  },
  {
    year: '2024',
    title: 'Distributed workflows',
    description:
      'Expanded into Kafka, GraphQL, reactive programming, OpenSearch, and cross-service debugging.',
  },
  {
    year: 'Now',
    title: 'Engineering with ownership',
    description:
      'Focused on scalable backend design, maintainable architecture, and end-to-end delivery.',
  },
]

export default function About() {
  return (
    <section
      id="journey"
      className="scroll-mt-20 overflow-hidden border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-kicker">Engineering journey</p>
          <h2 className="section-title">
            Building reliable systems, then learning from how they behave in production.
          </h2>
          <p className="section-copy">
            My work at Infosys has grown from implementing features to understanding system behaviour,
            designing reusable backend flows, and owning problems across code, data, and production environments.
          </p>
        </motion.div>

        <motion.article
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.78fr_1.22fr] lg:p-12">
            <div>
              <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
                Oct 2022 — Present
              </div>

              <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                Software Engineer
              </h3>
              <p className="mt-2 text-lg font-semibold text-blue-600 dark:text-blue-400">
                Infosys Ltd.
              </p>

              <p className="mt-6 leading-7 text-slate-600 dark:text-slate-300">
                Contributing to enterprise travel platforms across backend services, event-driven workflows,
                data transformations, observability, testing, and supporting React interfaces.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {systems.map(({ title, description, icon: Icon }, index) => (
                <motion.div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-blue-800 dark:hover:bg-slate-900"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    <Icon size={21} />
                  </div>
                  <h4 className="mt-4 font-bold text-slate-950 dark:text-white">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.article>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9 dark:border-slate-800 dark:bg-slate-950"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-kicker">Growth timeline</p>
            <h3 className="mt-3 text-2xl font-extrabold text-slate-950 dark:text-white">
              From implementation to system ownership.
            </h3>

            <div className="relative mt-8 space-y-8 before:absolute before:bottom-3 before:left-[1.1rem] before:top-3 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
              {timeline.map((item) => (
                <div key={item.year} className="relative grid grid-cols-[2.25rem_1fr] gap-4">
                  <span className="relative z-10 mt-1 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-[10px] font-bold text-white shadow dark:border-slate-950">
                    {item.year === 'Now' ? '●' : item.year.slice(2)}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="font-bold text-slate-950 dark:text-white">{item.title}</h4>
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
                        {item.year}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-[2rem] bg-slate-950 p-7 text-white sm:p-9"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              How I approach engineering
            </p>
            <h3 className="mt-4 text-2xl font-extrabold">
              Strong systems come from clear thinking, not just more code.
            </h3>

            <div className="mt-8 space-y-4">
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-xs font-bold text-blue-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-0.5 text-sm font-medium leading-6 text-slate-300">
                    {principle}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 leading-7 text-slate-400">
              I enjoy backend problems where business rules, distributed workflows, data consistency,
              and production behaviour all need to be understood together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
