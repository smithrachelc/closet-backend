export const uploadClothing = async (req, res) => {
  const { name, image, category } = req.body;
  try {
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
    console.error('Upload error:', err);
    res.status(500).json({ message: 'Upload failed' });
  }
};
