const mongoose = require('mongoose');

const outfitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ClothingItem' }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // ✅
  isPublic: { type: Boolean, default: false } // ✅
});

export default mongoose.model('Outfit', outfitSchema);
