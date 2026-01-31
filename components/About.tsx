'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Globe, Code } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const highlights = [
    {
      icon: GraduationCap,
      title: 'CS Student at JUST',
      description: 'Graduating 2026, pursuing excellence in computer science and AI',
    },
    {
      icon: Globe,
      title: 'Global Experience',
      description: 'Exchange student in the US and EU, embracing diverse perspectives',
    },
    {
      icon: Code,
      title: 'Open Source Contributor',
      description: 'Active contributor to Oppia, passionate about educational technology',
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong p-8 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full">
                  <Icon size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                  {highlight.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-strong p-8 md:p-12 rounded-xl max-w-4xl mx-auto"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            As a Computer Science student at Jordan University of Science and Technology (JUST), 
            I'm passionate about pushing the boundaries of artificial intelligence and software engineering. 
            My journey has taken me across continents as an exchange student, enriching my perspective 
            and technical skills.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm deeply committed to open-source development, contributing to projects like Oppia that 
            make quality education accessible to everyone. My focus lies in building intelligent systems 
            that solve real-world problems, from multi-agent learning platforms to deepfake detection 
            systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

