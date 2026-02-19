import { Router, Request, Response } from 'express';
import dbConnect from '../config/database';
import Message from '../models/Message';

const router = Router();

// POST - Create a new message
router.post('/messages', async (req: Request, res: Response) => {
  try {
    const body = req.body;
    
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
      });
    }

    // Connect to MongoDB
    await dbConnect();

    // Create and save message
    const newMessage = await Message.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: newMessage,
    });
  } catch (error: any) {
    console.error('Error saving message:', error);
    
    // Handle validation errors from mongoose
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors)
        .map((err: any) => err.message)
        .join(', ');
      return res.status(400).json({
        success: false,
        error: messages,
      });
    }

    return res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again.',
    });
  }
});

// GET - Retrieve all messages
router.get('/messages', async (req: Request, res: Response) => {
  try {
    await dbConnect();
    
    const messages = await Message.find().sort({ createdAt: -1 });
    
    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    console.error('Error retrieving messages:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to retrieve messages',
    });
  }
});

// GET - Retrieve a single message by ID
router.get('/messages/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    await dbConnect();
    
    const message = await Message.findById(id);
    
    if (!message) {
      return res.status(404).json({
        success: false,
        error: 'Message not found',
      });
    }
    
    return res.status(200).json({
      success: true,
      data: message,
    });
  } catch (error) {
    console.error('Error retrieving message:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to retrieve message',
    });
  }
});

// DELETE - Delete a message
router.delete('/messages/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    await dbConnect();
    
    const message = await Message.findByIdAndDelete(id);
    
    if (!message) {
      return res.status(404).json({
        success: false,
        error: 'Message not found',
      });
    }
    
    return res.status(200).json({
      success: true,
      message: 'Message deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting message:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to delete message',
    });
  }
});

export default router;
