const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
const StudentProfileSchema = new Schema({
  rollNo: { type: Number },
  collegeName: { type: String },
  programName: { type: String },
  streamName: { type: String },
  enrollmentYear: { type: String },
  backlogs: { type: Array },
  currentPercentage: { type: Number },
  gender: { type: String },
  birthDate: { type: date },
  nationality: { type: String },
  currentAddress: { type: String },
  permenentAddress: { type: String }
});
// the schema is useless so far
// we need to create a model using it
const StudentProfile = mongoose.model('student_profile', StudentProfileSchema);

// make this available to our users in our Node applications
module.exports = StudentProfile;
