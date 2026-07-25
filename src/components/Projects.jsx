import { useState } from 'react'
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
    detail: 'Input validation keeps malformed links away from the backend workflow.',
  },
  {
    number: '02',
    label: 'Transcript Service',
    description: 'The backend extracts and normalises the video transcript.',
    detail: 'Transcript retrieval is kept separate from presentation and AI concerns.',
  },
  {
    number: '03',
    label: 'Gemini AI',
    description: 'The transcript is transformed into a structured summary.',
    detail: 'AI behaviour is isolated behind a service layer so providers can evolve later.',
  },
  {
    number: '04',
    label: 'React Interface',
    description: 'The transcript and AI response are displayed interactively.',
    detail: 'Reusable components handle loading, errors, pagination, and user actions.',
  },
  {
    number: '05',
    label: 'PDF Export',
    description: 'Users can export the generated content as a complete PDF.',
    detail: 'Document generation remains a dedicated capability rather than UI logic.',
  },
]

const screenshots = [
  {
    src: '/projects/ai-video-summarizer-desktop.png',
    alt: 'AI Video Summarizer desktop interface',
    label: 'Desktop workflow',
    description: 'Video input, transcript, and AI summary in one focused workspace.',
  },
  {
    src: '/projects/ai-video-summarizer-summary.png',
    alt: 'AI-generated summary screen',
    label: 'AI summary',
    description: 'Structured output designed for fast reading and reuse.',
  },
  {
    src: '/projects/ai-video-summarizer-mobile.png',
    alt: 'AI Video Summarizer mobile interface',
    label: 'Mobile experience',
    description: 'Responsive layout for recruiters and users browsing on smaller screens.',
  },
]

function ScreenshotCard({ screenshot, index }) {
  const [failed, setFailed] = useState(false)

  return (
    <motion.article
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        {!failed ? (
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
              Screenshot slot ready
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
              Add <span className="font-semibold text-slate-200">{screenshot.src}</span> inside the public folder.
            </p>
          </div>
        )}
      </div>

      <div className="p-6">
        <h4 className="text-lg font-bold text-slate-950 dark:text-white">
          {screenshot.label}
        </h4>
        <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
          {screenshot.description}
        </p>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
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
            A closer look at the product experience, architecture, and engineering decisions behind my flagship project.
          </p>
        </motion.div>

        <motion.article
          className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-white shadow-2xl shadow-slate-300/40 sm:mt-14 sm:rounded-[2rem] dark:border-slate-800 dark:shadow-black/20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.24),_transparent_35%)]" />
          <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative grid min-w-0 gap-8 px-4 py-8 sm:gap-10 sm:px-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-14 lg:py-14">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-300 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
                  Featured project
                </span>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-semibold text-emerald-300 sm:px-4 sm:py-2 sm:text-xs">
                  Live application
                </span>
              </div>

              <h3 className="mt-6 break-words text-3xl font-extrabold leading-tight tracking-tight sm:mt-7 sm:text-5xl">
                AI Video Summarizer
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                A full-stack application that extracts YouTube transcripts and transforms them into concise AI-generated summaries, helping users understand long-form content faster.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                {technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-xs font-medium text-slate-300 sm:px-3 sm:py-1.5 sm:text-sm">
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
                <a
                  href="https://ai-video-summarizer-frontend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center sm:w-auto"
                >
                  View live project
                  <FaArrowRight size={14} />
                </a>

                <a
                  href="https://github.com/gulshansharma014/ai-video-summarizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark-secondary w-full justify-center sm:w-auto"
                >
                  <FaGithub size={18} />
                  View source
                </a>
              </div>
            </div>

            <div className="min-w-0">
              <div className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 p-3 shadow-2xl">
                <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
                  <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <div className="ml-2 min-w-0 flex-1 truncate rounded-md bg-slate-800 px-2 py-1 text-[10px] text-slate-500 sm:ml-3 sm:px-3 sm:text-xs">
                      ai-video-summarizer-frontend.vercel.app
                    </div>
                  </div>

                  <div className="aspect-[16/10] bg-slate-900">
                    <img
                      src="/projects/ai-video-summarizer-desktop.png"
                      alt="AI Video Summarizer application preview"
                      className="h-full w-full object-cover object-top"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none'
                      }}
                    />
                    <div className="flex h-full items-center justify-center px-8 text-center">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
                          Real product preview
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-400">
                          Add the desktop screenshot at
                          <span className="block font-semibold text-slate-200">
                            public/projects/ai-video-summarizer-desktop.png
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="mt-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-kicker">Product proof</p>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              Show the working product, not just the technology list.
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {screenshots.map((screenshot, index) => (
              <ScreenshotCard key={screenshot.src} screenshot={screenshot} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-kicker">Why I built it</p>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              Long videos contain useful information, but finding it takes time.
            </h3>
          </motion.div>

          <motion.div
            className="surface-card p-7 sm:p-9"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              Technical tutorials, podcasts, interviews, and lectures often run for one or two hours. Users may need only the core ideas, important arguments, or a reusable written transcript.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              I built this application to combine transcript extraction, generative AI, and document export into one focused workflow while practising maintainable full-stack architecture.
            </p>
          </motion.div>
        </div>

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
            {engineeringHighlights.map(({ title, description, icon: Icon }, index) => (
              <motion.article
                key={title}
                className="surface-card p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
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
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-10 dark:border-slate-800 dark:bg-slate-900/40">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-kicker">Interactive architecture</p>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              From a YouTube link to an exportable AI summary.
            </h3>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
              Hover or focus each stage to reveal the engineering responsibility behind it.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {architectureSteps.map((step, index) => (
              <motion.article
                key={step.label}
                tabIndex={0}
                className="group relative rounded-2xl border border-slate-200 bg-white p-5 outline-none transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-800 dark:bg-slate-950"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <span className="text-xs font-extrabold tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  {step.number}
                </span>
                <h4 className="mt-4 font-bold text-slate-950 dark:text-white">
                  {step.label}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
                <div className="mt-4 grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-200 pt-4 text-sm leading-6 text-blue-700 dark:border-slate-800 dark:text-blue-300">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {index < architectureSteps.length - 1 && (
                  <FaArrowRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-blue-500 lg:block" />
                )}
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <motion.div
            className="surface-card p-7 sm:p-9"
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
              The application uses API and service layers, allowing the frontend to remain focused on presentation and user interaction.
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              This makes it easier to update prompts, improve error handling, or replace the AI provider without rewriting the complete interface.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 p-4">
              <FaRegFilePdf className="shrink-0 text-blue-400" size={24} />
              <p className="text-sm leading-6 text-slate-300">
                PDF generation is handled as a dedicated capability rather than mixing export logic into UI components.
              </p>
            </div>
          </motion.div>
        </div>

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
              className="btn-primary"
            >
              Live application
              <FaArrowRight size={14} />
            </a>
            <a
              href="https://github.com/gulshansharma014/ai-video-summarizer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
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
