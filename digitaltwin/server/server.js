import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRoutes from './routes/contactRoutes.js';
import chatRoutes from './routes/chatRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/chat', chatRoutes);

// Database Connection with graceful fallback
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB database'))
  .catch((err) => {
    console.warn('⚠️ MongoDB connection deferred or unavailable. Server running in standalone mode.', err.message);
  });

if (!process.env.VERCEL) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Portfolio Backend Server listening on http://localhost:${PORT}`);
  });
}

export default app;