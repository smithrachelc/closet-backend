import Outfit from '../models/Outfit.js';

// Create a new outfit
export const createOutfit = async (req, res) => {
  const { name, items, isPublic } = req.body;
  const userId = req.user.id;

  const newOutfit = await Outfit.create({
    name,
    items,
    userId,
    isPublic: isPublic || false
  });

  res.status(201).json(newOutfit);
};

// Get all outfits owned by the logged-in user
export const getUserOutfits = async (req, res) => {
  const outfits = await Outfit.find({ userId: req.user.id }).populate('items');
  res.json(outfits);
};

// Get all public outfits
export const getPublicOutfits = async (req, res) => {
  const publicOutfits = await Outfit.find({ isPublic: true }).populate('items');
  res.json(publicOutfits);
};

// Toggle public/private visibility of an outfit
export const makeOutfitPublic = async (req, res) => {
  const outfitId = req.params.id;
  const { isPublic } = req.body;
  const outfit = await Outfit.findById(outfitId);

  if (!outfit) {
    return res.status(404).json({ message: 'Outfit not found' });
  }

  if (outfit.userId.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Not authorized to modify this outfit' });
  }

  outfit.isPublic = isPublic;
  await outfit.save();

  res.json({ message: `Outfit is now ${isPublic ? 'public' : 'private'}` });
};
