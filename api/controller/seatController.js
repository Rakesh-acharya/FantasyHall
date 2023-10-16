// controllers/seatController.js
const SeatService = require('../service/seatService.js');

// Get a seat by ID
exports.getSeatById = function (req, res) {
  const seatId = req.params.seat_id;

  // Check if seatId is a number
  if (isNaN(seatId)) {
    // Invalid seatId provided
    res.status(400).send('Seat ID must be a number');
    return;
  }

  SeatService.getSeatById(seatId, (err, seat) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(seat);
    }
  });
};

// Get all seats
exports.getAllSeats = function (req, res) {
  SeatService.getAllSeats((err, seats) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(seats);
    }
  });
};

// Reserve a seat
exports.reserveSeat = function (req, res) {
  const { seat_id, seat_reserved } = req.body;
  SeatService.reserveSeat(seat_id, seat_reserved, (err, message) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(message);
    }
  });
};
