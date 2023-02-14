import mongoose from "mongoose";

export async function initMongoose() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  return await mongoose.connect("mongodb+srv://admin:admin@cluster0.vqtcpm6.mongodb.net/?retryWrites=true&w=majority");
}