'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('admins', [{
      username: 'superadmin',
      email: 'admin@toko.com',
      password: 'admin123',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
