const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100},
    family_name: { type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
});

// virtual authoers full name
AuthorSchema.virtual("name").get(function() {
    //avoid errors when author has no first name nor familiy name
    let fullname = "";
    if (this.first_name && this.family_name) {
        fullname = `${this.family_name}, ${this.first_name}`;
    }
    return fullname;
});

//Virtual for authors URL
AuthorSchema.virtual("url").get(function() {
    //I do not use arrow functions cuz we will need to use this object
    return `/catalog/author/${this._id}`;

});

module.exports = mongoose.model("Author", AuthorSchema); 