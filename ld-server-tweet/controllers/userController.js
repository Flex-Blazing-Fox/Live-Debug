const {User}  = require('../models')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const createError = require('http-errors')

class UserController {
  static register(req, res, next) {
    const { email, password } = req.body

    User.create({
      email,
      password
    })
      .then((user) => {
        res.status(201).json({id: user.id, email: user.email})
      })
      .catch(next)
  }

  static login(req, res, next) {
    const { email, password } = req.body

    User.findOne({email})
      .then((result) => {
        if (result && bcryptjs.compareSync(password, result.password)) {
          // const access_token = jwt.sign({ id: result.id }, process.env.JWT_SECRET)
          const access_token = jwt.sign({ id: result.id }, "secret") 
          res.status(200).json({access_token})
          console.log(access_token);
        } else {
          throw createError(400, "Invalid Email/Password")
        }
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = UserController