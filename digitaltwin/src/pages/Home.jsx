import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Terminal, ArrowRight, Download, Cpu, Server, Database, Code2, 
  Trophy, CheckCircle2, ShieldCheck, Zap, Layers 
} from 'lucide-react';

export default function Home() {
  const stats = [
    { label: 'Hands-on Experience', value: '2.2+ Yrs', desc: 'Financial Market Systems', icon: Server, color: 'text-cyan-500' },
    { label: 'LeetCode Solved', value: '750+', desc: 'DSA & Algorithms', icon: Code2, color: 'text-amber-500' },
    { label: 'HackerRank Rating', value: '5-Star', desc: 'Problem Solving & C++', icon: Trophy, color: 'text-emerald-500' },
    { label: 'Exchange Protocol', value: 'NSE & BSE', desc: 'TCP/UDP Low Latency', icon: Zap, color: 'text-indigo-500' },
  ];

  const highlights = [
    { title: 'Market Data Feed Broadcast', text: 'Decodes compressed NSE/BSE packets via LZO decompression, utilizing Boost.ASIO and zero-copy thread pools for low-latency market tick delivery.' },
    { title: 'Order Management Systems (OMS)', text: 'Processes thousands of order operations/sec using C++ middleware with Redis state caching, TLS encryption, and NATS inter-service messaging.' },
    { title: 'Cross-Platform Backend Architecture', text: 'Proficient in modern C++11/14/17/20/23 on Linux (GCC/CMake) and Windows (Visual Studio/VC++), alongside Docker and Node.js microservices.' },
  ];

  return (
    <div className="space-y-20 pb-12">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20">
        {/* Glowing Background Blob */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 via-sky-500/15 to-indigo-500/20 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            C++ Software Developer @ Greeksoft Technologies
          </motion.div>

          {/* Main Title & Hero Name */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Hi, I'm <span className="gradient-text">Vaibhav Tale</span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
              Low-Latency C++ & High-Performance Systems Engineer
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed pt-2">
              Building real-time market data broadcast servers, order management middleware, and fault-tolerant distributed infrastructure for Indian financial stock exchanges (NSE & BSE).
            </p>
          </motion.div>

          {/* Call To Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 shadow-lg shadow-cyan-500/25 hover:scale-[1.02] transition-all"
            >
              Explore Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              Get in Touch
            </Link>
            <a
              href="/Vaibhav_Tale_Resume.docx"
              download="Vaibhav_Tale_Resume.docx"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="glass-card p-6 rounded-2xl relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 ${stat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 text-slate-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {stat.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Core Technical Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Specialized Engineering Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto">
            Focusing on high-throughput C++, socket networking, multi-threading, and financial exchange middleware.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-6 rounded-2xl space-y-3 relative group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">
                0{index + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Direct Call to Action Footer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden border border-slate-800">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Looking for a High-Performance Software Developer?
              </h3>
              <p className="text-slate-400 text-sm max-w-xl">
                Experienced in low-latency C++, socket programming, Redis caching, PostgreSQL optimization, and full-stack solutions.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 whitespace-nowrap"
            >
              Contact Developer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
