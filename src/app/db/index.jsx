import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
};

const EligibleSchema = new mongoose.Schema({
  name: String,
  address: String,
});

export const Eligible =
  mongoose.models.Eligible || mongoose.model("Eligible", EligibleSchema);
