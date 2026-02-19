# Misori Project - Frontend & Backend Separation

## Project Structure

```
misori/
├── frontend/                  # Next.js Frontend Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── globals.css
│   │   │   ├── about/
│   │   │   ├── contact/        # Contact form (calls backend API)
│   │   │   └── services/
│   │   └── components/
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   └── .env.local
│
└── backend/                   # Express Backend API
    ├── src/
    │   ├── index.ts           # Express server entry point
    │   ├── config/
    │   │   └── database.ts    # MongoDB connection
    │   ├── models/
    │   │   └── Message.ts     # Message schema
    │   └── routes/
    │       └── messages.ts    # Message API endpoints
    ├── package.json
    ├── tsconfig.json
    ├── .env.example
    └── .env.local
```

## Running the Project

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account with connection string

### Setup Instructions

#### 1. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Add your MongoDB URI and configure
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/misori?retryWrites=true&w=majority
# PORT=5000
# FRONTEND_URL=http://localhost:3000
```

**Start the backend:**
```bash
npm run dev
```
✅ Backend runs on `http://localhost:5000`

#### 2. Frontend Setup

```bash
# From project root
cd /frontend  # or stay in root if frontend is here

# Install dependencies
npm install

# Create .env.local file
# NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

**Start the frontend:**
```bash
npm run dev
```
✅ Frontend runs on `http://localhost:3000`

### Development Workflow

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Output: ✅ Server is running on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
npm run dev
# Output: ▲ Next.js ... ready - started server on 0.0.0.0:3000
```

Both servers must be running for the contact form to work!

## Backend API Documentation

### Base URL
`http://localhost:5000/api`

### Endpoints

#### POST /api/messages
Create a new message

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+254703615836",
  "subject": "General Inquiry",
  "message": "Hello, I have a question"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+254703615836",
    "subject": "General Inquiry",
    "message": "Hello, I have a question",
    "createdAt": "2024-02-19T10:30:00Z"
  }
}
```

#### GET /api/messages
Retrieve all messages

**Response (200):**
```json
{
  "success": true,
  "count": 5,
  "data": [...]
}
```

#### GET /api/messages/:id
Retrieve a single message

#### DELETE /api/messages/:id
Delete a message

#### GET /health
Health check endpoint

## Environment Variables

### Backend (.env.local)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/misori?retryWrites=true&w=majority
PORT=5000
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

**Note:** The `NEXT_PUBLIC_` prefix makes the variable accessible in the browser.

## Build & Deployment

### Backend
```bash
cd backend
npm run build        # Compiles TypeScript to JavaScript
npm start           # Runs the compiled app
```

### Frontend
```bash
npm run build
npm start
```

## Troubleshooting

### Backend won't connect to MongoDB
- ✓ Check your MONGODB_URI in `.env.local`
- ✓ Verify IP is whitelisted in MongoDB Atlas
- ✓ Ensure username and password are correct

### Frontend can't reach backend
- ✓ Backend must be running on port 5000
- ✓ Check NEXT_PUBLIC_BACKEND_URL in frontend `.env.local`
- ✓ Verify CORS is configured correctly in backend

### "Port 5000 already in use"
```bash
# Kill the process using port 5000
# Windows: netstat -ano | findstr :5000, then taskkill /PID <PID> /F
# Mac/Linux: lsof -i :5000, then kill -9 <PID>

# Or change PORT in backend/.env.local and update NEXT_PUBLIC_BACKEND_URL
```

## Next Steps

- Add authentication to the GET /api/messages endpoint
- Implement email notifications on message submission
- Add rate limiting to prevent spam
- Deploy backend to a cloud platform (Railway, Render, Heroku)
- Deploy frontend to Vercel or similar platform
- Set up CI/CD pipeline with GitHub Actions
