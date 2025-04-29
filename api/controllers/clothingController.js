import ClothingItem from '../models/ClothingItem.js';

export const uploadClothing = async (req, res) => {
  const { name, category } = req.body;
  const userId = req.user.id; // ✅ from decoded token

  const imagePath = req.file?.path || '';

  const newItem = await ClothingItem.create({
    name,
    category,
    imagePath,
    userId
  });

  res.status(201).json(newItem);
};

// 🆕 ADD THIS FUNCTION!
export const getAllClothingItems = async (req, res) => {
  try {
    const clothingItems = await ClothingItem.find();
    res.status(200).json(clothingItems);
  } catch (error) {
    console.error('Failed to get clothing items:', error);
    res.status(500).json({ error: 'Failed to get clothing items' });
  }
};
