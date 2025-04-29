import express from 'express';
import { uploadClothing, getMyClothing } from '../controllers/clothingController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/upload', authenticateToken, uploadClothing);
router.get('/mine', authenticateToken, getMyClothing);

export default router;
