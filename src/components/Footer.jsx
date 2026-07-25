import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socialLinks = [
  {
    label: 'Email Gulshan',
    href: 'mailto:gulshansharma014@gmail.com',
    icon: FaEnvelope,
  },
  {
    label: 'Gulshan on LinkedIn',
    href: 'https://www.linkedin.com/in/gulshankumar014/',
    icon: FaLinkedinIn,
  },
  {
    label: 'Gulshan on GitHub',
    href: 'https://github.com/gulshansharma014',
    icon: FaGithub,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-slate-800 pb-9 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <a href="#home" className="text-xl font-extrabold tracking-tight">
              Gulshan<span className="text-blue-500">.dev</span>
            </a>

            <p className="mt-4 text-lg font-semibold text-slate-200">
              Designed and engineered with clarity, maintainability, and
              attention to detail.
            </p>

            <p className="mt-2 leading-7 text-slate-400">
              Built with React, Vite, and Tailwind CSS. Always learning. Always
              building.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-400"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}

            <a
              href="#home"
              aria-label="Back to top"
              className="ml-1 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Top
              <FaArrowUp size={13} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gulshan Kumar.</p>
          <p>Backend engineering • Thoughtful products • Continuous growth</p>
        </div>
      </div>
    </footer>
  )
}
