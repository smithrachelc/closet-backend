import ClothingItem from '../models/ClothingItem.js';

// Upload clothing (you already have this)
export const uploadClothing = async (req, res) => {
  const { name, category } = req.body;
  const userId = req.user.id;

  const imagePath = req.file?.path || '';

  const newItem = await ClothingItem.create({
    name,
    category,
    imagePath,
    userId
  });

  res.status(201).json(newItem);
};

// ✅ Add this missing function:
export const getUserClothingItems = async (req, res) => {
  const userId = req.user.id;

  const clothingItems = await ClothingItem.find({ userId });

  res.json(clothingItems);
};
