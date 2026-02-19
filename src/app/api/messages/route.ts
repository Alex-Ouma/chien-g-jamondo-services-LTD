import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Message from '@/models/Message';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
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

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully',
        data: newMessage,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error saving message:', error);
    
    // Handle validation errors from mongoose
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors)
        .map((err: any) => err.message)
        .join(', ');
      return NextResponse.json(
        { error: messages },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve messages (admin use)
export async function GET(request: NextRequest) {
  try {
    // You can add authentication here later
    await dbConnect();
    
    const messages = await Message.find().sort({ createdAt: -1 });
    
    return NextResponse.json(
      {
        success: true,
        count: messages.length,
        data: messages,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error retrieving messages:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve messages' },
      { status: 500 }
    );
  }
}
