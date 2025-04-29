import { Router } from 'express';
import { uploadClothing, getUserClothingItems } from '../controllers/clothingController.js';
import { upload } from '../middleware/uploadMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/upload', protect, upload.single('image'), uploadClothing);
router.get('/all', protect, getUserClothingItems);

export default router;
