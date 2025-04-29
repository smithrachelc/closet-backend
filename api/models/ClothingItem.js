import mongoose from 'mongoose';

const ClothingItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const ClothingItem = mongoose.model('ClothingItem', ClothingItemSchema);

export default ClothingItem;
