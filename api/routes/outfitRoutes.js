const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const { getMyOutfits, createOutfit, toggleOutfitVisibility, getPublicOutfits } = require('../controllers/outfitController');

const router = express.Router();

router.get('/mine', authenticateToken, getMyOutfits);
router.post('/create', authenticateToken, createOutfit);
router.patch('/toggle/:id', authenticateToken, toggleOutfitVisibility);
router.get('/public', getPublicOutfits);

module.exports = router;
