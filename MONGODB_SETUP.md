# MongoDB Atlas Setup Guide

## Step 1: Create a MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Sign Up" and create a new account
3. Verify your email address

## Step 2: Create a Cluster
1. Once logged in, click "Create a Project"
2. Name your project (e.g., "Misori")
3. Click "Create Project"
4. On the new page, click "+ Create" to create a deployment
5. Select "M0 FREE" tier (perfect for development)
6. Choose your cloud provider and region
7. Click "Create Deployment"
8. Wait for the cluster to initialize (2-3 minutes)

## Step 3: Create Database User
1. In the left sidebar, click "Database Access" under "Security"
2. Click "+ Add New Database User"
3. Select "Password" authentication method
4. Enter username and password (save these securely!)
5. Keep default roles or add what you need
6. Click "Add User"

## Step 4: Whitelist Your IP Address
1. In the left sidebar, click "Network Access" under "Security"
2. Click "+ Add IP Address"
3. For development, you can use "0.0.0.0/0" (allows all IPs - not recommended for production)
4. Or add your specific IP address
5. Click "Confirm"

## Step 5: Get Your Connection String
1. Go to "Clusters" on the left sidebar
2. Click the "Connect" button on your cluster
3. Select "Drivers"
4. Copy the connection string shown (it looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

## Step 6: Create Your .env.local File
1. In your project root, create a file named `.env.local`
2. Add this line with your connection string:
```
cd backend
npm run devmongodb+srv://username:password@your_cluster.mongodb.net/misori?retryWrites=true&w=majority
```
Replace:
- `username` - Your database user
- `password` - Your database password
- `your_cluster` - Your cluster name (found in the connection string)
- `misori` - Database name (can be any name you want)

## Step 7: Test the Connection
1. Restart your Next.js development server
2. Go to http://localhost:3000/contact
3. Try submitting a test message
4. Check MongoDB Atlas to see if the message appears in the collection

## Accessing Your Messages in MongoDB Atlas
1. Go to "Clusters" > Your Cluster
2. Click "Browse Collections"
3. You'll see your "misori" database with a "messages" collection
4. Click on it to view all submitted messages

## API Endpoints
You now have two endpoints available:

### POST /api/messages
**Send a new message**
```bash
curl -X POST http://localhost:3000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+254703615836",
    "subject": "General Inquiry",
    "message": "Hello, I have a question..."
  }'
```

### GET /api/messages
**Retrieve all messages** (admin endpoint)
```bash
curl http://localhost:3000/api/messages
```

## Troubleshooting

### "MONGODB_URI is not defined"
- Ensure `.env.local` file exists in your project root
- Restart the development server with Ctrl+C and `npm run dev`

### "Authentication failed" Error
- Double-check your MongoDB username and password
- Make sure your IP is whitelisted in Network Access
- Verify the connection string has valid format

### Port already in use
- Kill the existing process or use a different port: `npm run dev -- -p 3001`

## Security Notes
- Never commit `.env.local` to git (it's in .gitignore)
- In production, use MongoDB Atlas IP Whitelist with specific IPs
- Use strong passwords for your database user
- Consider using environment variables for different environments
