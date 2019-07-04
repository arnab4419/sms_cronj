const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    title: { type: String }
  },
  { strict: false }
);

const StudentBlog = mongoose.model('student_Blogs', BlogSchema);

module.exports = StudentBlog;
