const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
const StudentCurriculumSchema = new Schema({
  curriculumId: { type: Number },
  curriculumName: { type: String },
  curriculumId: { type: String },
  duration: { type: String }
});

// the schema is useless so far
// we need to create a model using it
const StudentCurriculum = mongoose.model(
  'student_Curriculum',
  StudentCurriculumSchema
);
// make this available to our users in our Node applications
module.exports = StudentCurriculum;
