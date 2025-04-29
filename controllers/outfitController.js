import Outfit from '../models/Outfit.js';

export const createOutfit = async (req, res) => {
  const { name, clothingItems } = req.body;
  try {
    const newOutfit = new Outfit({
      name,
      clothingItems,
      userId: req.user.id
    });

    await newOutfit.save();
    res.status(201).json(newOutfit);
  } catch (err) {
    console.error('Create outfit error:', err);
    res.status(500).json({ message: 'Create failed' });
  }
};

export const toggleOutfitVisibility = async (req, res) => {
  const { outfitId, isPublic } = req.body;
  try {
    const outfit = await Outfit.findById(outfitId);
    if (!outfit) return res.status(404).json({ message: 'Outfit not found' });

    outfit.isPublic = isPublic;
    await outfit.save();
    res.json(outfit);
  } catch (err) {
    console.error('Toggle error:', err);
    res.status(500).json({ message: 'Toggle failed' });
  }
};

export const getPublicOutfits = async (req, res) => {
  try {
    const outfits = await Outfit.find({ isPublic: true }).populate('clothingItems');
    res.json(outfits);
  } catch (err) {
    console.error('Get public outfits error:', err);
    res.status(500).json({ message: 'Fetch failed' });
  }
};

export const deletePublicOutfit = async (req, res) => {
  const { outfitId } = req.params;
  try {
    const outfit = await Outfit.findById(outfitId);
    if (!outfit) return res.status(404).json({ message: 'Outfit not found' });

    await Outfit.deleteOne({ _id: outfitId });
    res.json({ message: 'Outfit deleted' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ message: 'Delete failed' });
  }
};
