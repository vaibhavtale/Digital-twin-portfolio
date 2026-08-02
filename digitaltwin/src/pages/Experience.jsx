import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Greeksoft Technologies Pvt Ltd',
      role: 'C++ Software Developer',
      period: 'Jun 2024 – Present',
      location: 'Pune, Maharashtra, India',
      domain: 'Broadcast & Market Data | Middleware Engineering | High-Performance Systems',
      highlights: [
        {
          title: 'Broadcast / Market Data Feed System',
          bullets: [
            'Engineered high-throughput C++ broadcast server on Linux ingesting real-time tick data from Indian exchanges (NSE, BSE) via TCP/UDP sockets.',
            'Implemented topic-level subscription dispatching so clients receive only subscribed instrument data, cutting network I/O and latency.',
            'Utilized LZO decompression and NSE binary packet decoding for reliable packet stream processing under market volatile update rates.',
            'Integrated Boost.ASIO, lock-free queues, std::thread pools, and mutexes for zero-copy message passing across data pipelines.',
            'Optimized PostgreSQL & MySQL indexing strategies for sub-millisecond read access to OHLCV historical data and trade audit logs.',
            'Developed multithreaded market analytics scanners (Top Gainers/Losers) using sliding-window aggregation under heavy market throughput.'
          ],
          tech: ['C++17/20', 'Boost.ASIO', 'TCP/UDP', 'NSE/BSE Feeds', 'LZO', 'PostgreSQL', 'Redis', 'Linux']
        },
        {
          title: 'Middleware Platform — Order Management & Trading Infrastructure',
          bullets: [
            'Maintained C++ middleware handling Order Management System (OMS) workflows: order placement, modification, cancellation, and execution reporting.',
            'Integrated NATS messaging for decoupled, fault-tolerant inter-service communication between OMS, risk engine, and market broadcast modules.',
            'Implemented OpenSSL (libssl/libcrypto) TLS encryption for secure, authenticated client-server packet transfer.',
            'Leveraged Redis for sub-millisecond caching of live market snapshots, user session tokens, and order state state machine.',
            'Eliminated order loss during reconnect by building Gap Fill Management system checkpointing state in Redis and republishing via NATS.'
          ],
          tech: ['C++', 'NATS Messaging', 'OpenSSL', 'Redis', 'CMake', 'Linux/Windows GCC']
        },
        {
          title: 'Developer Productivity & Automation',
          bullets: [
            'Developed shell and batch automation scripts for build orchestration, log rotation, service health monitoring, and deployment packaging.',
            'Built Node.js automated PR tracking tool integrated with JIRA, AI code review checks, and documentation synchronization.'
          ],
          tech: ['Shell Scripting', 'Docker', 'Node.js', 'JIRA API', 'GitLab CI/CD']
        }
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science — Computer Science',
      institution: 'Gauri Shankar Trust Science College',
      location: 'Malkapur, Maharashtra',
      period: '2019 – 2023',
      grade: 'First Division',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Professional <span className="gradient-text">Experience</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
          2.2+ years of hands-on expertise building low-latency financial systems and backend infrastructure.
        </p>
      </div>

      {/* Timeline Experience */}
      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl space-y-8 relative overflow-hidden"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500 font-bold">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {exp.role}
                    </h2>
                    <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400">
                      {exp.company}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                  <Calendar className="w-4 h-4 text-cyan-500" /> {exp.period}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-500" /> {exp.location}
                </span>
              </div>
            </div>

            {/* Sub-sections / projects inside company */}
            <div className="space-y-8">
              {exp.highlights.map((sec, sIdx) => (
                <div key={sec.title} className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    {sec.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {sec.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {sec.tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-cyan-500" /> Academic Qualification
        </h2>
        <div className="grid md:grid-cols-1 gap-6">
          {education.map((edu) => (
            <div key={edu.degree} className="glass-card p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{edu.degree}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.institution} | {edu.location}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500">
                  {edu.grade}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
