import mongoose from 'mongoose';

const ClothingItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

const ClothingItem = mongoose.model('ClothingItem', ClothingItemSchema);

export default ClothingItem;
