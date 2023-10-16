// book.service.js
const BookModel = require('../models/book.model.js');

// Sample in-memory data store
const books = [];

class BookService {
  createBook(title, author) {
    const id = books.length + 1;
    const book = new BookModel(id, title, author);
    books.push(book);
    return book;
  }

  getAllBooks() {
    return books;
  }
}

module.exports = new BookService();