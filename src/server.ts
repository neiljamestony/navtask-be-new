import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth';
import taskRoute from './routes/task';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary'
// import "./config/passport"
import { authenticate } from './middleware/middleware';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const uploadDir = path.join(process.cwd(), "public", "uploads");
const allowedOrigin = process.env.CLIENT_URL?.replace(/\/$/, "");

app.use(cookieParser());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(cors({
  origin: allowedOrigin,
  credentials: true
}));
app.use(express.json());

app.use("/uploads",
   express.static(uploadDir)
)
app.use('/auth', authRoute);
app.use('/task', authenticate, taskRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});