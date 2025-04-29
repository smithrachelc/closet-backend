import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const generateToken = (id, email, role = 'user') => {
  return jwt.sign({ id, email, role }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    const token = generateToken(newUser._id, newUser.email, newUser.role);

    res.status(201).json({
      _id: newUser._id,
      email: newUser.email,
      token
    });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
