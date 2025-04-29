import ClothingItem from '../models/ClothingItem.js';

export const uploadClothing = async (req, res) => {
  try {
    const { name, category } = req.body;
    const userId = req.user.id;

    if (!name || !category || !req.file) {
      return res.status(400).json({ message: 'Name, category, and image are required.' });
    }

    const newClothingItem = await ClothingItem.create({
      name,
      category,
      imagePath: req.file.path, // ✅ Cloudinary gives URL here!
      userId
    });

    res.status(201).json(newClothingItem);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Error uploading clothing item' });
  }
};
