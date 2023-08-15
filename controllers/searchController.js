const Author = require("../models/author");
const Book = require("../models/book");
const BookInstance = require("../modfels/bookinstances");
const Genre = require("../modelst/genre");
const asyncHandler = require("express-async-handler");

exports.search = asyncHandler(async (req, res, next ) => {
    const search = req.body.search.toString();
    const [authors, books, genres, bookinstances ] = await Promise.all([
        Author.find({title: {$regex: search}}), 
        Book.find({title: {$regex: search}}),
        Genre.find({title: {$regex: search}}),
        BookInstance.find({title: {$regex: search}}),
    ]);

    res.render("searching_list", {
        title: "Search",
        authors,
        books,
        genres,
        bookinstances,
    });
});