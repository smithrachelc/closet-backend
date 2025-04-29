import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'ClosetCleanup', // ✅ Your Cloudinary folder name
    allowed_formats: ['jpg', 'jpeg', 'png']
  }
});

export const upload = multer({ storage });
