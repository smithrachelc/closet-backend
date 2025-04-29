import mongoose from 'mongoose';

const OutfitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  clothingItems: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'ClothingItem' }  // ✅ Reference
  ],
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Outfit', OutfitSchema);
