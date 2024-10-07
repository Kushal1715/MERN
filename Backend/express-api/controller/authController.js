const User = require('../models/authMode')
const Token = require('../models/tokenMode');
const crypto = require('crypto')
const sendEmail = require('../utils/sendEmail')
const jwt = require('jsonwebtoken'); //authentication
const { expressjwt } = require('express-jwt') //authorization

exports.postUser = async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  User.findOne({ email: user.email }).then(async data => {
    if (data === null) {
      user = await user.save();
      if (!user) {
        return res.status(400).json({ error: 'something went wrong' })
      }

      //creating a token
      let token = new Token({
        token: crypto.randomBytes(16).toString('hex'),
        userId: user._id
      })
      token = await token.save();
      if (!token) {
        return res.status(400).json({ error: 'failed to create a token' })
      }

      //send mail
      sendEmail({
        from: 'no-reply@online-store.com',
        to: user.email,
        subject: 'Email Verification Link',
        text: `Hello, \n\n Please verify your email by using the below link\n\n
        http:\/\/${req.headers.host}\/api\/confirmation\/${token.token}`,
        html: `
        <h1> Verify your Email </h1>`
      })

      res.send(user)
    } else {
      return res.status(400).json({ error: 'email already exists' })
    }
  })
}

//confirming the email
exports.postEmailConfiguration = (req, res) => {
  Token.findOne({ token: req.params.token })
    .then(token => {
      if (!token) {
        return res.status(400).json({ error: 'invalid token or token may have expired' })
      }
      User.findOne({ _id: token.userId })
        .then((user) => {
          if (!user) {
            return res.status(400).json({ error: 'unable to find the valid user for this token' })
          }
          if (user.isVerified) {
            return res.status(400).json({ error: 'user is already verified' })
          }
          user.isVerified = true;
          user.save()
            .then((user) => {
              if (!user) {
                return res.status(400).json({ error: 'failed to verify the user' })
              }
              res.json({ msg: "Congrats, your email has been verified. please login to continue" })
            })
            .catch((err) => {
              return res.status(400).json({ error: err })
            })
        })
        .catch((err) => {
          return res.status(400).json({ error: err })
        })
    })
    .catch((err) => {
      return res.status(400).json({ error: err })
    })
}

//sign in process
exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  //at first check if email is register in a database or not
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(403).json({ error: "email doesnot exist in the database, register first" })
  }
  //if email found then check the password
  if (!user.authenticate(password)) {
    return res.status(400).json({ error: "email and password does not match" })
  }

  if (!user.isVerified) {
    return res.status(400).json({ error: "you are not verified" })

  }
  //now generate token with user id and jwt secret
  const token = jwt.sign({ _id: user.id, role: user.role }, process.env.JWT_SECRET)
  //store token in the cookie
  res.cookie('myCookie', token, { expires: new Date(Date.now() + 999999) })
  //return user information to frontend
  const { _id, name, role } = user
  return res.json({ token, user: { _id, name, email, role } })
}

//forget password
exports.forgetPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (!user) {
    return res.status(400).json({ error: 'not able to find the email in our database, try another or register first' })
  }
  let token = new Token({
    userId: user._id,
    token: crypto.randomBytes(16).toString('hex')
  })

  token = await token.save()
  if (!token) {
    return res.status(400).json({ error: 'failed to create a token' })
  }

  //sending email process
  sendEmail({
    from: 'no-reply@online-store.com',
    to: user.email,
    subject: 'Password reset Link',
    text: `Hello, \n\n Please reset your password using the below link\n\n
    http:\/\/${req.headers.host}\/api\/reset\/password\/${token.token}`,
    html: `
    <h1> Reset your password </h1>`
  })

  res.json({ msg: 'password reset link has been sent to your email' })

}

//reset password
exports.resetPassword = async (req, res) => {
  let token = await Token.findOne({ token: req.params.token })
  if (!token) {
    return res.status(400).json({ error: "expired or invalid token" })
  }

  let user = await User.findOne({ _id: token.userId })
  if (!user) {
    return res.status(400).json({ error: "unable to find user for this token" })
  }
  user.password = req.body.password;
  user = await user.save();
  if (!user) {
    return res.status(400).json({ error: "failed to reset password" })
  }
  res.json('password has been reset succesfully');

}

//user list
exports.userList = async (req, res) => {
  const user = await User.find()
    .select('-hashed_password')
    .select('-salt')
  if (!user) {
    return res.status(400).json({ error: 'something went wrong' })
  }
  res.send(user)
}

//get single user
exports.userDetails = async (req, res) => {
  const user = await User.findById(req.params.id)
    .select('-hashed_password')
    .select('-salt')
  if (!user) {
    return res.status(400).json({ error: 'user not found' })
  }
  res.send(user);
}

//middleware for user role
exports.requireUser = (req, res, next) => {
  //verify jwt
  expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperth: 'auth'
  })(req, res, (err) => {
    if (err) {
      return res.status(401).json({ error: 'unauthorized' })
    }

    //check for user role
    if (req.auth && req.auth.role === 0) {
      //grant access
      next()
    } else {
      //unauthorized
      return res.status(403).json({ error: 'Forbidden' })
    }
  })
}

//middleware for admin role
exports.requireAdmin = (req, res, next) => {
  //verify jwt
  expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'auth'
  })(req, res, (err) => {
    if (err) {
      return res.status(401).json({ error: 'unauthorized' })
    }

    //check for user role
    if (req.auth.role === 1) {
      //grant access
      next()
    } else {
      //unauthorized
      return res.status(403).json({ error: 'Forbidden' })
    }
  })
}