import express from 'express';
import {
  createOutfit,
  toggleOutfitVisibility,
  getPublicOutfits,
  deletePublicOutfit
} from '../api/controllers/outfitController.js';
import { authenticateToken, adminOnly } from '../api/middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', authenticateToken, createOutfit);
router.patch('/toggle', authenticateToken, toggleOutfitVisibility);
router.get('/public', getPublicOutfits);
router.delete('/delete/:outfitId', authenticateToken, adminOnly, deletePublicOutfit);

export default router;
