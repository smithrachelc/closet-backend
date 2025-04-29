import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

import authRoutes from './routes/authRoutes.js';
import clothingRoutes from './routes/clothingRoutes.js';
import outfitRoutes from './routes/outfitRoutes.js';

app.use('/api/auth', authRoutes);
app.use('/api/clothing', clothingRoutes);
app.use('/api/outfit', outfitRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

export default app;  // <--- important for Vercel
