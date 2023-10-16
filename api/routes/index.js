// api/routes/index.js
const express = require('express');
const router = express.Router();

const bookRoutes = require('./book.routes.js');

router.use('/books', bookRoutes);

module.exports = router;