const Author = require("../models/author");
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.search = asyncHandler(async (req, res, next ) => {
    const search = req.body.search.toString();

    const [authors, books] = await Promise.all([
        Author.find({first_name: {$regex: search}}), 
        Book.find({title: {$regex: search}}),
    ]);

    res.render("searching_list", {
        title: "Search",
        authors: authors,
        books: books,
    });
});
