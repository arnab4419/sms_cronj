const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentLeavesSchema = new Schema(
  {
    totalLeaves: { type: Number },
    remainingLeaves: { type: Number },
    takenLeaves: { type: Number },
    leaveDetails: [
      {
        dateOfLeaves: { type: Date },
        leavesReason: { type: String, required: true }
      }
    ]
  },
  {
    strict: false
  }
);

const StudentLeaves = mongoose.model('student_Leaves', StudentLeavesSchema);

module.exports = StudentLeaves;
