'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('suppliers', [
      {
        name: 'PT. Sumber Makmur',
        contact_info: '021-1234567',
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'CV. Teknologi Jaya',
        contact_info: '0822-4567-8899',
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('suppliers', null, {});
  }
};
