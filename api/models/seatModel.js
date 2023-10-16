// models/SeatModel.js
class SeatModel {
    constructor(id, seat_no, class_id, class_name, class_price, seat_row_no, seat_col_index, seat_visibility, seat_reserved) {
      this.id = id;
      this.seat_no = seat_no;
      this.class_id = class_id;
      this.class_name=class_name;
      this.seat_row_no = seat_row_no;
      this.seat_col_index = seat_col_index;
      this.seat_visibility = seat_visibility;
      this.seat_reserved = seat_reserved;
      this.class_price=class_price;
    }
  }
  
  module.exports = SeatModel;