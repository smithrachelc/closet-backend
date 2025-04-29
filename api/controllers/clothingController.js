import ClothingItem from '../models/ClothingItem.js';
import cloudinary from '../utils/cloudinary.js';

// GET /api/clothing/mine
export const getMyClothing = async (req, res) => {
  try {
    const userId = req.user.id;
    const items = await ClothingItem.find({ userId });
    res.json(items);
  } catch (err) {
    console.error('Error fetching clothing:', err);
    res.status(500).json({ message: 'Failed to fetch clothing items' });
  }
};

// POST /api/clothing/upload
export const uploadClothing = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, category, imageBase64 } = req.body;

    if (!imageBase64 || !name) {
      return res.status(400).json({ message: 'Missing image or name' });
    }

    const uploadResult = await cloudinary.uploader.upload(imageBase64, {
      folder: 'closet-items'
    });

    const newItem = new ClothingItem({
      name,
      category,
      imageUrl: uploadResult.secure_url,
      userId
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error('Error uploading clothing:', err);
    res.status(500).json({ message: 'Failed to upload clothing item' });
  }
};

// DELETE /api/clothing/:id
export const deleteClothing = async (req, res) => {
  try {
    const userId = req.user.id;
    const itemId = req.params.id;

    const item = await ClothingItem.findOne({ _id: itemId, userId });
    if (!item) {
      return res.status(404).json({ message: 'Clothing item not found' });
    }

    await item.deleteOne();
    res.json({ message: 'Clothing item deleted' });
  } catch (err) {
    console.error('Error deleting clothing:', err);
    res.status(500).json({ message: 'Failed to delete clothing item' });
  }
};
