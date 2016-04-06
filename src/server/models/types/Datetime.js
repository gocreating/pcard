import mongoose from 'mongoose';

export default new mongoose.Schema({
  year: {
    type: Number,
  },
  month: {
    type: Number,
  },
  day: {
    type: Number,
  },
  hour: {
    type: Number,
  },
  minute: {
    type: Number,
  },
  second: {
    type: Number,
  },
}, {
  _id: false,
});