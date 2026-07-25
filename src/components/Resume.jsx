import { motion } from 'framer-motion'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'

export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-20 border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
      <motion.div
        className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 lg:grid-cols-[1fr_auto] lg:px-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="max-w-3xl">
          <p className="section-kicker">Resume</p>
          <h2 className="section-title">Experience, skills, and projects in one recruiter-ready document.</h2>
          <p className="section-copy">
            Review the latest resume for a concise overview of my software engineering experience and technical background.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Open resume <FaExternalLinkAlt size={13} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="btn-primary"
          >
            Download PDF <FaDownload size={14} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
