const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentCreditsSchema = new Schema(
  {
    subjectCode: { type: Number },
    subjectName: { type: String },
    credit: { type: Number },
    grade: { type: String }
  },
  { strict: false }
);

const StudentCredits = mongoose.model('student_Credits', StudentCreditsSchema);
module.exports = StudentCredits;
