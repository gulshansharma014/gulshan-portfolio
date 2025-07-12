import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

export default function Contact() {
  return (
<motion.section
  id="contact"
  className="py-20 px-6 md:px-20 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">📬 Contact</h2>

      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Want to collaborate, refer, or just say hi? I’d love to connect.
      </p>

      <div className="flex flex-col gap-4 text-lg">
        <a
          href="mailto:gulshansharma014@gmail.com"
          className="flex items-center gap-3 text-blue-600 hover:underline"
        >
          <FaEnvelope /> gulshansharma014@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/gulshankumar014/"
          target="_blank"
          className="flex items-center gap-3 text-blue-600 hover:underline"
        >
          <FaLinkedin /> linkedin.com/in/gulshankumar014
        </a>

        <a
          href="https://github.com/gulshansharma014"
          target="_blank"
          className="flex items-center gap-3 text-blue-600 hover:underline"
        >
          <FaGithub /> github.com/gulshansharma014
        </a>

        <a
          href="https://leetcode.com/Gulshansharma/"
          target="_blank"
          className="flex items-center gap-3 text-blue-600 hover:underline"
        >
          <FaCode /> leetcode.com/Gulshansharma
        </a>
      </div>
    </motion.section>
  );
}
