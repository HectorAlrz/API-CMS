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
      maxlength: 150,
      required: true,
      trim: true
  },
  avatar: {
      type: String,
  },
  email: {
    type: String,
    required: true,
    match: /.*@.*\..*/,
  },
  website: {
      type: String,
      required: true,
  },
  crunchbase: {
      type: String,
  },
  linkedin: {
      type: String,
  },
}, {timestamps: true})


const model = mongoose.model('companies', companiesSchema)
module.exports = model