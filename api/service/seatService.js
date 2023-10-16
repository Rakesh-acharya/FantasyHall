// services/seatService.js
const db = require('../../db');
const SeatModel = require('../models/seatModel.js');

class SeatService {



    getSeatById(seatId, callback) {
      // const query = 'SELECT * FROM seats WHERE seat_id = ?';
      const query = 'SELECT s.seat_id, s.seat_no, c.class_name, c.class_id, c.class_price, l.level_name FROM seats s INNER JOIN class c ON s.class_id = c.class_id INNER JOIN levels l ON c.level_id = l.level_id WHERE s.seat_id = ?';
      db.query(query, [seatId], (err, rows) => {
        if (err) {
          callback(err, null);
        } else {
          if (rows.length === 0) {
            // No rows found for the specified seat ID
            const error = new Error('No seat found with the specified seat ID');
            error.status = 404; // You can choose an appropriate HTTP status code
            callback({ status: error.status, message: error.message }, null);
          } else {
            // Data found, create and return the seat model
            const seat = new SeatModel(
              rows[0].seat_id,
              rows[0].seat_no,
              rows[0].class_id,
              rows[0].class_name,
              rows[0].class_price,
            );
            callback(null, seat);
          }
        }
      });
    }
  
  getAllSeats(callback) {
    // const query = 'SELECT * FROM seats';
    const query='SELECT    s.seat_id,    s.seat_no, c.class_id,    c.class_name,    c.class_price,    l.level_name FROM seats s INNER JOIN class c ON s.class_id = c.class_id INNER JOIN levels l ON c.level_id = l.level_id;  '
    db.query(query, (err, rows) => {
      if (err) {
        callback(err, null);
      } else {
        const seats = rows.map(row => new SeatModel(
          row.seat_id,
          row.seat_no,
          row.class_id,
          row.class_name,
          row.class_price,
        ));
        callback(null, seats);
      }
    });
  }

  reserveSeat(seatId, isReserved, callback) {
    const query = 'UPDATE seats SET seat_reserved = ? WHERE seat_id = ?';
    db.query(query, [isReserved, seatId], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, 'Seat reservation updated successfully');
      }
    });
  }
}

module.exports = new SeatService();
