# Backend Structure

## Files Created

### `/src/lib/mongodb.ts`
- **Purpose**: MongoDB connection manager
- **What it does**: 
  - Manages the MongoDB connection using Mongoose
  - Implements connection pooling to reuse connections
  - Prevents multiple simultaneous connections

### `/src/models/Message.ts`
- **Purpose**: Mongoose schema for messages
- **What it does**:
  - Defines the structure of a message document
  - Validates data (email format, required fields)
  - Provides TypeScript types for message data
  - Auto-generates timestamps

### `/src/app/api/messages/route.ts`
- **Purpose**: API endpoint for handling messages
- **What it does**:
  - **POST**: Accepts new messages, validates, and saves to MongoDB
  - **GET**: Retrieves all messages (useful for admin dashboards)
  - Includes error handling and validation

### `/src/app/contact/page.tsx` (Updated)
- **Changes made**:
  - Added loading state while submitting
  - Added error state to display validation/server errors
  - Connected to the `/api/messages` endpoint
  - Improved submit button with loading feedback
  - Added error message display

### `.env.local.example`
- **Purpose**: Template for environment variables
- **What it does**: Shows you what variables you need to create in `.env.local`

## How It Works

### Message Submission Flow:
1. User fills out contact form → `ContactPage` component
2. User clicks "Send Message"
3. Form data is sent to `POST /api/messages`
4. API validates the data
5. API connects to MongoDB using `dbConnect()`
6. Message document is created using the `Message` model
7. Mongoose saves it to the database
8. API returns success/error response
9. Contact form shows success/error message to user

## Dependencies Added

### mongoose (`^8.x`)
- MongoDB object modeling library
- Provides schema validation and type safety
- Connection pooling and management

### dotenv (`^16.x`)
- Loads environment variables from `.env.local`
- Keeps sensitive data (like DB credentials) out of code

## Environment Variables

You need to create a `.env.local` file with:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```

**Never commit `.env.local` to Git!** It's already in `.gitignore`.

## Database Schema

Messages are stored with this structure:
```typescript
{
  _id: ObjectId,
  name: string,
  email: string (validated email format),
  phone: string,
  subject: string,
  message: string,
  createdAt: Date (auto-generated)
}
```

All fields are required and validated before saving.

## Error Handling

The API handles these scenarios:
- ✅ Missing required fields → 400 Bad Request
- ✅ Invalid email format → 400 Bad Request
- ✅ Database connection errors → 500 Internal Server Error
- ✅ Duplicate entries (if needed) → Mongoose validation
- ✅ Server errors → User-friendly messages on frontend

## Next Steps

1. **Setup MongoDB Atlas** (see `MONGODB_SETUP.md`)
2. **Create `.env.local`** with your MongoDB URI
3. **Restart the development server**
4. **Test the form** at http://localhost:3000/contact
5. **View messages** in MongoDB Atlas Dashboard

## Optional Enhancements

You can add these features later:
- Authentication for viewing all messages (GET endpoint)
- Email notifications when a message is received
- Message status (read/unread)
- Rate limiting to prevent spam
- File uploads
- Admin dashboard to manage messages
- Automated email replies

## Testing the API

Using curl:
```bash
# Create a message
curl -X POST http://localhost:3000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+254703615836",
    "subject": "Test",
    "message": "Testing the API"
  }'

# Get all messages
curl http://localhost:3000/api/messages
```

Or use an API client like Postman, Insomnia, or Thunder Client VS Code extension.
