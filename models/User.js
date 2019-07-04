const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: Number }
}, {strict: false, timestamps: true});

const User = mongoose.model('user_details', UserSchema);

module.exports = User;
