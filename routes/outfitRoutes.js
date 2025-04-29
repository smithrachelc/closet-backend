import express from 'express';
import {
  createOutfit,
  toggleOutfitVisibility,
  getPublicOutfits,
  deletePublicOutfit
} from '../controllers/outfitController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', protect, createOutfit);
router.patch('/toggle', protect, toggleOutfitVisibility);
router.get('/public', getPublicOutfits);
router.delete('/delete/:outfitId', protect, adminOnly, deletePublicOutfit);

export default router;
