import ClothingItem from '../models/ClothingItem.js';

export const uploadClothing = async (req, res) => {
  try {
    const { name, category } = req.body;

    const newClothing = new ClothingItem({
      name,
      category
    });

    await newClothing.save();

    res.status(200).json({ message: 'Clothing uploaded successfully', clothing: newClothing });
  } catch (error) {
    console.error('Error uploading clothing:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
};
