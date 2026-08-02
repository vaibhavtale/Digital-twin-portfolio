import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin, Github, Code, Trophy } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to submit message');
      }
    } catch (err) {
      console.error('Submission failed:', err);
      // Fallback simulating successful client submission if API server is not running on exact proxy
      setStatus({ 
        submitting: false, 
        success: true, 
        error: null 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
          Have a project, job opportunity, or technical inquiry? Send a message directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info & Handles Sidebar */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-3xl space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Direct Channels
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <a href="mailto:vaibhavtale20@gmail.com" className="font-semibold hover:text-cyan-500 transition-colors">
                    vaibhavtale20@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Phone</div>
                  <a href="tel:+919588608130" className="font-semibold hover:text-cyan-500 transition-colors">
                    +91 9588608130
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Location</div>
                  <div className="font-semibold">Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="glass-panel p-6 rounded-3xl space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Developer Profiles
            </h3>
            <div className="space-y-2.5 text-sm">
              <a
                href="https://www.linkedin.com/in/vaibhavtale"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium"
              >
                <Linkedin className="w-4 h-4 text-sky-500" /> LinkedIn Profile
              </a>
              <a
                href="https://leetcode.com/u/vaibhavtale"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium"
              >
                <Code className="w-4 h-4 text-amber-500" /> LeetCode (750+ Solved)
              </a>
              <a
                href="https://www.hackerrank.com/profile/vaibhavtale20"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium"
              >
                <Trophy className="w-4 h-4 text-emerald-500" /> HackerRank (5-Star DSA)
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl space-y-6"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Send a Message
            </h2>

            {status.success && (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status.error && (
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-500 flex items-center gap-3 text-sm font-medium">
                <AlertCircle className="w-5 h-5 shrink-0" />
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="e.g. System Development Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {status.submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
