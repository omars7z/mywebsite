'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      category: 'AI/ML',
      skills: ['LLMs', 'RAG', 'Agentic Workflows', 'Computer Vision', 'Deep Learning', 'NLP'],
      color: 'from-cyan-400 to-blue-500',
    },
    {
      category: 'Backend',
      skills: ['Python', 'FastAPI', 'Flask', 'Microservices', 'JWT', 'REST APIs'],
      color: 'from-blue-400 to-cyan-500',
    },
    {
      category: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'CI/CD', 'Infrastructure'],
      color: 'from-cyan-400 to-blue-600',
    },
    {
      category: 'Cybersecurity',
      skills: ['Forensic Analysis', 'Autopsy', 'Ghidra', 'Penetration Testing', 'Security Auditing'],
      color: 'from-blue-500 to-cyan-400',
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-strong rounded-xl p-8"
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 glass rounded-lg text-sm font-medium hover:text-cyan-400 transition-colors cursor-default"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

