import "dotenv/config";
import mongoose from "mongoose";

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI ||
    "mongodb://root:example@localhost:27017/glassesStore?authSource=admin"
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
