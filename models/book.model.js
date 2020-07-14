const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        unique
    },
    content: {
        type: String,
    },
    likes: {
        type: Number,
    },
    url:{
        type:String,
    },
    description:{
        type:String,
    }
})


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;