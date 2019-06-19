const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
const StudentCreditsSchema = new Schema({
  subjectCode: { type: Number },
  subjectName: { type: String },
  credit: { type: Number },
  grade: { type: String }
});

// the schema is useless so far
// we need to create a model using it
const StudentCredits = mongoose.model('student_Credits', StudentCreditsSchema);
// make this available to our users in our Node applications
module.exports = StudentCredits;
