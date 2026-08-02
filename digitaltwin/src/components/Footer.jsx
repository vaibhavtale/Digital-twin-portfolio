import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Code, Trophy, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-950/80 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Profile Summary */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold gradient-text">Vaibhav Tale</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
              C++ Software Developer specializing in real-time market data broadcast systems, low-latency middleware architecture, and distributed services for financial markets (NSE & BSE).
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" /> Pune, MH, India
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-500" /> vaibhavtale20@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-500" /> +91 9588608130
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/" className="hover:text-cyan-500 transition-colors flex items-center gap-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cyan-500 transition-colors flex items-center gap-1">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-cyan-500 transition-colors flex items-center gap-1">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-cyan-500 transition-colors flex items-center gap-1">
                  Skills & Certifications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-500 transition-colors flex items-center gap-1">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Profiles & Handles */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Profiles & Coding
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <a 
                href="https://www.linkedin.com/in/vaibhavtale" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-cyan-500 transition-colors flex items-center gap-2 group"
              >
                <Linkedin className="w-4 h-4 text-sky-500" />
                LinkedIn
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://leetcode.com/u/vaibhavtale" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-amber-500 transition-colors flex items-center gap-2 group"
              >
                <Code className="w-4 h-4 text-amber-500" />
                LeetCode (750+ Solved)
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://www.hackerrank.com/profile/vaibhavtale20" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-emerald-500 transition-colors flex items-center gap-2 group"
              >
                <Trophy className="w-4 h-4 text-emerald-500" />
                HackerRank (5-Star DSA)
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://github.com/vaibhavtale" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                GitHub
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/60 text-center text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Vaibhav Tale. Built with React JS, Tailwind CSS, and Node.js.</p>
        </div>
      </div>
    </footer>
  );
}
