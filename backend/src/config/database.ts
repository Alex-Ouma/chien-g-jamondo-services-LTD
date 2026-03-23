import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      mongoose?: CachedConnection;
    }
  }
}

const globalWithMongoose = global as typeof globalThis & { mongoose?: CachedConnection };

const cached: CachedConnection = globalWithMongoose.mongoose || { conn: null, promise: null };
if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = cached;
}

async function dbConnect() {
  // Check for MongoDB URI when connection is attempted
  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable in backend/.env.local\n' +
      'Example: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?appName=Cluster0'
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI as string, opts)
      .then((mongoose) => {
        console.log('✅ Connected to MongoDB');
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
