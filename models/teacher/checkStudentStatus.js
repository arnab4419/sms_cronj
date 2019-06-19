const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
const checkStudentStatusSchema = new Schema({
  studentName: { type: String, required: true }
});

// the schema is useless so far
// we need to create a model using it
const checkStudentstatus = mongoose.model(
  'check_Student_status',
  checkStudentStatusSchema
);

// make this available to our users in our Node applications
module.exports = checkStudentstatus;
