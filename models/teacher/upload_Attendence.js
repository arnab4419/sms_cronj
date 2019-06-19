const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
const attendenceSchema = new Schema({
  branchName: { type: String },
  semester: { type: String },
  section: { type: String },
  subject: { type: String }
});

// the schema is useless so far
// we need to create a model using it
const uploadattendence = mongoose.model('upload_attendence', attendenceSchema);

// make this available to our users in our Node applications
module.exports = uploadattendence;
