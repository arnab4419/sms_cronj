const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
console.log('in check curriculum schema');
const StudentCurriculumSchema = new Schema({
  curriculumId: { type: Number },
  curriculumName: { type: String },
  curriculumId: { type: String },
  duration: { type: String }
});

console.log('curriculum model');
// the schema is useless so far
// we need to create a model using it
const StudentCurriculum = mongoose.model(
  'student_Curriculum',
  StudentCurriculumSchema
);
// make this available to our users in our Node applications
module.exports = StudentCurriculum;
