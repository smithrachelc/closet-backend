import Outfit from '../models/Outfit.js';
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

export const getMyOutfits = async (req, res) => {
  const outfits = await Outfit.find({ userId: req.user.id }).populate('items');
  res.json(outfits);
};

export const getPublicOutfits = async (req, res) => {
  const publicOutfits = await Outfit.find({ isPublic: true }).populate('items');
  res.json(publicOutfits);
};
