import mongoose from 'mongoose';

const OutfitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  clothingItems: [
    {
      name: String,
      imageUrl: String,
      category: String,
      _id: false
    }
  ],
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Outfit', OutfitSchema);
