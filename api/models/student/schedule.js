const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
console.log('in check leaves schema');
const StudentScheduleSchema = new Schema({
  monday: { type: Number },
  remainingLeaves: { type: Number },
  takenLeaves: { type: Number }
});
/*

leaveDetails:[
   { dateOfLeaves:{type:Date},
   {reasonsOfLeaves:{type:Date}}
   }
  ]


*/
console.log('schedule model');
// the schema is useless so far
// we need to create a model using it
const StudentLeaves = mongoose.model('student_Schedule', StudentLeavesSchema);

// make this available to our users in our Node applications
module.exports = StudentLeaves;
