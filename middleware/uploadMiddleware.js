import multer from 'multer';

// Simple memory storage — you can later save to S3, etc.
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
