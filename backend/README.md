# Misori Backend API

A separate Express.js backend for handling Misori's contact messages and MongoDB integration.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Environment File
```bash
cp .env.example .env.local
```

### 3. Configure MongoDB
Add your MongoDB Atlas URI to `.env.local`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/misori?retryWrites=true&w=majority
```

### 4. Start Development Server
```bash
npm run dev
```

✅ Server runs on `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run compiled production build
- `npm run lint` - Run ESLint

## Project Structure

```
backend/
├── src/
│   ├── index.ts                 # Express app entry point
│   ├── config/
│   │   └── database.ts         # MongoDB connection manager
│   ├── models/
│   │   └── Message.ts          # Message MongoDB schema
│   └── routes/
│       └── messages.ts         # Message API routes
├── dist/                        # Compiled JavaScript (production)
├── package.json
├── tsconfig.json
└── .env.local                  # Environment variables (not committed)
```

## API Endpoints

### Health Check
- `GET /health` - Check if server is running

### Messages
- `POST /api/messages` - Create a new message
- `GET /api/messages` - Get all messages
- `GET /api/messages/:id` - Get a single message
- `DELETE /api/messages/:id` - Delete a message

## Configuration

### Environment Variables
```
# MongoDB Connection (Required)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/misori?retryWrites=true&w=majority

# Server Port (Optional, defaults to 5000)
PORT=5000

# Frontend URL for CORS (Optional, defaults to http://localhost:3000)
FRONTEND_URL=http://localhost:3000
```

## MongoDB Setup

See [MONGODB_SETUP.md](../MONGODB_SETUP.md) in the root directory for detailed MongoDB Atlas setup instructions.

## Communication with Frontend

The frontend (Next.js) calls this backend API at:
```
http://localhost:5000/api/messages
```

**Frontend sends:**
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "phone": "+254703615836",
  "subject": "Subject Line",
  "message": "Message content"
}
```

**Backend responds with:**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": { ... }
}
```

## Running Both Frontend & Backend

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Error Handling

The API returns appropriate HTTP status codes:
- `201` - Message created successfully
- `400` - Bad request (validation error)
- `404` - Resource not found
- `500` - Server error

Example error response:
```json
{
  "success": false,
  "error": "Please provide a valid email"
}
```

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Platforms
- **Railway**: Push to GitHub, connect repository
- **Render**: Use their native Node.js deployment
- **Heroku**: Use Procfile: `web: npm start`
- **DigitalOcean App Platform**: Connect GitHub, specify start command

## Future Enhancements

- [ ] Add authentication/authorization
- [ ] Implement email notifications
- [ ] Add rate limiting
- [ ] Add request validation middleware
- [ ] Implement pagination for GET /api/messages
- [ ] Add search/filter functionality
- [ ] Add admin dashboard
- [ ] Implement message status tracking

## Troubleshooting

### "MONGODB_URI is not defined"
- Ensure `.env.local` exists in the backend folder
- Verify MONGODB_URI is set correctly
- Restart the server

### "Port 5000 already in use"
```bash
# Change PORT in .env.local or kill the process
PORT=5001 npm run dev
```

### "Connection timeout"
- Check MongoDB connection string
- Verify IP is whitelisted in MongoDB Atlas
- Ensure internet connection is stable

## License

MIT
