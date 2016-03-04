import mongoose from 'mongoose';
import Profile from './schemas/Profile';

export default mongoose.model('Profile', new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now, required: true  },
  updatedAt: { type: Date, default: Date.now, required: true  },
  isAuthor: { type: Boolean, default: false, required: true  },
  value: Profile,
}));