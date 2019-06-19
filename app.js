const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/student_management_system');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('data base connection');
});

var sample = require('./api/routes/route');
sample.fun(app);

app.listen(4000, function() {
  console.log('listing the 4000 port');
});
