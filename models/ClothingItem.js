import mongoose from 'mongoose';

const clothingItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String }
});

export default mongoose.model('ClothingItem', clothingItemSchema);
