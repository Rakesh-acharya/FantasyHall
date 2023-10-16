// services/classService.js
const db = require('../db');
const ClassModel = require('../models/ClassModel.js');

class ClassService {
  getClassById(classId, callback) {
    const query = 'SELECT * FROM class WHERE class_id = ?';
    db.query(query, [classId], (err, rows) => {
      if (err) {
        callback(err, null);
      } else {
        const cls = new ClassModel(
          rows[0].class_id,
          rows[0].class_name,
          rows[0].level_id,
          rows[0].class_price,
          rows[0].class_seat_column_count
        );
        callback(null, cls);
      }
    });
  }
}

module.exports = new ClassService();
