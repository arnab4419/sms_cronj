const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
const addStudentBlogSchema = new Schema({
  addBlog: { type: Number, required: true }
});

// the schema is useless so far
// we need to create a model using it
const StudentBlogs = mongoose.model('student_Blogs', addStudentBlogSchema);
// make this available to our users in our Node applications
module.exports = StudentBlogs;
