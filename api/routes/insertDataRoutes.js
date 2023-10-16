// routes/insertDataRoutes.js
const express = require('express');
const router = express.Router();
const InsertDataController = require('../controller/insertDataController');

router.post('/', InsertDataController.insertData);

module.exports = router;
