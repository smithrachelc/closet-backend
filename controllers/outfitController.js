import Outfit from '../models/Outfit.js';

export const saveOutfit = async (req, res) => {
  const { name, items } = req.body;
  try {
    const newOutfit = new Outfit({
      name,
      clothingItems: items,
      userId: req.user.id
    });

    await newOutfit.save();
    res.status(201).json(newOutfit);
  } catch (err) {
    console.error('Save outfit error:', err);
    res.status(500).json({ message: 'Save failed' });
  }
};
