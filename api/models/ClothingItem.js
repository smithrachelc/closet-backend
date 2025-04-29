import mongoose from 'mongoose';

const clothingItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  imagePath: { type: String }, // ✅ Save uploaded image path
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const ClothingItem = mongoose.model('ClothingItem', clothingItemSchema);

export default ClothingItem;
