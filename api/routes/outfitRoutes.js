import { Router } from 'express';
import { createOutfit, getUserOutfits, getPublicOutfits, makeOutfitPublic } from '../controllers/outfitController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';


const router = Router();

router.post('/create', authenticateToken, createOutfit); // Create outfit
router.get('/mine', authenticateToken, getUserOutfits); // Get my outfits
router.get('/public', getPublicOutfits); // Get public outfits
router.patch('/toggle/:id', authenticateToken, makeOutfitPublic); // Toggle outfit visibility

export default router;
