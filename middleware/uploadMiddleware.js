import multer from 'multer';
import { storage } from '../utils/cloudinary.js'; // Use Cloudinary storage

const upload = multer({ storage });

export default upload;
