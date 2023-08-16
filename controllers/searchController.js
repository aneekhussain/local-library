const Author = require("../models/author");
const Book = require("../models/book");
//const BookInstance = require("../modfels/bookinstances");
//const Genre = require("../modelst/genre");
const asyncHandler = require("express-async-handler");

exports.search = asyncHandler(async (req, res, next ) => {
    const search = req.body.search.toString();

    const [authors, books] = await Promise.all([
        Author.find({first_name: {$regex: search, $options: "i"}}), 
        Book.find({title: {$regex: search, $options: "i"}}),
    ]);

    res.render("searching_list", {
        title: "Search",
        authors,
        books,
    });
});
//Genre.find({name: {$regex: search}}),
//BookInstance.find({status: {$regex: search}}),