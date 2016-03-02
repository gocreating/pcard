import mongoose from 'mongoose';

export default mongoose.model('Profile', new mongoose.Schema({
  basic: {
    name: { type: String, required: true },
    email: [String],
  },
  addition: {
    ip: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
}));