const mongoose = require('mongoose');

const clothingItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  imagePath: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // ✅
});

export default mongoose.model('ClothingItem', clothingItemSchema);
