/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
      .createTable('levels', (table) => {
        table.increments('level_id').primary();
        table.string('level_name').unique();
      })
      .createTable('class', (table) => {
        table.increments('class_id').primary();
        table.string('class_name');
        table.integer('level_id').unsigned();
        table.decimal('class_price');
        table.integer('class_seat_column_count');
  
        table.foreign('level_id').references('level_id').inTable('levels').onDelete('CASCADE').onUpdate('CASCADE');
      })
      .createTable('seats', (table) => {
        table.increments('seat_id').primary();
        table.string('seat_no').unique();
        table.integer('class_id').unsigned();
        table.integer('seat_row_no');
        table.integer('seat_col_index');
        table.string('seat_visibility');
        table.integer('seat_reserved');
  
        table.foreign('class_id').references('class_id').inTable('class').onDelete('CASCADE').onUpdate('CASCADE');
      })
      .then(function () {
        return knex('levels').insert([
          { level_name: 'Upper Class' },
          { level_name: 'Lower Class' },
          { level_name: 'VIP' },
        ]);
      })
      .then(function () {
        return knex('class').insert([
          { class_name: 'Gold', level_id: 1, class_price: 15.99, class_seat_column_count: 10 },
          { class_name: 'Silver', level_id: 1, class_price: 12.99, class_seat_column_count: 10 },
          { class_name: 'Economy', level_id: 2, class_price: 9.99, class_seat_column_count: 8 },
          { class_name: 'VIP', level_id: 3, class_price: 25.99, class_seat_column_count: 12 },
        ]);
      })
      .then(function () {
        return knex('seats').insert([
          { seat_no: '101', class_id: 1, seat_row_no: 1, seat_col_index: 1, seat_visibility: 'visible', seat_reserved: 0 },
          { seat_no: '102', class_id: 1, seat_row_no: 1, seat_col_index: 2, seat_visibility: 'visible', seat_reserved: 0 },
          // ... Add more seats for 'Upper Class'
  
          { seat_no: '201', class_id: 2, seat_row_no: 1, seat_col_index: 1, seat_visibility: 'visible', seat_reserved: 0 },
          { seat_no: '202', class_id: 2, seat_row_no: 1, seat_col_index: 2, seat_visibility: 'visible', seat_reserved: 0 },
          // ... Add more seats for 'Lower Class'
  
          { seat_no: '301', class_id: 3, seat_row_no: 1, seat_col_index: 1, seat_visibility: 'visible', seat_reserved: 0 },
          { seat_no: '302', class_id: 3, seat_row_no: 1, seat_col_index: 2, seat_visibility: 'visible', seat_reserved: 0 },
          // ... Add more seats for 'VIP'
        ]);
      });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable('seats')
      .dropTable('class')
      .dropTable('levels');
  };
  
  