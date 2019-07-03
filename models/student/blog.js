const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
const blogSchema = new Schema({
  title: { type: String, required: true }
});

// the schema is useless so far
// we need to create a model using it
const StudentBlogs = mongoose.model('student_Blogs', blogSchema);
// make this available to our users in our Node applications
module.exports = StudentBlogs;
