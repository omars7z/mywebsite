'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    featured: boolean;
    github: string;
    demo: string;
    image?: string;
    images?: string[];
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-strong rounded-xl p-6 hover:scale-105 transition-all group relative overflow-hidden"
    >
      {project.featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1 text-cyan-400">
          <Sparkles size={16} />
          <span className="text-xs font-semibold">Featured</span>
        </div>
      )}

      <h3 className="text-2xl font-bold mb-3 text-cyan-400 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>

      <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 text-xs rounded-full glass text-cyan-300 border border-cyan-400/30"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-4">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          style={{ color: 'var(--text-secondary)' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={20} />
          <span className="text-sm">Code</span>
        </motion.a>
        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          style={{ color: 'var(--text-secondary)' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink size={20} />
          <span className="text-sm">Demo</span>
        </motion.a>
      </div>

      {(project.image || project.images) && (
        <div className="mt-4 space-y-4">
          {project.image && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden border border-cyan-400/20"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}
          {project.images && project.images.map((img, imgIndex) => (
            <motion.div
              key={imgIndex}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (imgIndex + 1) * 0.1 }}
              className="rounded-lg overflow-hidden border border-cyan-400/20"
            >
              <Image
                src={img}
                alt={`${project.title} - Image ${imgIndex + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}

