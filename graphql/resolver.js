const bcrypt = require('bcryptjs');
const User = require('../models/userDetails');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  createUser: async function(args, req) {
    const email = args.userInput.email;
    const name = args.userInput.name;
    const password = args.userInput.password;
    const userId = args.userInput.userId;
    const phoneNo = args.userInput.phoneNo;

    // const errs = [];
    // if (!validator.isEmail(email)) {
    //   errs.push({ message: 'E-mail is invalid.' });
    // }
    // if (
    //   validator.isEmpty(password) ||
    //   !validator.isLength(password, { min: 6 })
    // ) {
    //   errs.push({ message: 'Password too short!' });
    // }

    // if (errs.length > 0) {
    //   const err = new Error('Invalid input.');
    //   err.data = errs;
    //   err.code = 422;
    //   throw err;
    // }
    var letter = /[a-zA-Z]/;
    var number = /[0-9]/;
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (args.userInput.email === '') {
      const err = new Error('Please Enter email id !');
      throw err;
    }

    if (reg.test(args.userInput.email) == false) {
      const err = new Error('Please valid emailid !');
      throw err;
    }
    if (args.userInput.password === '') {
      const err = new Error('Please Enter password !');
      throw err;
    }
    if (
      args.userInput.password.length < 4 ||
      !letter.test(args.userInput.password) ||
      !number.test(args.userInput.password)
    ) {
      const err = new Error('Please Enter valid  password !');
      throw err;
    }
    if (args.userInput.name === '') {
      const err = new Error('Please Enter your name');
      throw err;
    }
    if (args.userInput.userId === '') {
      const err = new Error('Please Enter User Id');
      throw err;
    }
    if (args.userInput.phoneNo === '') {
      const err = new Error('Please Enter your contact No');
      throw err;
    }
    if (args.userInput.phoneNo.length < 10) {
      const err = new Error('Please Enter valid contact  No');
      throw err;
    }
    console.log('args.userInputargs', args.userInput);

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      const err = new Error('User already exists!');
      throw err;
    }
    const hashedPass = await bcrypt.hash(password, 12);

    args.userInput.password = hashedPass;
    const user = new User({ ...args.userInput });

    // const user = new User({
    //   email: email,
    //   name: name,
    //   password: password,
    //   userId: userId,
    //   phoneNo: phoneNo
    // });

    const createdUser = await user.save();

    return {
      ...createdUser._doc,
      _id: createdUser._id.toString()
    };
  },

  //Handle the login  Api
  login: async function(args, req) {
    const password = args.password;
    const email = args.email;
    console.log('args.userInputargs in login', args.email);

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error('No user with that email');
    }
    console.log('**************AuthData.password', password);
    console.log('fjdfgfdg', user.password);
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Incorrect password');
    }
    console.log('validdddddddd', valid);

    //return json web token
    return jsonwebtoken.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
  }
};
