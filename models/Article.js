//Dependencies
const mongoose = require('mongoose')

//Save the reference to the Shema cnstructor
const Schema = mongoose.Schema;

//Create the Article Schema which will store all saved articles

const ArticleSchema = new Schema({
    headline: {
        type: String,
        Unique: true
    },
    author: {
        type: String
    },
    date_published: {
        type: String
    },
    snippet: {
        type: String
    },
    web_url: {
        type: String
    }
    
})

//Create a model using Mongoose
const Article = mongoose.model('Article', ArticleSchema);

//Export the Article Schema
module.exports = Article