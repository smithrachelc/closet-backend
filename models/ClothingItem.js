import mongoose from 'mongoose';

const ClothingItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String } // Optional: if you handle image uploads later
});

const ClothingItem = mongoose.model('ClothingItem', ClothingItemSchema);

export default ClothingItem;
