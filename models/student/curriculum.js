const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentCurriculumSchema = new Schema(
  {
    curriculumId: { type: Number },
    curriculumName: { type: String },
    curriculumId: { type: String },
    duration: { type: String }
  },
  { strict: false }
);

const StudentCurriculum = mongoose.model(
  'student_Curriculum',
  StudentCurriculumSchema
);

module.exports = StudentCurriculum;
