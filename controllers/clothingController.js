import ClothingItem from '../models/ClothingItem.js';
import cloudinary from '../config/cloudinaryConfig.js';

// ❌ No req.body or req.user usage here at the top level

export const uploadClothing = async (req, res) => {
  try {
    console.log('UPLOAD BODY:', req.body); // ✅ Now inside a function
    console.log('USER:', req.user);

    const { name, image, category } = req.body;

    const uploadedImage = await cloudinary.uploader.upload(image, {
      folder: 'closet-clothing'
    });

    const newClothing = new ClothingItem({
      name,
      imageUrl: uploadedImage.secure_url,
      category,
      userId: req.user.id
    });

    await newClothing.save();
    res.status(201).json(newClothing);
  } catch (err) {
    console.error('Upload error:', err.message, err.stack);
    res.status(500).json({ message: 'Upload failed' });
  }
};

export const getMyClothing = async (req, res) => {
  try {
    const clothing = await ClothingItem.find({ userId: req.user.id });
    res.json(clothing);
  } catch (err) {
    console.error('Upload error:', err.message, err.stack);

    res.status(500).json({ message: 'Fetch failed' });
  }
};