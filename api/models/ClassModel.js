// models/ClassModel.js
class ClassModel {
    constructor(id, class_name, level_id, class_price, class_seat_column_count) {
      this.id = id;
      this.class_name = class_name;
      this.level_id = level_id;
      this.class_price = class_price;
      this.class_seat_column_count = class_seat_column_count;
    }
  }
  
  module.exports = ClassModel;
  