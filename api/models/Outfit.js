import mongoose from 'mongoose';

const outfitSchema = new mongoose.Schema({
  name: { type: String, required: true }, // outfit name like "Summer Vibes"
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // who created it
  clothingItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ClothingItem' }], // clothes inside the outfit
  isPublic: { type: Boolean, default: false }, // private (false) or public (true)
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Outfit', outfitSchema);
