# 🚀 Complete Setup Guide - Getting Everything Working

## Step 1: Fix Your MongoDB Connection String

### A. Get Your Connection String from MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas
2. Login to your account
3. Click on "Clusters" (left sidebar)
4. Click the "Connect" button on your cluster
5. Choose "Drivers" option
6. Copy the connection string (it will look like this):
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### B. Update Your Backend .env.local

1. Open `backend/.env.local` file
2. Replace the entire MongoDB URI with your copied string
3. **Important:** At the end, add `/misori?retryWrites=true&w=majority` to specify the database name

**Example (with fake credentials):**
```
MONGODB_URI=mongodb+srv://johnsmith:MySecurePassword123@cluster0.a1b2c.mongodb.net/misori?retryWrites=true&w=majority
PORT=5000
FRONTEND_URL=http://localhost:3000
```

### C. Create Frontend .env.local

1. Make sure you have `frontend/.env.local` in your root directory (or project root)
2. It should contain:
   ```
   NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
   ```

## Step 2: Install Dependencies (if needed)

### Backend Dependencies
```bash
cd backend
npm install
```

### Frontend Dependencies
```bash
cd ..
npm install
```

Both should already be installed ✅, but run these if you get "module not found" errors.

## Step 3: Test MongoDB Connection

Run this to verify your MongoDB URI is correct:

```bash
cd backend
npm run dev
```

**✅ Success looks like:**
```
✅ Server is running on http://localhost:5000
📝 Frontend URL: http://localhost:3000
```

**❌ If you get an error:**
- Check your MONGODB_URI in `backend/.env.local`
- Verify credentials (username/password)
- Make sure your IP is whitelisted in MongoDB Atlas Network Access
- Ensure you're connected to the internet

Press `Ctrl+C` to stop the server once you've confirmed it works.

## Step 4: Run the Complete Project

### Terminal 1: Start Backend Server

```bash
cd backend
npm run dev
```

**Expected output:**
```
✅ Server is running on http://localhost:5000
📝 Frontend URL: http://localhost:3000
```

**Keep this terminal open!**

### Terminal 2: Start Frontend Server

```bash
# Open a new terminal/PowerShell
npm run dev
```

**Expected output:**
```
▲ Next.js 16.1.6
- Local:        http://localhost:3000
```

**Keep this terminal open too!**

## Step 5: Test the Application

1. Open your browser and go to: http://localhost:3000
2. Click "Contact" in the navigation menu
3. Fill out the contact form:
   - Name: Test Name
   - Email: test@example.com
   - Phone: +254703615836
   - Subject: Test Message
   - Message: This is a test
4. Click "Send Message"
5. You should see: ✓ "Thank you! Your message has been sent successfully"

## Step 6: Verify in MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas
2. Click on "Clusters"
3. Click on your cluster name
4. Click "Browse Collections"
5. Look for "misori" → "messages" 
6. You should see your test message there! ✅

## ✅ Quick Checklist

- [ ] Got MongoDB connection string from Atlas
- [ ] Updated `backend/.env.local` with your connection string
- [ ] Created `frontend/.env.local` with `NEXT_PUBLIC_BACKEND_URL=http://localhost:5000`
- [ ] Run `npm install` in backend folder
- [ ] Started backend with `npm run dev` (Terminal 1)
- [ ] Started frontend with `npm run dev` (Terminal 2)
- [ ] Tested contact form at http://localhost:3000/contact
- [ ] Verified message appears in MongoDB Atlas

## 🆘 Troubleshooting

### Error: "MONGODB_URI is not defined"
**Solution:** 
- Make sure `backend/.env.local` exists (not .env.example)
- Restart the backend server with Ctrl+C then `npm run dev`

### Error: "connect ECONNREFUSED"
**Solution:**
- Your MongoDB URI might be wrong
- Check if your IP is whitelisted in MongoDB Atlas
- Try connecting with MongoDB Compass to test the URI

### Error: "authentication failed"
**Solution:**
- Double-check username and password in your URI
- Make sure special characters in password are URL-encoded
- If password contains `@`, change it to `%40`
- Example: password `Pass@word` → `Pass%40word`

### Frontend shows "Cannot reach backend"
**Solution:**
- Make sure backend is running on port 5000 (Terminal 1)
- Check `frontend/.env.local` has `NEXT_PUBLIC_BACKEND_URL=http://localhost:5000`
- Restart frontend after changing .env files

### Port 5000 is already in use
**Solution:**
```bash
# Find what's using port 5000
netstat -ano | findstr :5000

# Kill the process (replace XXXX with the PID)
taskkill /PID XXXX /F

# Or change PORT in backend/.env.local to 5001
# Then update frontend .env to match
```

### "Cannot GET /api/messages"
**Solution:**
- Make sure backend is running
- Check that frontend is calling the correct backend URL
- Verify both servers are on the correct ports (5000 and 3000)

## 📝 File Locations to Verify

Make sure these files exist and are configured:

```
✅ backend/.env.local
   MONGODB_URI=mongodb+srv://...
   PORT=5000
   FRONTEND_URL=http://localhost:3000

✅ .env.local (or frontend/.env.local)
   NEXT_PUBLIC_BACKEND_URL=http://localhost:5000

✅ backend/src/config/database.ts (fixed ✅)
✅ backend/src/routes/messages.ts
✅ backend/src/index.ts
✅ src/app/contact/page.tsx (updated to call backend)
```

## 🎉 Success!

Once everything is working:
- Frontend is accessible at http://localhost:3000
- Backend API is running at http://localhost:5000
- Contact form submits to backend
- Messages are saved to MongoDB Atlas
- You can view all messages in MongoDB Atlas dashboard

---

**Next Steps After Setup:**
1. Add more fields to the contact form if needed
2. Add email notifications when messages arrive
3. Create an admin dashboard to view all messages
4. Deploy to production (Vercel for frontend, Railway/Render for backend)
