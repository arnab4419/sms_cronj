const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema(
  {
    monday: { type: Number },
    remainingLeaves: { type: Number },
    takenLeaves: { type: Number }
  },
  { strict: false }
);

const StudentLeaves = mongoose.model('student_Schedule', ScheduleSchema);

module.exports = StudentLeaves;
