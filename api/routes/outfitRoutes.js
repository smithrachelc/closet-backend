import express from 'express';
import { createOutfit, getUserOutfits, getPublicOutfits, makeOutfitPublic } from '../controllers/outfitController.js';

const router = express.Router();

router.post('/outfits', createOutfit);
router.get('/outfits/private/:userId', getUserOutfits);
router.get('/outfits/public', getPublicOutfits);
router.patch('/outfits/:id/public', makeOutfitPublic);

export default router;
