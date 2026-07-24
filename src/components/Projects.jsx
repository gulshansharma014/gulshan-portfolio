import { motion } from 'framer-motion'
import { FaArrowRight, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'AI Meeting Assistant',
    status: 'In development',
    description: 'An AI-powered meeting workspace designed to transcribe conversations, create concise summaries, and surface useful follow-up information.',
    engineering: [
      'AI-assisted transcription and summarisation workflow',
      'Focused React interface built with Vite and Tailwind CSS',
      'Integration-oriented design for external AI and meeting APIs',
    ],
    tech: ['React', 'Tailwind CSS', 'OpenAI API', 'Vite'],
    github: 'https://github.com/gulshansharma014/ai-meeting-assistant',
  },
  {
    title: 'Upload It!',
    status: 'Project',
    description: 'A secure video-sharing application with authentication, uploads, likes, comments, and a responsive user experience.',
    engineering: [
      'Authentication-backed user flows',
      'Real-time content upload and interaction features',
      'Firebase-powered application services',
    ],
    tech: ['React', 'Node.js', 'Firebase'],
    github: 'https://github.com/gulshansharma014/upload-it',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="section-kicker">Selected work</p>
          <h2 className="section-title">Projects presented as engineering work, not screenshots.</h2>
          <p className="section-copy">
            A focused selection of applications where the implementation, integration choices, and product problem matter as much as the interface.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-blue-700 dark:hover:shadow-black/20"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                  {project.status}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400"
                >
                  <FaGithub size={21} />
                </a>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>

              <div className="mt-6">
                <p className="text-sm font-bold text-slate-900 dark:text-white">Engineering highlights</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {project.engineering.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span key={technology} className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition group-hover:gap-3 dark:text-blue-400"
              >
                Explore source code <FaArrowRight size={12} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
