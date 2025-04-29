import express from 'express';
import { uploadClothing, getMyClothing } from '../api/controllers/clothingController.js';
import { authenticateToken } from '../api/middleware/authMiddleware.js';

const router = express.Router();

router.post('/upload', authenticateToken, uploadClothing);
router.get('/mine', authenticateToken, getMyClothing);

export default router;
