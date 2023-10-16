// routes/seatRoutes.js
const express = require('express');
const router = express.Router();
const seatController = require('../controller/seatController');

router.get('/:seat_id', seatController.getSeatById);
router.get('/', seatController.getAllSeats);
router.post('/reserve', seatController.reserveSeat);

module.exports = router;