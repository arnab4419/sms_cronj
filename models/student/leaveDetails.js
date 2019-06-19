const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
const StudentLeavesSchema = new Schema({
  totalLeaves: { type: Number },
  remainingLeaves: { type: Number },
  takenLeaves: { type: Number },
  leaveDetails: [
    {
      dateOfLeaves: { type: Date },
      reasonsOfLeaves: { type: String, required: true }
    }
  ]
});

// the schema is useless so far
// we need to create a model using it
const StudentLeaves = mongoose.model('student_Leaves', StudentLeavesSchema);

// make this available to our users in our Node applications
module.exports = StudentLeaves;
