import express from 'express';
import { uploadClothing, getAllClothingItems } from '../controllers/clothingController.js';
import upload from '../middleware/uploadMiddleware.js'; // multer upload middleware

const router = express.Router();

// Upload clothing (POST)
router.post('/upload', upload.single('image'), uploadClothing);

// Get all clothing items (GET)
router.get('/all', getAllClothingItems);

export default router;
