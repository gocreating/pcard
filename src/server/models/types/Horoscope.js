import mongoose from 'mongoose';

export default new mongoose.Schema({
  value: {
    type: String,
    enum: [
      'UNKNOWN',
      'CAPRICORN',
      'AQUARIUS',
      'PISCES',
      'ARIES',
      'TAURUS',
      'GEMINI',
      'CANCER',
      'LEO',
      'VIRGO',
      'LIBRA',
      'SCORPIO',
      'SAGITTARIUS',
    ],
    default: 'UNKNOWN',
  },
}, {
  _id: false,
});