import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, X, Send, Sparkles, RefreshCw, ChevronDown, 
  Terminal, ShieldAlert, User, MessageSquare, ExternalLink, Code2
} from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hi there! 👋 I am **Vaibhav's AI Portfolio Assistant**.

I am trained on Vaibhav Tale's low-latency C++ systems experience, market data broadcast servers, trading middleware, technical skills, and achievements.

How can I help you today?`,
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const chatEndRef = useRef(null);

  const quickQuestions = [
    "Tell me about the Market Data Broadcast Server",
    "What is Vaibhav's C++ & OMS experience?",
    "What are his LeetCode & HackerRank stats?",
    "How can I contact or hire Vaibhav?",
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      // Build history payload omitting welcome message
      const history = messages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({ role: m.role, content: m.content }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: query.trim(),
          history: history,
        }),
      });

      const data = await response.json();

      if (response.ok && data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: data.reply,
          },
        ]);
      } else {
        throw new Error(data.error || 'Unable to get response');
      }
    } catch (err) {
      console.error('Chat API Error:', err);
      // Fallback client message
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `I am currently operating in direct mode. **Vaibhav Tale** is a Low-Latency C++ Engineer at Greeksoft Technologies with 2.2+ years experience building market data broadcast servers (NSE/BSE) and OMS middleware. You can contact him at **vaibhavtale20@gmail.com** or **+91 9588608130**.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: `Chat history cleared! Feel free to ask any question about Vaibhav's low-latency C++ engineering skills, exchange feed projects, or contact details.`,
      }
    ]);
  };

  // Helper renderer for lightweight markdown-style bold and links
  const renderFormattedText = (text) => {
    if (!text) return null;
    
    // Split by lines
    const lines = text.split('\n');
    return lines.map((line, lIdx) => {
      // Parse markdown links [text](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        parts.push(
          <a
            key={match.index}
            href={match[2]}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-500 hover:underline inline-flex items-center gap-1 font-semibold"
          >
            {match[1]} <ExternalLink className="w-3 h-3" />
          </a>
        );
        lastIndex = linkRegex.lastIndex;
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      // Process bold formatting **text** inside parts
      const renderedLine = parts.map((part, pIdx) => {
        if (typeof part !== 'string') return part;
        const boldParts = part.split(/\*\*(.*?)\*\*/g);
        return boldParts.map((bText, bIdx) => 
          bIdx % 2 === 1 ? <strong key={bIdx} className="font-semibold text-cyan-600 dark:text-cyan-400">{bText}</strong> : bText
        );
      });

      return (
        <div key={lIdx} className={lIdx > 0 ? 'mt-1.5' : ''}>
          {renderedLine}
        </div>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {/* Chat Toggle Floating Button */}
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xl shadow-cyan-500/30 font-semibold cursor-pointer border border-white/20"
          >
            <div className="relative">
              <Bot className="w-6 h-6 animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900 animate-ping" />
            </div>
            <span className="text-sm font-bold tracking-wide">Ask AI Twin</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {/* Main Chat Modal Window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-[92vw] sm:w-[420px] h-[580px] max-h-[85vh] rounded-3xl glass-panel shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col overflow-hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold flex items-center gap-2">
                    Vaibhav's AI Twin
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono border border-emerald-500/30">
                      Portfolio Only
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    OpenRouter AI Connected
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-slate-400">
                <button
                  onClick={handleClearChat}
                  title="Clear Chat History"
                  className="p-2 rounded-xl hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Assistant"
                  className="p-2 rounded-xl hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Body Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
              {messages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                        isUser
                          ? 'bg-indigo-600 text-white'
                          : 'bg-cyan-500/15 text-cyan-500 border border-cyan-500/30'
                      }`}
                    >
                      {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>

                    <div
                      className={`max-w-[82%] px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                        isUser
                          ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-tr-none'
                          : 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-800 rounded-tl-none'
                      }`}
                    >
                      {renderFormattedText(msg.content)}
                    </div>
                  </motion.div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 text-slate-400 text-xs italic pl-2">
                  <Bot className="w-4 h-4 animate-spin text-cyan-500" />
                  <span>Vaibhav's AI Twin is typing...</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            {messages.length <= 3 && !isLoading && (
              <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/40">
                <p className="text-[11px] font-semibold text-slate-400 mb-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Suggested Prompts:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 hover:text-cyan-500 transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Vaibhav's projects, C++ skills..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-slate-200 dark:border-slate-800"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-bold"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
