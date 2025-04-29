import mongoose from 'mongoose';

const outfitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  clothingItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ClothingItem' }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  isPublic: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Outfit', outfitSchema);
