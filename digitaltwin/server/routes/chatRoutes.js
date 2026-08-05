import express from 'express';

const router = express.Router();

// Portfolio System Prompt restricting AI response strictly to Vaibhav Tale's portfolio
const SYSTEM_PROMPT = `
You are "Vaibhav's AI Portfolio Assistant" (also known as Vaibhav Tale's Digital Twin).
Your mission is to represent Vaibhav Tale, a High-Performance Low-Latency C++ & Systems Engineer, and answer visitors' questions accurately, professionally, and enthusiastically.

=== STRICT DOMAIN RESTRICTION RULE ===
1. You MUST ONLY answer questions related to Vaibhav Tale's portfolio, background, experience, skills, projects, education, achievements, contact details, and technical topics relevant to his work (C++, Market Data Broadcast, Order Management Systems, Multithreading, Sockets, Boost.ASIO, Redis, PostgreSQL, etc.).
2. IF A USER ASKS ANYTHING UNRELATED (e.g. general cooking recipes, sports scores, weather forecasts, generic homework code, world history, general trivia), YOU MUST POLITELY DECLINE BY SAYING:
"I am Vaibhav Tale's AI Portfolio Assistant. I can only answer questions related to Vaibhav's background, low-latency C++ projects, technical skills, and experience. Feel free to ask about his Market Data Broadcast server, OMS middleware, or contact information!"

=== VAIBHAV TALE'S COMPLETE PORTFOLIO KNOWLEDGE BASE ===
- Name: Vaibhav Tale
- Current Role: C++ Software Developer @ Greeksoft Technologies Pvt Ltd, Pune, India (Jun 2024 – Present, ~2.2+ years experience in Financial Systems Engineering).
- Contact Info:
  - Email: vaibhavtale20@gmail.com
  - Phone: +91 9588608130
  - Location: Pune, Maharashtra, India
  - LinkedIn: https://www.linkedin.com/in/vaibhavtale
  - GitHub: https://github.com/vaibhavtale
  - LeetCode: https://leetcode.com/u/vaibhavtale
  - HackerRank: https://www.hackerrank.com/profile/vaibhavtale20

- Key Projects & Work Highlights:
  1. Broadcast / Market Data Feed Server (NSE & BSE Feeds):
     - Engineered high-throughput C++ broadcast server on Linux ingesting real-time tick data from Indian stock exchanges (NSE, BSE) over TCP/UDP sockets.
     - Implemented topic-level subscription dispatching to reduce client network I/O.
     - Integrated LZO decompression for NSE compressed packet decoding.
     - Used Boost.ASIO, lock-free queues, std::thread pools, and mutexes for zero-copy message passing under volatile update rates.
     - Optimized PostgreSQL & MySQL indexes for sub-millisecond historical OHLCV data queries.
  2. OMS Trading Middleware Platform:
     - Maintained C++ Order Management System (OMS) middleware handling thousands of order placement, modification, cancellation, and execution operations per second.
     - Integrated NATS messaging for decoupled, fault-tolerant microservice communication.
     - Implemented OpenSSL (libssl/libcrypto) TLS encryption for secure packet transmission.
     - Used Redis for sub-millisecond live order state caching and Gap Fill Management during client reconnects.
  3. AI PR Tracking & Automated Code Review Tool:
     - Built a Node.js automation tool integrated with JIRA, AI code review checks, and documentation synchronization.
  4. Mobile Applications:
     - Real-Time Messenger & Video Calling App (Flutter, Dart, Firebase, Zegocloud API).
     - Food Buddy Delivery Platform (Flutter, Dart, Firebase Firestore).

- Technical Skills:
  - Languages: C++17/20/23, C, Dart, SQL, Python (Fundamentals), JavaScript / Node.js, Visual C++.
  - Core C++: STL, OOP, Templates & Metaprogramming, RAII, Move Semantics, Smart Pointers, Design Patterns.
  - Networking & Protocols: TCP/UDP Sockets, Boost.ASIO, FIX Protocol, Multicast Broadcasting, Zero-Copy Data Pipelines, OpenSSL.
  - Concurrency: std::thread, Mutex & Locks, Condition Variables, Atomic Operations, Custom Thread Pools, Lock-Free Data Structures.
  - Databases & Caching: PostgreSQL, MySQL, Redis Cache, Firebase Firestore (NoSQL).
  - DevOps & Tools: Linux (Primary Platform), CMake, Docker, GitLab CI/CD, GCC/GDB, Visual Studio, Shell & Batch Scripting.
  - AI Tools: Claude API, Cursor AI IDE, OpenAI Codex, Agentic AI Workflows.

- Achievements & Certifications:
  - LeetCode: 750+ DSA Problems Solved across 40+ competitive contests.
  - HackerRank: 5-Star Rating in Problem Solving (DSA) & C++ domains.
  - HackerRank Certificates: Problem Solving (Certificate ID: 22E3D2F20CA8), Java Basics (Certificate ID: 05BC57036BD5).

- Education:
  - B.Sc. in Computer Science (First Division, 2019 – 2023), Gauri Shankar Trust Science College, Malkapur, Maharashtra.

=== RESPONSE STYLE ===
- Keep answers professional, concise, structured with Markdown bullet points or bold text where appropriate.
- Direct users to Vaibhav's email or contact page when they ask how to hire or get in touch.
`;

// Local Fallback Knowledge Engine in case OpenRouter API fails or rate-limits
function getFallbackResponse(userMessage) {
  const q = userMessage.toLowerCase();

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('hire')) {
    return `You can reach **Vaibhav Tale** through the following direct channels:
- ✉️ **Email**: [vaibhavtale20@gmail.com](mailto:vaibhavtale20@gmail.com)
- 📞 **Phone**: +91 9588608130
- 📍 **Location**: Pune, Maharashtra, India
- 💼 **LinkedIn**: [linkedin.com/in/vaibhavtale](https://www.linkedin.com/in/vaibhavtale)
- 🐙 **GitHub**: [github.com/vaibhavtale](https://github.com/vaibhavtale)

Feel free to send a message via the **Contact Page** on this site!`;
  }

  if (q.includes('broadcast') || q.includes('market data') || q.includes('nse') || q.includes('bse') || q.includes('lzo') || q.includes('feed')) {
    return `Vaibhav engineered a **High-Throughput Broadcast & Market Data Feed System** in C++:
- **Exchange Integration**: Ingests real-time tick packets from **NSE & BSE** via TCP/UDP sockets.
- **Performance**: Uses **LZO decompression** for NSE feeds, **Boost.ASIO** zero-copy thread pools, and topic-level subscription dispatching.
- **Storage**: Uses **Redis** caching and sub-millisecond indexed **PostgreSQL** for historical OHLCV data.`;
  }

  if (q.includes('oms') || q.includes('middleware') || q.includes('trading') || q.includes('order') || q.includes('nats')) {
    return `Vaibhav developed and maintained the **OMS Trading Middleware Platform**:
- **Throughput**: Processes thousands of order placement, modification, and cancellation events per second in C++.
- **Architecture**: Integrates **NATS messaging** for decoupled microservice communication and **OpenSSL TLS** for secure packet transport.
- **Fault-Tolerance**: Uses **Redis** state machine caching and a **Gap Fill Management** system to prevent order loss upon reconnection.`;
  }

  if (q.includes('skill') || q.includes('cpp') || q.includes('c++') || q.includes('tech') || q.includes('stack') || q.includes('language')) {
    return `**Vaibhav's Technical Core Stack**:
- **Languages**: Modern C++ (C++17/20/23), C, Dart, SQL, Node.js, Python
- **Low-Latency & Concurrency**: Boost.ASIO, TCP/UDP Sockets, ` + "`std::thread`" + `, Mutexes, Lock-Free Queues, Zero-Copy Pipelines
- **Databases**: PostgreSQL, MySQL, Redis Cache, Firestore
- **Tools**: Linux, CMake, Docker, GitLab CI/CD, GCC/GDB, Visual Studio`;
  }

  if (q.includes('leetcode') || q.includes('hackerrank') || q.includes('dsa') || q.includes('achievement') || q.includes('rating') || q.includes('contest')) {
    return `**Vaibhav's Competitive Programming Achievements**:
- 🏆 **LeetCode**: **750+ DSA Problems Solved** across 40+ contests ([View Profile](https://leetcode.com/u/vaibhavtale))
- ⭐ **HackerRank**: **5-Star Rating** in DSA & C++ ([View Profile](https://www.hackerrank.com/profile/vaibhavtale20))
- 📜 **Certified**: HackerRank Problem Solving & Java Basics Certified`;
  }

  if (q.includes('experience') || q.includes('work') || q.includes('company') || q.includes('greeksoft') || q.includes('job')) {
    return `**Professional Experience**:
- **Role**: C++ Software Developer at **Greeksoft Technologies Pvt Ltd** (Pune, India)
- **Period**: Jun 2024 – Present (2.2+ Years)
- **Specialization**: Building low-latency C++ financial exchange systems, market data servers, and trading middleware.`;
  }

  if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('qualification')) {
    return `**Academic Background**:
- **Degree**: Bachelor of Science (B.Sc.) in Computer Science
- **Institution**: Gauri Shankar Trust Science College, Malkapur (First Division, 2019 – 2023).`;
  }

  if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('who are you')) {
    return `Hello! 👋 I am **Vaibhav's AI Portfolio Assistant**. Ask me anything about Vaibhav's low-latency C++ engineering, financial exchange feed projects, technical skills, or contact info!`;
  }

  return `I am Vaibhav Tale's AI Portfolio Assistant. I can answer questions specifically about Vaibhav's low-latency C++ engineering experience, market data broadcast server, OMS middleware, skills, LeetCode stats, or contact details. How can I assist you with his portfolio today?`;
}

router.post('/', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message content is required.' });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    const configuredModel = process.env.model || process.env.MODEL || 'google/gemma-2-9b-it:free';
    const modelsToTry = [
      configuredModel,
      'google/gemma-2-9b-it:free',
      'meta-llama/llama-3.3-70b-instruct:free',
      'meta-llama/llama-3.2-1b-instruct:free',
      'deepseek/deepseek-r1:free',
      'mistralai/mistral-7b-instruct:free',
    ].filter((m, i, self) => m && self.indexOf(m) === i);

    if (!apiKey) {
      console.warn('⚠️ OPENROUTER_API_KEY missing in .env. Using portfolio knowledge engine fallback.');
      const fallbackReply = getFallbackResponse(message);
      return res.json({ reply: fallbackReply });
    }

    // Format conversation history for API request
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
    ];

    if (Array.isArray(history)) {
      history.forEach((msg) => {
        if (msg.role && msg.content) {
          messages.push({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content,
          });
        }
      });
    }

    messages.push({ role: 'user', content: message });

    // Try OpenRouter models in order
    for (const currentModel of modelsToTry) {
      try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': 'http://localhost:3000',
            'X-Title': 'Vaibhav Tale Portfolio AI',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: currentModel,
            messages: messages,
            temperature: 0.5,
            max_tokens: 800,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const replyContent = data.choices?.[0]?.message?.content;
          if (replyContent) {
            return res.json({ reply: replyContent });
          }
        } else {
          const errText = await response.text();
          console.warn(`⚠️ OpenRouter API model ${currentModel} returned ${response.status}: ${errText}. Trying next model...`);
        }
      } catch (err) {
        console.warn(`⚠️ Fetch failed for model ${currentModel}:`, err.message);
      }
    }

    // If all API calls fail, fallback to local knowledge engine
    console.warn('⚠️ All OpenRouter models failed. Using local portfolio knowledge engine.');
    const fallbackReply = getFallbackResponse(message);
    return res.json({ reply: fallbackReply, fallbackUsed: true });

  } catch (error) {
    console.error('Error handling portfolio chat request:', error);
    const fallbackReply = getFallbackResponse(req.body?.message || '');
    return res.json({ reply: fallbackReply, fallbackUsed: true });
  }
});

export default router;
