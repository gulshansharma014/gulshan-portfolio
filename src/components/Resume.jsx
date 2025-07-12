import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
<motion.section
  id="resume"
  className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">📄 Resume</h2>

  <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
    Here’s a copy of my updated resume showcasing my skills, experience, and projects. Feel free to download and connect!
  </p>

  <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-6 items-center justify-between">
    <a
      href="/resume.pdf"
      download
      className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition whitespace-nowrap"
    >
      📥 Download Resume
    </a>

    <iframe
      src="/resume.pdf"
      className="w-full md:w-[400px] h-[500px] border rounded shadow bg-white dark:bg-gray-900"
      title="Resume Preview"
    ></iframe>
  </div>
</motion.section>

  );
}
