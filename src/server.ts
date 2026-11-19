import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth';
import taskRoute from './routes/task';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary'
import "./config/passport"
import { authenticate } from './middleware/middleware';
import rateLimit from 'express-rate-limit';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const uploadDir = path.join(process.cwd(), "public", "uploads");
const allowedOrigin = process.env.CLIENT_URL?.replace(/\/$/, "");

const appLimitter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many requests, please try again after 15 minutes"
  }
})

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

console.log(allowedOrigin)
app.use(express.json());

app.use("/uploads",
  express.static(uploadDir)
)
app.use('/auth', appLimitter, authRoute);
app.use('/task', appLimitter, authenticate, taskRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});