import express from 'express';
import { uploadClothing } from '../controllers/clothingController.js';

const router = express.Router();

// POST /api/clothing/upload
router.post('/upload', uploadClothing);

export default router;
