# 🔑 MongoDB URI Setup - What You Need to Do

## Current Issue
Your `backend/.env.local` has a **placeholder** that needs to be replaced:

```
❌ MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/misori?retryWrites=true&w=majority
```

This won't work because `username` and `password` are just examples!

---

## How to Get Your Real MongoDB URI

### Step 1: Open MongoDB Atlas
Go to https://www.mongodb.com/cloud/atlas and log in

### Step 2: Get Your Connection String
1. Click **"Clusters"** on the left side
2. Find your cluster, click **"Connect"** button
3. Select **"Drivers"** option
4. Copy the connection string that looks like:
```
mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

---

## How to Update backend/.env.local

### Option 1: Edit in VS Code (Recommended)
1. Open `backend/.env.local` in VS Code
2. Find this line:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/misori?retryWrites=true&w=majority
```

3. Replace it with your actual connection string from MongoDB Atlas

**Important:** Change the database name at the end:
- From: `...mongodb.net/?retryWrites...`
- To: `...mongodb.net/misori?retryWrites...`
  (add `/misori` before the `?`)

### Example (with FAKE credentials):
```
MONGODB_URI=mongodb+srv://john_smith:SecurePassword123@cluster0.a1b2c3d.mongodb.net/misori?retryWrites=true&w=majority
                         ↑ username           ↑ password      ↑ cluster name
```

---

## Special Characters in Password?

If your MongoDB password contains special characters like `@`, `#`, `%`, you need to **URL-encode** them:

| Character | URL-Encoded |
|-----------|------------|
| @ | %40 |
| # | %23 |
| % | %25 |
| : | %3A |
| / | %2F |

**Example:**
- Password: `MyPass@word#2024`
- Encoded: `MyPass%40word%232024`

Paste this in the URI:
```
MONGODB_URI=mongodb+srv://username:MyPass%40word%232024@cluster.mongodb.net/misori?retryWrites=true&w=majority
```

---

## Step-by-Step: What Your URI Should Look Like

```
mongodb+srv://YOUR_ACTUAL_USERNAME:YOUR_ACTUAL_PASSWORD@YOUR_CLUSTER_NAME.mongodb.net/misori?retryWrites=true&w=majority
```

Examples:
```
✅ CORRECT:
MONGODB_URI=mongodb+srv://john:MyPassword@cluster0.a1b2c3.mongodb.net/misori?retryWrites=true&w=majority

❌ WRONG (placeholder, won't work):
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/misori?retryWrites=true&w=majority

❌ WRONG (missing database name):
MONGODB_URI=mongodb+srv://john:MyPassword@cluster0.a1b2c3.mongodb.net/?retryWrites=true&w=majority

✅ CORRECT (with special char encoded):
MONGODB_URI=mongodb+srv://john:Pass%40word@cluster0.a1b2c3.mongodb.net/misori?retryWrites=true&w=majority
```

---

## After You Update .env.local

1. **Save the file** (Ctrl+S)
2. **Stop the backend** (Press Ctrl+C in PowerShell)
3. **Start the backend again** (Run `npm run dev`)
4. You should see: `✅ Server is running on http://localhost:5000`

---

## Testing the Connection

If the backend starts without errors, your MongoDB URI is correct!

**Initial log:**
```
✅ Server is running on http://localhost:5000
📝 Frontend URL: http://localhost:3000
```

**When you submit a message:**
```
✅ Connected to MongoDB
```

---

## Troubleshooting

### Error: "connect ECONNREFUSED"
- Your MongoDB URI is incorrect
- Check username and password
- Make sure IP is whitelisted in MongoDB Atlas

### Error: "authentication failed"
- Username or password is wrong
- Password needs to be URL-encoded if it has special chars
- Try with MongoDB Compass to test

### Error: "no host in connection string"
- Your connection string format is wrong
- Make sure you copied the entire string

---

## Need Help Finding Your Credentials?

1. Go to https://www.mongodb.com/cloud/atlas
2. Click **"Database Access"** (left sidebar)
3. You'll see your username
4. Your password is what you set when creating the user
5. If you forgot it, you can delete the user and create a new one

---

## 🎯 Next Steps

1. ✅ Get your MongoDB URI from Atlas
2. ✅ Update `backend/.env.local` with your real credentials
3. ✅ Save the file
4. ✅ Restart backend (`npm run dev`)
5. ✅ Verify you see "Server is running" message
6. ✅ Start frontend and test!

**That's all you need to do! Your project is ready to go once you add your credentials.** 🚀
