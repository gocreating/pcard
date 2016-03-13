import mongoose from 'mongoose';

export default new mongoose.Schema({
  value: {
    type: String,
    enum: [
      'CHINESE',
      'ENGLISH',
    ],
  },
}, {
  _id: false,
});