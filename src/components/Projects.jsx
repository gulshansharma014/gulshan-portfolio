import { motion } from 'framer-motion'
import {
  FaArrowRight,
  FaCheck,
  FaGithub,
  FaRegFilePdf,
} from 'react-icons/fa'
import {
  HiOutlineChip,
  HiOutlineCode,
  HiOutlineLightningBolt,
} from 'react-icons/hi'

const technologies = [
  'React.js',
  'Node.js',
  'Express.js',
  'Gemini AI',
  'PDFKit',
  'Jest',
  'GitHub Actions',
]

const engineeringHighlights = [
  {
    title: 'Modular Architecture',
    description:
      'Separated reusable React components, API communication, backend routes, service logic, and utility functions.',
    icon: HiOutlineCode,
  },
  {
    title: 'AI Integration',
    description:
      'Integrated Gemini AI to transform long video transcripts into concise and useful summaries.',
    icon: HiOutlineChip,
  },
  {
    title: 'Production Workflow',
    description:
      'Added automated testing, PDF generation, responsive behaviour, and CI checks through GitHub Actions.',
    icon: HiOutlineLightningBolt,
  },
]

const features = [
  'YouTube transcript extraction',
  'AI-generated video summaries',
  'Transcript pagination',
  'Copy-to-clipboard utilities',
  'Complete PDF export',
  'Responsive desktop and mobile UI',
  'Centralised backend error handling',
  'Automated frontend testing',
]

const architectureSteps = [
  {
    number: '01',
    label: 'YouTube URL',
    description: 'The user submits a public YouTube video link.',
  },
  {
    number: '02',
    label: 'Transcript Service',
    description: 'The backend extracts and normalises the video transcript.',
  },
  {
    number: '03',
    label: 'Gemini AI',
    description: 'The transcript is transformed into a structured summary.',
  },
  {
    number: '04',
    label: 'React Interface',
    description: 'The transcript and AI response are displayed interactively.',
  },
  {
    number: '05',
    label: 'PDF Export',
    description: 'Users can export the generated content as a complete PDF.',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-kicker">Featured engineering work</p>

          <h2 className="section-title">
            A full-stack product built around a real problem.
          </h2>

          <p className="section-copy">
            Instead of presenting a list of small applications, this section
            explores the architecture, engineering decisions, and product
            experience behind my flagship project.
          </p>
        </motion.div>

        {/* Featured project */}
        <motion.article
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-2xl shadow-slate-300/40 dark:border-slate-800 dark:shadow-black/20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
        >
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.24),_transparent_35%)]" />

          <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative grid gap-12 px-6 py-10 sm:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:py-14">
            {/* Project content */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  Featured project
                </span>

                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                  Live application
                </span>
              </div>

              <h3 className="mt-7 text-4xl font-extrabold tracking-tight sm:text-5xl">
                AI Video Summarizer
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                A full-stack application that extracts transcripts from
                YouTube videos and transforms them into concise AI-generated
                summaries, helping users understand long-form content without
                watching the complete video.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-sm font-medium text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://ai-video-summarizer-frontend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  View live project
                  <FaArrowRight size={14} />
                </a>

                <a
                  href="https://github.com/gulshansharma014/ai-video-summarizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-300"
                >
                  <FaGithub size={18} />
                  View source
                </a>
              </div>
            </div>

            {/* Product preview */}
            <div className="flex items-center">
              <div className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 p-3 shadow-2xl">
                <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
                  <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                    <div className="ml-3 h-6 flex-1 rounded-md bg-slate-800" />
                  </div>

                  <div className="space-y-5 p-5 sm:p-7">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                        AI Video Summarizer
                      </p>

                      <div className="mt-3 h-8 w-4/5 rounded-lg bg-slate-700" />
                      <div className="mt-2 h-4 w-3/5 rounded bg-slate-800" />
                    </div>

                    <div className="flex gap-3">
                      <div className="h-11 flex-1 rounded-xl border border-slate-700 bg-slate-900" />
                      <div className="h-11 w-24 rounded-xl bg-blue-600" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                        <div className="h-4 w-24 rounded bg-slate-700" />

                        <div className="mt-4 space-y-2">
                          <div className="h-3 rounded bg-slate-800" />
                          <div className="h-3 rounded bg-slate-800" />
                          <div className="h-3 w-5/6 rounded bg-slate-800" />
                          <div className="h-3 rounded bg-slate-800" />
                          <div className="h-3 w-2/3 rounded bg-slate-800" />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-4">
                        <div className="flex items-center gap-2">
                          <span className="h-7 w-7 rounded-lg bg-blue-500/20" />
                          <div className="h-4 w-24 rounded bg-blue-400/40" />
                        </div>

                        <div className="mt-4 space-y-2">
                          <div className="h-3 rounded bg-slate-700" />
                          <div className="h-3 w-5/6 rounded bg-slate-700" />
                          <div className="h-3 rounded bg-slate-700" />
                          <div className="h-3 w-3/4 rounded bg-slate-700" />
                        </div>

                        <div className="mt-5 flex gap-2">
                          <span className="h-8 w-20 rounded-lg bg-blue-600" />
                          <span className="h-8 w-20 rounded-lg bg-slate-800" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="px-3 pb-1 pt-4 text-center text-xs font-medium text-slate-500">
                  Replace this interface mock-up with an actual application
                  screenshot later.
                </p>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Why it exists */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-kicker">Why I built it</p>

            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              Long videos contain useful information, but finding it takes
              time.
            </h3>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9 dark:border-slate-800 dark:bg-slate-900/50"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              Technical tutorials, podcasts, interviews, and lectures often
              run for one or two hours. Users may need only the core ideas,
              important arguments, or a reusable written transcript.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              I built this application to combine transcript extraction,
              generative AI, and document export into one focused workflow
              while practising full-stack architecture and production-ready
              engineering.
            </p>
          </motion.div>
        </div>

        {/* Engineering decisions */}
        <div className="mt-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-kicker">Engineering decisions</p>

            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              Designed to remain maintainable as the product grows.
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {engineeringHighlights.map(
              ({ title, description, icon: Icon }, index) => (
                <motion.article
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    <Icon size={24} />
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-slate-950 dark:text-white">
                    {title}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    {description}
                  </p>
                </motion.article>
              )
            )}
          </div>
        </div>

        {/* Architecture */}
        <div className="mt-20 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-10 dark:border-slate-800 dark:bg-slate-900/40">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-kicker">Application flow</p>

            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              From a YouTube link to an exportable AI summary.
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {architectureSteps.map((step, index) => (
              <motion.div
                key={step.label}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
              >
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                  <span className="text-xs font-extrabold tracking-[0.2em] text-blue-600 dark:text-blue-400">
                    {step.number}
                  </span>

                  <h4 className="mt-4 font-bold text-slate-950 dark:text-white">
                    {step.label}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>

                {index < architectureSteps.length - 1 && (
                  <FaArrowRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-blue-500 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature and challenge grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <motion.div
            className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 dark:border-slate-800 dark:bg-slate-900"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-kicker">Product capabilities</p>

            <h3 className="mt-3 text-2xl font-extrabold text-slate-950 dark:text-white">
              Built beyond the basic AI API call.
            </h3>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    <FaCheck size={11} />
                  </span>

                  <p className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-300">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Key challenge solved
            </p>

            <h3 className="mt-4 text-2xl font-extrabold">
              Keeping the AI provider separate from the user interface.
            </h3>

            <p className="mt-5 leading-7 text-slate-300">
              AI integrations can easily become tightly coupled to UI
              components. The application instead uses API and service layers,
              allowing the frontend to remain focused on presentation and user
              interaction.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              This architecture makes it easier to update prompts, change
              backend behaviour, improve error handling, or replace the AI
              provider without rewriting the complete interface.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 p-4">
              <FaRegFilePdf className="shrink-0 text-blue-400" size={24} />

              <p className="text-sm leading-6 text-slate-300">
                PDF generation is handled as a dedicated capability rather
                than mixing document-export logic into UI components.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Final call to action */}
        <motion.div
          className="mt-20 flex flex-col gap-6 rounded-3xl border border-blue-200 bg-blue-50 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10 dark:border-blue-900 dark:bg-blue-950/30"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
              Explore the implementation
            </p>

            <h3 className="mt-3 text-2xl font-extrabold text-slate-950 dark:text-white">
              See the working product or review the source code.
            </h3>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href="https://ai-video-summarizer-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Live application
              <FaArrowRight size={14} />
            </a>

            <a
              href="https://github.com/gulshansharma014/ai-video-summarizer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:border-blue-500 dark:border-blue-800 dark:bg-slate-950 dark:text-blue-300"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}