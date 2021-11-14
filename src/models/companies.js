const mongoose = require('mongoose')

const companiesSchema = new mongoose.Schema({
  name: {
      type: String,
      minlength: 2,
      maxlength: 20,
      required: true,
      trim: true
  },
  description: {
      type: String,
      minlength: 15,
      maxlength: 300,
      required: true,
      trim: true
  },
  logo_url: {
      type: String,
  },
  email: {
    type: String,
    required: true,
    match: /.*@.*\..*/,
  },
  url: {
      type: String,
      required: true,
  },
  crunchbase_url: {
      type: String,
  },
  linkedin_url: {
      type: String,
  },
  twitter_url: {
      type: String,
  },
}, {timestamps: true})


const model = mongoose.model('companies', companiesSchema)
module.exports = model