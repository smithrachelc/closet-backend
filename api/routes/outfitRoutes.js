import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { getMyOutfits, createOutfit, toggleOutfitVisibility, getPublicOutfits } from '../controllers/outfitController.js';

const router = express.Router();

router.get('/mine', authenticateToken, getMyOutfits);
router.post('/create', authenticateToken, createOutfit);
router.patch('/toggle/:id', authenticateToken, toggleOutfitVisibility);
router.get('/public', getPublicOutfits);

export default router;
