import mongoose from "mongoose";

const DB_URL =
  "mongodb+srv://kasunanu900:EOpNnzNFLbmxGTBS@clusterjerome.bnel1l5.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJerome";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(DB_URL);
    isConnected = true;
    console.log("DB connected....'");
  } catch (error) {
    console.log("DB connection Error!'");
  }
}
