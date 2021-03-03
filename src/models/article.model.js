const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Article', ArticleSchema)
//const Article = mongoose.model('Article', { name: String });
