import mongoose from 'mongoose';

export default new mongoose.Schema({
  value: {
    type: String,
    enum: [
      'UNKNOWN',
      'A',
      'B',
      'AB',
      'O',
    ],
    default: 'UNKNOWN',
  },
}, {
  _id: false,
});