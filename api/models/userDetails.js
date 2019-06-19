const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
const UserSchema = new Schema({
  userId: { type: String },
  password: { type: String },
  name: { type: String },
  email: { type: String },
  phoneNo: { type: Number }
});

console.log('user details model');
// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('user_details', UserSchema);

// make this available to our users in our Node applications
module.exports = User;
