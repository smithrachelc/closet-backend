import ClothingItem from '../models/ClothingItem.js';

// ✅ Upload a clothing item
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
      imagePath: req.file.path, // ✅ will be Cloudinary URL now
      userId
    });

    res.status(201).json(newClothingItem);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Error uploading clothing item' });
  }
};

// ✅ Get all clothing items for the logged-in user
export const getUserClothingItems = async (req, res) => {
  try {
    const clothingItems = await ClothingItem.find({ userId: req.user.id });
    res.json(clothingItems);
  } catch (error) {
    console.error('Fetching clothing items error:', error);
    res.status(500).json({ message: 'Error fetching clothing items' });
  }
};
