'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', [{
      name: 'Laptop ASUS',
      description: 'Laptop kerja',
      price: 7500000,
      quantity: 10,
      category_id: 1,
      supplier_id: 1,
      created_by: 1,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items', null, {});
  }
};
