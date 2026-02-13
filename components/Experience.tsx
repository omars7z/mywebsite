'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Software Engineering Intern',
      company: 'Tarjama',
      location: 'Remote',
      period: '2024',
      description: 'Developed enterprise timesheet management platform with real-time features. Worked on full-stack development, API design, and database optimization.',
      icon: Briefcase,
    },
    {
      type: 'education',
      title: 'Exchange Student Programs',
      company: 'US & EU Universities',
      location: 'International',
      period: '2023-2024',
      description: 'Participated in international exchange programs, gaining global perspective and cross-cultural collaboration experience in software engineering.',
      icon: GraduationCap,
    },
    {
      type: 'education',
      title: 'Computer Science Student',
      company: 'Jordan University of Science and Technology (JUST)',
      location: 'Jordan',
      period: '2022 - 2026',
      description: 'Pursuing Bachelor\'s degree in Computer Science with focus on AI, machine learning, and software engineering. Expected graduation: 2026.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-4 z-10" style={{ borderColor: 'var(--background)' }}></div>

                  <div className="glass-strong rounded-xl p-6 hover:scale-[1.02] transition-transform">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.type === 'work' ? 'from-cyan-400 to-blue-500' : 'from-blue-400 to-cyan-500'}`}>
                        <Icon size={24} className="text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-cyan-400 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

