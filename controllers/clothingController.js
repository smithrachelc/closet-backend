import ClothingItem from '../models/ClothingItem.js';

export const uploadClothing = async (req, res) => {
  try {
    const { name, category } = req.body;
    const imageFile = req.file; // multer parses the uploaded file

    if (!imageFile) {
      return res.status(400).json({ error: 'Image is required' });
    }

    const imageUrl = `/uploads/${imageFile.filename}`; // Local file path (later change to S3)

    const newClothing = new ClothingItem({
      name,
      category,
      imageUrl
    });

    await newClothing.save();

    res.status(200).json({ message: 'Clothing uploaded successfully', clothing: newClothing });
  } catch (error) {
    console.error('Error uploading clothing:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
};

// No change needed for getAllClothingItems
export const getAllClothingItems = async (req, res) => {
  try {
    const clothingItems = await ClothingItem.find();
    res.status(200).json(clothingItems);
  } catch (error) {
    console.error('Failed to get clothing items:', error);
    res.status(500).json({ error: 'Failed to get clothing items' });
  }
};
