import mongoose from 'mongoose';

export default new mongoose.Schema({
  first: String,
  last: String,
}, {
  _id: false,
});