const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: "Author", required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: "Genre"}],
});


//virtuel for books and their URL
BookSchema.virtual("url").get(function () {
    //we do not use arrow function cuz we need the this object
    return `/catalog/book/${this._id}`;
});

//Exporting the model
module.exports = mongoose.model("Book", BookSchema);