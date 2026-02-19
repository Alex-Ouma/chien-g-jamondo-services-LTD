# Quick Start Guide - Frontend & Backend Separation

## What Changed?

Your project now has separate frontend and backend:

✅ **Frontend** - Next.js (remains in root)  
✅ **Backend** - Express.js (in `/backend` folder)

## 📋 Cleanup - Remove Old Backend Files from Frontend

Since the backend is now separate, delete these files from your frontend:

```
❌ src/app/api/messages/route.ts    (old Next.js API route)
❌ src/models/Message.ts             (moved to backend/src/models/)
❌ src/lib/mongodb.ts                (moved to backend/src/config/)
❌ .env.local.example                (replaced with .env.local)
```

**How to remove in VS Code:**
1. Right-click each file above
2. Select "Delete"
3. Confirm deletion

## 🚀 Setup Commands

### Backend Setup (Do this first!)
```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Copy example environment file
cp .env.example .env.local

# Edit .env.local with your MongoDB URI
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/misori?retryWrites=true&w=majority
```

### Frontend Setup
```bash
# From project root (misori folder)

# Install dependences (should already be done)
npm install

# Create .env.local if it doesn't exist
# Add: NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

## 🏃 Running the Project

### Terminal 1 - Start Backend
```bash
cd backend
npm run dev
```
✅ Output: `✅ Server is running on http://localhost:5000`

### Terminal 2 - Start Frontend  
```bash
npm run dev
```
✅ Output: `▲ Next.js ... ready - started server on 0.0.0.0:3000`

## 🧪 Test the Integration

1. Open http://localhost:3000 in your browser
2. Go to the Contact page
3. Fill out the form and submit
4. You should see "Thank you!" message
5. Check MongoDB Atlas to verify the message was saved

## 📁 Project Structure

```
misori/
├── backend/                    ← NEW Express server
│   ├── src/
│   │   ├── index.ts
│   │   ├── config/database.ts
│   │   ├── models/Message.ts
│   │   └── routes/messages.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.local
│   └── README.md
│
├── src/                        ← Frontend (updated)
│   ├── app/
│   │   ├── contact/page.tsx   ← Updated to call backend API
│   │   ├── about/
│   │   ├── services/
│   │   └── ...
│   └── components/
│
├── package.json                ← Frontend packages
├── tsconfig.json
├── next.config.ts
├── .env.local                  ← Frontend env vars
└── PROJECT_STRUCTURE.md        ← Full documentation
```

## 🔗 How Communication Works

```
Browser (http://localhost:3000)
        ↓
    NextJS Frontend
        ↓
   Contact Form
        ↓
    fetch('http://localhost:5000/api/messages')
        ↓
    Express Backend (http://localhost:5000)
        ↓
    MongoDB Atlas ☁️
```

## 📝 Environment Variables

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

## ⚡ Common Issues

### Q: Backend won't start
**A:** Check if port 5000 is already in use
```bash
# Windows - Find what's using port 5000
netstat -ano | findstr :5000

# Mac/Linux
lsof -i :5000

# Kill the process or change PORT in .env.local
```

### Q: Frontend can't reach backend
**A:** Make sure both are running:
- Backend: http://localhost:5000
- Frontend: http://localhost:3000
- Check NEXT_PUBLIC_BACKEND_URL in frontend .env.local

### Q: MongoDB connection fails
**A:** Verify in MongoDB Atlas:
- Is your IP whitelisted?
- Is the connection string correct?
- Is the password URL-encoded?

## 📚 Next Steps

1. Read [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for full details
2. Read [backend/README.md](backend/README.md) for backend specifics
3. Read [MONGODB_SETUP.md](MONGODB_SETUP.md) for MongoDB setup
4. Consider adding authentication
5. Plan deployment strategy

## 🎉 You're All Set!

Your frontend and backend are now properly separated with clear responsibilities:
- **Frontend**: UI/UX, form submission, client logic
- **Backend**: API, database, business logic

This makes your project easier to:
- ✅ Develop independently
- ✅ Scale separately  
- ✅ Deploy to different platforms
- ✅ Maintain and update

Happy coding! 🚀
