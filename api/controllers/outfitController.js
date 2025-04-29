import Outfit from '../models/Outfit.js';

export const createOutfit = async (req, res) => {
  try {
    const { name, userId, clothingItems } = req.body;
    const outfit = new Outfit({ name, userId, clothingItems });
    await outfit.save();
    res.status(201).json({ message: 'Outfit saved successfully!' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to save outfit', details: err.message });
  }
};

export const getUserOutfits = async (req, res) => {
  try {
    const outfits = await Outfit.find({ userId: req.params.userId });
    res.json(outfits);
  } catch (err) {
    res.status(400).json({ error: 'Failed to load outfits', details: err.message });
  }
};

export const getPublicOutfits = async (req, res) => {
  try {
    const outfits = await Outfit.find({ isPublic: true });
    res.json(outfits);
  } catch (err) {
    res.status(400).json({ error: 'Failed to load public outfits', details: err.message });
  }
};

export const makeOutfitPublic = async (req, res) => {
  try {
    await Outfit.findByIdAndUpdate(req.params.id, { isPublic: true });
    res.json({ message: 'Outfit is now public!' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to make outfit public', details: err.message });
  }
};
