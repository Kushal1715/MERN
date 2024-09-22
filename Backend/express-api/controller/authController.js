const User = require('../models/authMode')
const Token = require('../models/tokenMode');
const crypto = require('crypto')
const sendEmail = require('../utils/sendEmail')

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