import { Router } from 'express';
import { createOutfit, getUserOutfits, getPublicOutfits, makeOutfitPublic } from '../controllers/outfitController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/create', protect, createOutfit); // Create outfit
router.get('/mine', protect, getUserOutfits); // Get my outfits
router.get('/public', getPublicOutfits); // Get public outfits
router.patch('/toggle/:id', protect, makeOutfitPublic); // Toggle outfit visibility

export default router;
