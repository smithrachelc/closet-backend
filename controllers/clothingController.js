// controllers/clothingController.js
import ClothingItem from '../models/ClothingItem.js';
import cloudinary from '../config/cloudinaryConfig.js';

export const uploadClothing = async (req, res) => {
  const { name, image, category } = req.body;
  const userId = req.user.id;

  try {
    const uploadedImage = await cloudinary.uploader.upload(image, {
      folder: 'closet-clothing'
    });

    const newClothing = new ClothingItem({
      name,
      imageUrl: uploadedImage.secure_url,
      category,
      userId
    });

    await newClothing.save();
    res.status(201).json(newClothing);
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ message: 'Upload failed' });
  }
};

export const getMyClothing = async (req, res) => {
  try {
    const clothing = await ClothingItem.find({ userId: req.user.id });
    res.json(clothing);
  } catch (err) {
    console.error('Get clothing error:', err);
    res.status(500).json({ message: 'Fetch failed' });
  }
};
