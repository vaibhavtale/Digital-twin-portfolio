import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, Cpu, MessageSquare, Utensils, Bot, Layers } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'broadcast-system',
      title: 'Broadcast & Market Data Feed System',
      category: 'C++ Systems / Financial Engineering',
      icon: Terminal,
      description: 'Engineered a high-throughput C++ broadcast server on Linux that ingests real-time tick data from multiple Indian stock exchanges (NSE, BSE) via TCP/UDP sockets. Implemented topic-level subscription dispatching, LZO decompression for NSE compressed feeds, zero-copy message passing with Boost.ASIO, and multithreaded top gainers/losers analytics.',
      technologies: ['C++17', 'Boost.ASIO', 'TCP/UDP Sockets', 'LZO Decompression', 'Redis', 'PostgreSQL', 'Multithreading'],
      github: 'https://github.com/vaibhavtale',
      demo: 'https://leetcode.com/u/vaibhavtale',
      featured: true,
    },
    {
      id: 'oms-middleware',
      title: 'OMS Trading Middleware Platform',
      category: 'Financial Infrastructure / Microservices',
      icon: Cpu,
      description: 'Developed C++ Order Management System (OMS) middleware handling thousands of order placement, modification, cancellation, and execution events per second. Integrated NATS messaging for inter-service communication, OpenSSL TLS encryption for secure transport, and Redis for live order state caching and reconnect gap-filling.',
      technologies: ['Modern C++', 'NATS Messaging', 'OpenSSL (libssl)', 'Redis Cache', 'CMake', 'Linux / Windows'],
      github: 'https://github.com/vaibhavtale',
      demo: 'https://www.linkedin.com/in/vaibhavtale',
      featured: true,
    },
    {
      id: 'ai-pr-tracker',
      title: 'AI PR Tracking & Automated Code Review Tool',
      category: 'Developer Productivity / AI Service',
      icon: Bot,
      description: 'Forked and extended AI tooling to build a Node.js microservice that automates GitHub/GitLab PR tracking, executes intelligent code-review checks, updates JIRA issue statuses, and maintains up-to-date system documentation automatically.',
      technologies: ['Node.js', 'Express', 'AI Integration', 'JIRA API', 'Git REST API'],
      github: 'https://github.com/vaibhavtale',
      demo: 'https://github.com/vaibhavtale',
      featured: false,
    },
    {
      id: 'messenger-app',
      title: 'Real-Time Messenger & Video Calling App',
      category: 'Mobile Application',
      icon: MessageSquare,
      description: 'Full-featured real-time mobile messaging application with one-on-one audio/video calling powered by Zegocloud API, push notifications via FCM, and scalable Firebase backend deployed for production users.',
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'FCM', 'Zegocloud API'],
      github: 'https://github.com/vaibhavtale',
      demo: 'https://github.com/vaibhavtale',
      featured: false,
    },
    {
      id: 'food-buddy',
      title: 'Food Buddy Online — Delivery Platform',
      category: 'Mobile Application',
      icon: Utensils,
      description: 'Engineered a full food delivery platform featuring secure user authentication, real-time Firestore order tracking, dynamic restaurant and menu data handling, and cross-device responsive Flutter UI.',
      technologies: ['Flutter', 'Dart', 'Firebase Firestore', 'Firebase Auth', 'NoSQL'],
      github: 'https://github.com/vaibhavtale',
      demo: 'https://github.com/vaibhavtale',
      featured: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Featured <span className="gradient-text">Projects & Systems</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
          High-performance backend systems, exchange market data feeds, developer tooling, and mobile applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              <div className="space-y-4">
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" /> Live Overview
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
