const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
const checkSubjectSchema = new Schema({
  subjectName: { type: String }
});

// the schema is useless so far
// we need to create a model using it
const checkSubject = mongoose.model('check_Subject', checkSubjectSchema);

// make this available to our users in our Node applications
module.exports = checkSubject;
