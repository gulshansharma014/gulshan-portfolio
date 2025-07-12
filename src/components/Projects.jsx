import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Meeting Assistant',
    description:
      'AI-powered platform that transcribes and summarizes meetings in real-time using OpenAI and Microsoft APIs.',
    tech: ['React', 'TailwindCSS', 'OpenAI API', 'Vite'],
    github: 'https://github.com/gulshansharma014/ai-meeting-assistant',
    live: '#', // placeholder or real link later
  },
  {
    title: 'Upload It!',
    description:
      'Secure video sharing app with authentication, real-time uploads, likes & comments built using Firebase.',
    tech: ['React', 'Node.js', 'Firebase'],
    github: 'https://github.com/gulshansharma014/upload-it',
    live: '#',
  },
];

export default function Projects() {
  return (
<motion.section
  id="projects"
  className="py-20 px-6 md:px-20 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">💼 Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
              <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.02, rotate: 0.2 }}
    whileTap={{ scale: 0.98 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: index * 0.2 }}
  className="border border-gray-200 dark:border-gray-700 
             rounded-lg p-6 bg-white dark:bg-gray-900 
             text-gray-800 dark:text-gray-100 shadow-md hover:shadow-lg transition"
>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={project.github} target="_blank" className="text-sm text-white bg-gray-800 px-4 py-2 rounded hover:bg-black transition">
                GitHub ↗
              </a>
              <a href={project.live} target="_blank" className="text-sm text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
