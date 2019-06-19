const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
const StudentScheduleSchema = new Schema({
  monday: { type: Number },
  remainingLeaves: { type: Number },
  takenLeaves: { type: Number }
});

// the schema is useless so far
// we need to create a model using it
const StudentLeaves = mongoose.model('student_Schedule', StudentLeavesSchema);

// make this available to our users in our Node applications
module.exports = StudentLeaves;
