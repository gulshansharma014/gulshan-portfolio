export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Gulshan Kumar. All rights reserved.</p>
        <p>Built with React, Vite, Tailwind CSS, and attention to detail.</p>
      </div>
    </footer>
  )
}
