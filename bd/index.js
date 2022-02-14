const mongoose = require('mongoose')
const env = require('../helper/env')

module.exports = async() => {
  return await mongoose.connect(env[`${process.env.NODE_ENV}`]||"mongodb://localhost:27017/wheater")
}