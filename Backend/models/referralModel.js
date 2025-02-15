const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  referredBy: { type: String, required: true },
  message: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Referral', referralSchema);
