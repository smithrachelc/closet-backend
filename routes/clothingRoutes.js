import express from 'express';
import { uploadClothing, getMyClothing } from '../controllers/clothingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// ✅ Secure the routes with JWT middleware
router.post('/upload', protect, uploadClothing);
router.get('/my', protect, getMyClothing);

export default router;