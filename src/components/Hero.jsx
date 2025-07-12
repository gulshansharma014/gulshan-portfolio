import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-[90vh] flex flex-col justify-center items-start px-6 md:px-20 
                bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900
                text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      <motion.h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Hi, I’m <span className="text-blue-600">Gulshan 👋</span>
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Full Stack Developer | Java | Spring Boot | React.js
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 max-w-xl mb-8 dark:text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        I build scalable backend systems and interactive frontends. Currently at Infosys, and actively looking for exciting full stack opportunities!
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded shadow-md hover:shadow-lg transition">
          📄 View Resume
        </a>
        <a href="https://github.com/gulshansharma014" target="_blank" className="px-6 py-3 bg-blue-600 text-white rounded shadow-md hover:shadow-lg transition">
          💻 GitHub
        </a>
        <a href="https://www.linkedin.com/in/gulshankumar014/" target="_blank" className="px-6 py-3 bg-blue-600 text-white rounded shadow-md hover:shadow-lg transition">
          🔗 LinkedIn
        </a>
      </motion.div>
    </motion.section>
  );
}
