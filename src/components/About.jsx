import { motion } from 'framer-motion';

export default function About() {
  return (
<motion.section
      id="about"
      className="py-20 px-6 md:px-20 bg-gray-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >      <h2 className="text-3xl font-bold text-gray-900 mb-6">👨‍💻 About Me</h2>

      <p className="text-gray-700 mb-4 max-w-3xl leading-relaxed">
        I'm a Full Stack Developer with over 3 years of experience working with scalable microservices and web apps. At Infosys, I’ve built real-time dashboards, backend APIs, and full-stack tools using Java, Spring Boot, React.js, GraphQL, and more.
      </p>

      <p className="text-gray-700 mb-4 max-w-3xl leading-relaxed">
        I’m currently exploring AI integrations and enjoy building side projects that solve real-world problems. Outside of work, I’m passionate about learning system design, solving DSA problems, and pushing code that matters.
      </p>

      <p className="text-gray-700 max-w-3xl leading-relaxed">
        💼 I’m actively looking for full stack opportunities where I can make meaningful impact and grow with the team.
      </p>
    </motion.section>
  );
}
