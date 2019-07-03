const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
const UserSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String }
  },
  {
    timestamps: true
  }
);

// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('user_details', UserSchema);

// make this available to our users in our Node applications
module.exports = User;
