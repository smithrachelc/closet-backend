import { Router } from 'express';
import { uploadClothing, getUserClothingItems } from '../controllers/clothingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/upload', protect, uploadClothing);
router.get('/all', protect, getUserClothingItems); // only own clothing

export default router;
