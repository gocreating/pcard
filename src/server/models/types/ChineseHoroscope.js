import mongoose from 'mongoose';

export default new mongoose.Schema({
  value: {
    type: String,
    enum: [
      'UNKNOWN',
      'RAT',
      'OX',
      'TIGER',
      'HARE',
      'DRAGON ',
      'SNAKE',
      'HORSE',
      'SHEEP',
      'MONKEY',
      'COCK',
      'DOG',
      'BOAR',
    ],
    default: 'UNKNOWN',
  },
}, {
  _id: false,
});