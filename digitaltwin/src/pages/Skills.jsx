import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Cpu, Network, Database, Wrench, Trophy, 
  CheckCircle, Terminal, Bot, Award, ExternalLink 
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: Code2,
      skills: ['C++17/20/23', 'C', 'Dart', 'SQL', 'Python (Fundamentals)', 'JavaScript / Node.js', 'Visual C++'],
    },
    {
      name: 'Core C++ & Architecture',
      icon: Cpu,
      skills: ['Standard Template Library (STL)', 'Object Oriented Programming', 'Templates & Metaprogramming', 'RAII', 'Move Semantics', 'Smart Pointers', 'Design Patterns'],
    },
    {
      name: 'Networking & Protocols',
      icon: Network,
      skills: ['TCP/UDP Sockets', 'Boost.ASIO', 'FIX Protocol', 'Multicast Broadcasting', 'Zero-Copy Data Pipelines', 'OpenSSL (libssl)'],
    },
    {
      name: 'Concurrency & Multithreading',
      icon: Terminal,
      skills: ['std::thread', 'Mutex & Locks', 'Condition Variables', 'Atomic Operations', 'Custom Thread Pools', 'Lock-Free Data Structures'],
    },
    {
      name: 'Databases & Caching',
      icon: Database,
      skills: ['PostgreSQL', 'MySQL', 'Redis Cache', 'Firebase Firestore (NoSQL)', 'Query Indexing & Optimization'],
    },
    {
      name: 'DevOps, Build & Platforms',
      icon: Wrench,
      skills: ['Linux (Primary Platform)', 'CMake Build Automation', 'Docker Containers', 'GitLab CI/CD', 'GCC & GDB Debugging', 'Visual Studio (Windows)', 'Shell & Batch Scripting'],
    },
    {
      name: 'AI Tools & Modern Engineering',
      icon: Bot,
      skills: ['Claude API / AI Automation', 'Cursor AI IDE', 'OpenAI Codex', 'Agentic AI Workflows (Certified)'],
    },
  ];

  const achievements = [
    {
      platform: 'LeetCode',
      highlight: '750+ DSA Problems Solved',
      detail: 'Participated in 40+ competitive programming contests',
      link: 'https://leetcode.com/u/vaibhavtale',
    },
    {
      platform: 'HackerRank',
      highlight: '5-Star Rating',
      detail: 'Highest distinction in Problem Solving (DSA) & C++ domains',
      link: 'https://www.hackerrank.com/profile/vaibhavtale20',
    },
    {
      platform: 'HackerRank Certified',
      highlight: 'Problem Solving Certificate',
      detail: 'Certificate ID: 22E3D2F20CA8',
      link: 'https://www.hackerrank.com/profile/vaibhavtale20',
    },
    {
      platform: 'HackerRank Certified',
      highlight: 'Java Basics Certificate',
      detail: 'Certificate ID: 05BC57036BD5',
      link: 'https://www.hackerrank.com/profile/vaibhavtale20',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Technical <span className="gradient-text">Skills & Expertise</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
          Core competencies categorized across C++ systems programming, network infrastructure, databases, and problem solving.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {category.name}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Competitive Programming & Certifications */}
      <div className="space-y-8 pt-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Competitive Programming & Certifications
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Proven problem-solving skills across algorithmic platforms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl space-y-3 relative group hover:border-amber-500/40 block"
            >
              <div className="flex items-center justify-between text-xs font-bold text-amber-500 uppercase tracking-wider">
                <span>{item.platform}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
                {item.highlight}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.detail}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
