import express from 'express';
import { getMyClothing, uploadClothing, deleteClothing } from '../controllers/clothingController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/mine', authenticateToken, getMyClothing);
router.post('/upload', authenticateToken, uploadClothing);
router.delete('/:id', authenticateToken, deleteClothing);

export default router;
