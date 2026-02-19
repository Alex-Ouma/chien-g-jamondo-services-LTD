# 📊 Visual Setup Guide

## What You Need to Do (In Order)

### 1️⃣ MongoDB Account & Connection String

**Status:** Your MongoDB credentials are needed

```
Step 1: Go to https://www.mongodb.com/cloud/atlas
Step 2: Login with your account
Step 3: Click "Clusters" on the left
Step 4: On your cluster, click "Connect"
Step 5: Choose "Drivers" (Node.js section)
Step 6: Copy the CONNECTION STRING
```

**What it looks like:**
```
mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

---

### 2️⃣ Update Backend Configuration

**File to edit:** `backend/.env.local`

**Replace this line:**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/misori?retryWrites=true&w=majority
```

**With your actual connection string:** (at the end, change `/?retryWrites` to `/misori?retryWrites`)
```
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.a1b2c.mongodb.net/misori?retryWrites=true&w=majority
                          ↑                    ↑
                    Your credentials    Your cluster
```

**Keep these lines unchanged:**
```
PORT=5000
FRONTEND_URL=http://localhost:3000
```

---

### 3️⃣ Verify Frontend Environment

**File:** `.env.local` (in project root)

**Should contain:**
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

✅ This file has been created for you!

---

### 4️⃣ Start the Backend

**In PowerShell:**
```bash
cd backend
npm run dev
```

**Expected Output (✅ Success):**
```
✅ Server is running on http://localhost:5000
📝 Frontend URL: http://localhost:3000
```

**If it doesn't show this, it's trying to connect to MongoDB. Check:**
- ✓ MongoDB URI is correct in `backend/.env.local`
- ✓ Your IP is whitelisted in MongoDB Atlas
- ✓ Username/password are correct
- ✓ Database name is specified (`/misori?...`)

---

### 5️⃣ Start the Frontend (New Terminal)

**Open NEW PowerShell window and run:**
```bash
# Make sure you're in the root (misori folder)
npm run dev
```

**Expected Output:**
```
▲ Next.js 16.1.6
- Local:        http://localhost:3000
```

---

### 6️⃣ Test Everything

**Open browser:** http://localhost:3000

**Navigate to:** Contact page → Fill form → Submit

**Expected:** ✓ Success message appears

**Verify in MongoDB Atlas:**
1. Go to your cluster
2. Click "Browse Collections"
3. Find `misori` → `messages`
4. Your message should be there! ✅

---

## 🔧 File Structure After Setup

```
misori/
├── backend/
│   ├── .env.local              ← EDIT THIS (add MongoDB URI)
│   ├── src/
│   │   ├── config/database.ts  ← FIXED ✅
│   │   ├── models/Message.ts
│   │   ├── routes/messages.ts
│   │   └── index.ts
│   ├── package.json
│   └── node_modules/           ← Already installed ✅
│
├── .env.local                  ← CREATED ✅
│   (NEXT_PUBLIC_BACKEND_URL=http://localhost:5000)
│
├── src/
│   └── app/contact/page.tsx    ← UPDATED ✅
│
└── package.json
```

---

## ⚡ Command Reference

### Backend Commands
```bash
cd backend
npm run dev          # Start development (with watch/reload)
npm run build        # Compile to JavaScript
npm start            # Run production build
npm run lint         # Check code quality
```

### Frontend Commands
```bash
npm run dev          # Start Next.js dev server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check code quality
```

---

## 🎯 MongoDB Atlas Checklist

- [ ] Account created
- [ ] Project created
- [ ] Cluster created (M0 FREE tier)
- [ ] Database user created with password
- [ ] IP address whitelisted (0.0.0.0/0 for dev)
- [ ] Connection string copied
- [ ] Connection string has database name `/misori?retryWrites...`

---

## 🚨 Common Issues & Fixes

### Issue: "MONGODB_URI is not defined"
```
Fix: Make sure backend/.env.local has MONGODB_URI=...
     Restart backend with Ctrl+C then npm run dev
```

### Issue: "connection ECONNREFUSED"
```
Fix: MongoDB URI is likely wrong
     Check IP whitelist in MongoDB Atlas
     Test URI with MongoDB Compass
```

### Issue: "authentication failed"
```
Fix: Username/password incorrect
     If password has special chars, URL-encode them
     @ → %40, # → %23, etc.
```

### Issue: "Port 5000 already in use"
```
Fix: Find process: netstat -ano | findstr :5000
     Kill it: taskkill /PID XXXX /F
     Or change PORT in .env.local to 5001
```

### Issue: Frontend can't reach backend
```
Fix: Verify backend is running on :5000
     Check NEXT_PUBLIC_BACKEND_URL in frontend .env.local
     Restart frontend after changing .env
```

---

## 🆘 Getting Help

### To Debug Connection Issues

**From backend folder:**
```bash
# This will show if TypeScript compiles correctly
npm run build

# If build succeeds but npm run dev fails, it's environment variable issue
```

**To test MongoDB directly:**
1. Download MongoDB Compass
2. Paste your connection string
3. Try to connect
4. If Compass works, backend should work

---

## ✅ Success Indicators

You'll know everything is working when:

1. ✅ `npm run dev` in backend shows "Server is running"
2. ✅ `npm run dev` in frontend shows "ready - started server"
3. ✅ You can visit http://localhost:3000
4. ✅ Contact form at /contact accepts input
5. ✅ Submitted form shows success message
6. ✅ Message appears in MongoDB Atlas in 5-10 seconds

---

**You're almost there! Just need to:**
1. Get your MongoDB connection string
2. Update `backend/.env.local`
3. Start both servers
4. Test the form

Good luck! 🚀
