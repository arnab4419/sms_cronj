const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { JWT_SECRET } = require('../config/config');

exports.registration = async function(args, req) {
  const existingUser = await User.findOne({ email: req.userInput.email });

  if (existingUser) {
    const err = new Error('User already exists!');
    throw err;
  }
  const hashedPass = await bcrypt.hash(req.userInput.password, 12);

  req.userInput.password = hashedPass;
  const user = new User({ ...req.userInput });

  const createdUser = await user.save();

  return {
    ...createdUser._doc,
    userId: createdUser._id.toString()
  };
};

exports.login = async (args, req) => {
  try {
    const loadedUser = await User.findOne({ email: req.email });

    if (!loadedUser) {
      const error = new Error('A user with this email could not be found!');
      error.statusCode = 401;
      return error;
    }

    const isEqual = await bcrypt.compare(req.password, loadedUser.password);

    if (!isEqual) {
      const error = new Error('Wrong Password!');
      error.statusCode = 401;
      return error;
    }

    const token = jwt.sign(
      {
        email: loadedUser.email,
        userId: loadedUser._id.toString()
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return {
      token: token,
      userId: loadedUser._id.toString()
    };
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    return {
      err
    };
  }
};
