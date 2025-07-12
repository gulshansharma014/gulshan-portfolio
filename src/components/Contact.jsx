import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">📬 Contact</h2>

      <p className="text-gray-700 mb-8">
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
          className="flex items-center gap-3 text-gray-800 hover:underline"
        >
          <FaGithub /> github.com/gulshansharma014
        </a>

        <a
          href="https://leetcode.com/Gulshansharma/"
          target="_blank"
          className="flex items-center gap-3 text-gray-800 hover:underline"
        >
          <FaCode /> leetcode.com/Gulshansharma
        </a>
      </div>
    </section>
  );
}
