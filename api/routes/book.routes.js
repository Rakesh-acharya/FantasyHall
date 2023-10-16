// book.routes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookshow.controller.js');

router.get('/', bookController.homepage);
router.post('/', bookController.createBook);
router.get('/books', bookController.getAllBooks);

module.exports = router;
