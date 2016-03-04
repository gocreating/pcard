import mongoose from 'mongoose';

export default new mongoose.Schema({
  value: {
    type: String,
    enum: ['UNKNOWN', 'MALE','FEMALE'],
    default: 'UNKNOWN',
  },
});