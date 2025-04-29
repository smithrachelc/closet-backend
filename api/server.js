import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from '../routes/authRoutes.js';
import clothingRoutes from '../routes/clothingRoutes.js';
import outfitRoutes from '../routes/outfitRoutes.js';
import path from 'path';

dotenv.config();
const app = express();
app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/clothing', clothingRoutes);
app.use('/api', outfitRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// ❗ NO app.listen() here for Vercel!
// ❗ Must export app:
export default app;
