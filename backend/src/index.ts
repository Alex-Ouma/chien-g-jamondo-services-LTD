import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from the backend folder
dotenv.config({ path: path.join(__dirname, '../.env.local') });
// Fallback to .env if .env.local doesn't exist
if (!process.env.MONGODB_URI) {
  dotenv.config({ path: path.join(__dirname, '../.env') });
}

import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import messagesRoutes from './routes/messages';

const app: Express = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', messagesRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Backend is running',
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`📝 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});

export default app;
