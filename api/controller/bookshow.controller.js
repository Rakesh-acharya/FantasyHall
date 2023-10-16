// bookshow.controller.js
const BookService = require('../service/book.service.js');

module.exports.homepage = function (req, res) {
  res.status(200).send('This is our home page from controller');
};

module.exports.createBook = function (req, res) {
  const { title, author } = req.body;
  const book = BookService.createBook(title, author);
  res.status(201).json(book);
};

module.exports.getAllBooks = function (req, res) {
  const books = BookService.getAllBooks();
  res.status(200).json(books);
};
