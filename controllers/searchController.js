const Author = require("../models/author");
const Book = require("../models/book");
const BookInstance = require("../modfels/bookinstances");
const Genre = require("../modelst/genre");
const asyncHandler = require("express-async-handler");

exports.search = asyncHandler(async (req, res, next ) => {
    const search = req.body.search.toString();
    const [authors, books, genres, bookinstances ] = await Promise.all([
        Author.find({first_name: {$regex: search}}), 
        Book.find({title: {$regex: search}}),
    ]);

    res.render("searching_list", {
        title: "Search",
        authors,
        books,
        genres,
        bookinstances,
    });
});
//Genre.find({name: {$regex: search}}),
//BookInstance.find({status: {$regex: search}}),