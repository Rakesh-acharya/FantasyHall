// services/insertDataService.js
const db = require('../../db');

class InsertDataService {
  insertData(
    level_name,
    class_name,
    class_price,
    class_seat_column_count,
    seat_no,
    seat_row_no,
    seat_col_index,
    callback
  ) {
    const insertLevelQuery = 'INSERT INTO levels (level_name) VALUES (?)';
    const insertClassQuery =
      'INSERT INTO class (class_name, level_id, class_price, class_seat_column_count) VALUES (?, ?, ?, ?)';
    const insertSeatQuery =
      'INSERT INTO seats (seat_no, class_id, seat_row_no, seat_col_index, seat_reserved) VALUES (?, ?, ?, ?, 0)';

    db.beginTransaction((err) => {
      if (err) {
        callback(err, null);
        return;
      }

      db.query(insertLevelQuery, [level_name], (err, result) => {
        if (err) {
          db.rollback(() => {
            callback(err, null);
          });
        } else {
          const levelId = result.insertId;
          db.query(
            insertClassQuery,
            [class_name, levelId, class_price, class_seat_column_count],
            (err, result) => {
              if (err) {
                db.rollback(() => {
                  callback(err, null);
                });
              } else {
                const classId = result.insertId;
                db.query(
                  insertSeatQuery,
                  [seat_no, classId, seat_row_no, seat_col_index],
                  (err, result) => {
                    if (err) {
                      db.rollback(() => {
                        callback(err, null);
                      });
                    } else {
                      db.commit((err) => {
                        if (err) {
                          db.rollback(() => {
                            callback(err, null);
                          });
                        }
                        callback(null, 'Data inserted successfully');
                      });
                    }
                  }
                );
              }
            }
          );
        }
      });
    });
  }
}

module.exports = new InsertDataService();
