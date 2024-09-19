const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true,
    trim: true //to remove whitespaces
  }
}, { timestamps: true })


//if timestamps is true then:
//createdAt
//updatedAt

module.exports = mongoose.model('Category', categorySchema);
//inside database collectors, category becomes categories