import express from 'express';
import { uploadClothing, getAllClothingItems } from '../controllers/clothingController.js';
import upload from '../middleware/uploadMiddleware.js'; // multer upload middleware
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Upload clothing (POST)
router.post('/upload', protect, upload.single('image'), uploadClothing);

// Get all clothing items (GET)
router.get('/all', getAllClothingItems);

export default router;
