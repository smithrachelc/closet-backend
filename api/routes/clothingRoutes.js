const express = require('express');
const router = express.Router();
const { getMyClothing, uploadClothing, deleteClothing } = require('../controllers/clothingController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/mine', authenticateToken, getMyClothing);
router.post('/upload', authenticateToken, uploadClothing);
router.delete('/:id', authenticateToken, deleteClothing);

module.exports = router;
