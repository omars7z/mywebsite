'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'SmartLearner',
      description: 'Multi-agent adaptive learning platform designed as my graduation project. Features intelligent tutoring systems with personalized learning paths.',
      tags: ['AI/ML', 'Multi-Agent Systems', 'Adaptive Learning'],
      featured: true,
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'GenImage Deepfake Detection',
      description: 'Advanced deepfake detection system using SwinTransformers and EfficientNet architectures. Achieves state-of-the-art accuracy in identifying synthetic media.',
      tags: ['Deep Learning', 'Computer Vision', 'SwinTransformers', 'EfficientNet'],
      featured: true,
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Bitcoin Blockchain Analysis',
      description: 'Comprehensive analysis tool for Bitcoin blockchain data. Calculates volatility metrics, RSI indicators, and provides predictive insights using Python.',
      tags: ['Python', 'Blockchain', 'Data Analysis', 'Financial Modeling'],
      featured: false,
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Timesheet Platform',
      description: 'Enterprise timesheet management platform developed during my internship at Tarjama. Features real-time tracking, reporting, and team collaboration tools.',
      tags: ['Full-Stack', 'Enterprise', 'Real-Time', 'Collaboration'],
      featured: false,
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

