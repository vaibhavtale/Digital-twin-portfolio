# 🚀 Full-Stack Hosting Guide for Portfolio Website

Welcome! This step-by-step guide will walk you through hosting your **React (Vite) + Express (Node.js)** portfolio website for **free** on **Vercel** so you can share your live link with recruiters and on LinkedIn.

---

## 🎯 Architecture Overview

Your website has two main parts:
1. **Frontend**: React + Vite (Static Client UI)
2. **Backend**: Express API (`/api/chat` for AI Assistant & `/api/contact` for contact form)

---

## ⚡ Option 1: Full-Stack Deployment on Vercel (Recommended)

Vercel allows you to host both the React frontend and the Express backend (as Serverless Functions) in **a single deployment** under one domain.

### Step 1: Prepare Code for Vercel Serverless API

To let Vercel run your Express server as a serverless function, complete these 3 small code updates:

#### 1. Export `app` in `digitaltwin/server/server.js`
At the bottom of `digitaltwin/server/server.js`, wrap `app.listen()` and export `app`:
```javascript
if (!process.env.VERCEL) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });
}

export default app;
```

#### 2. Create `digitaltwin/api/index.js`
Create a new file named `api/index.js` inside `digitaltwin/`:
```javascript
import app from '../server/server.js';

export default app;
```

#### 3. Create `digitaltwin/vercel.json`
Create a new file named `vercel.json` inside `digitaltwin/`:
```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api"
    }
  ]
}
```

---

### Step 2: Push Your Changes to GitHub

In your terminal, commit and push your updates to GitHub:
```bash
git add .
git commit -m "Add Vercel deployment configuration"
git push origin static_portfolio
```

---

### Step 3: Deploy on Vercel

1. Go to **[vercel.com](https://vercel.com/)** and click **Sign Up** (Sign in with GitHub).
2. Click **Add New Project** → **Project**.
3. Select your GitHub repository (`Digital-twin-portfolio`).
4. **Configure Project Settings**:
   - **Root Directory**: Click *Edit* and select `digitaltwin`.
   - **Framework Preset**: Vite (detected automatically).
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Environment Variables**:
   Expand the **Environment Variables** section and add:
   - `OPENROUTER_API_KEY` = `your_openrouter_api_key_here`
   - `model` = `google/gemma-2-9b-it:free`
6. Click **Deploy**! 🎉

Vercel will build your project in ~1 minute and give you a live URL (e.g., `https://vaibhav-portfolio.vercel.app`).

---

## 🌐 Option 2: Render (Backend) + Vercel (Frontend)

If you prefer hosting the Express server continuously on a traditional container rather than serverless functions:

1. **Deploy Backend on Render ([render.com](https://render.com))**:
   - Create a **Web Service** → Connect GitHub repo.
   - Root Directory: `digitaltwin/server`
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Add `.env` variables (`OPENROUTER_API_KEY`, etc.).
   - Copy your Render backend URL (e.g., `https://my-backend.onrender.com`).

2. **Connect Frontend on Vercel**:
   - Update `vite.config.js` proxy or `Chatbot.jsx`/`Contact.jsx` fetch URLs to point to your Render backend URL.
   - Deploy `digitaltwin` to Vercel as a static Vite app.

---

## ✅ Post-Deployment Checklist

Once deployed, test the following on your live website:
- [ ] Open the **AI Chatbot** and ask a question about your C++ experience.
- [ ] Submit a test message on the **Contact Page**.
- [ ] Add your live link to your **Resume**, **LinkedIn Profile**, and **GitHub Bio**!
