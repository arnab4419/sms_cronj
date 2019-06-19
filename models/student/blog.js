const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
console.log('Add new  student blogs schema');
const addStudentBlogSchema = new Schema({
  addBlog: { type: Number, required: true }
});

console.log('add blogs  model');
// the schema is useless so far
// we need to create a model using it
const StudentBlogs = mongoose.model('student_Blogs', addStudentBlogSchema);
// make this available to our users in our Node applications
module.exports = StudentBlogs;
