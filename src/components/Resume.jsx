import React from 'react';

export default function Resume() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">📄 Resume</h2>

      <p className="text-gray-700 mb-6">
        Here’s a copy of my updated resume showcasing my skills, experience, and projects. Feel free to download and connect!
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          📥 Download Resume
        </a>

        <iframe
          src="/resume.pdf"
          className="w-full md:w-[400px] h-[500px] border rounded shadow"
          title="Resume Preview"
        ></iframe>
      </div>
    </section>
  );
}
