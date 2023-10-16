// controllers/insertDataController.js
const InsertDataService = require('../service/insertDataService');

exports.insertData = function (req, res) {
  const {
    level_name,
    class_name,
    class_price,
    class_seat_column_count,
    seat_no,
    seat_row_no,
    seat_col_index,
  } = req.body;

  InsertDataService.insertData(
    level_name,
    class_name,
    class_price,
    class_seat_column_count,
    seat_no,
    seat_row_no,
    seat_col_index,
    (err, message) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(message);
      }
    }
  );
};
