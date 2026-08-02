import express from 'express';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

const router = express.Router();

// Temporary in-memory fallback store if MongoDB is offline
const inMemoryContacts = [];

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    const contactData = { name, email, subject, message, createdAt: new Date() };

    if (mongoose.connection.readyState === 1) {
      const newContact = await Contact.create(contactData);
      return res.status(201).json({
        success: true,
        message: 'Message sent successfully!',
        data: newContact,
      });
    } else {
      inMemoryContacts.push(contactData);
      return res.status(201).json({
        success: true,
        message: 'Message received successfully!',
        data: contactData,
      });
    }
  } catch (err) {
    console.error('Contact submission error:', err);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// GET /api/health
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    mongoConnected: mongoose.connection.readyState === 1,
    inMemoryCount: inMemoryContacts.length,
  });
});

export default router;
