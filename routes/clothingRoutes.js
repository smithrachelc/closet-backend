import express from 'express';
import { uploadClothing } from '../controllers/clothingController.js';
import upload from '../middleware/uploadMiddleware.js'; // Import your multer middleware

const router = express.Router();

// Use upload.single('image') — 'image' must match the FormData field name
router.post('/upload', upload.single('image'), uploadClothing);

export default router;
