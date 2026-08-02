# Vaibhav Tale - Software Developer Portfolio

Modern, responsive web portfolio for **Vaibhav Tale** (C++ Software Developer & High-Performance Systems Engineer).

## Tech Stack

- **Frontend**: React 18, Tailwind CSS, Framer Motion, Lucide React, React Router DOM v6
- **Backend**: Node.js, Express, MongoDB (Mongoose), CORS, Dotenv
- **Build Tool**: Vite

## Project Architecture & Routing

- `/` - Hero section, key metrics (2.2+ Yrs experience, 750+ LeetCode), core competencies
- `/projects` - Exchange broadcast server, OMS trading middleware, AI PR tracking tool, Flutter mobile apps
- `/experience` - Work history at Greeksoft Technologies Pvt Ltd & Education
- `/skills` - Categorized skills (Languages, Core C++, Networking, Concurrency, DBs, DevOps, Certifications)
- `/contact` - Contact form connecting to Node.js/Express backend API endpoint (`POST /api/contact`)

## Features

- **Dark & Light Theme**: Toggle mode persisted in `localStorage`
- **Responsive Layout**: Glassmorphism UI optimized across desktop, tablet, and mobile
- **Express Backend**: RESTful contact submission handler with MongoDB connection & memory fallback

## Getting Started

1. **Install Dependencies**: `npm install`
2. **Start Development**: `npm run dev`
3. **Start Server**: `node server/server.js`
4. **Build Production Bundle**: `npm run build`
