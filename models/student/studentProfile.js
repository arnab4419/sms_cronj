const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentProfileSchema = new Schema(
  {
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
    permenentAddress: { type: String },
    attendanceFiles: { type: String },
    resultFiles: { type: String }
  },
  {
    strict: false
  }
);

const StudentProfile = mongoose.model('student_profile', StudentProfileSchema);

module.exports = StudentProfile;
