'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {
      // Akan ditambahkan nanti
    }
  }
  Admin.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Admin', // Singular model name
    tableName: 'admins', // Explicitly specify the table name
    underscored: true // Use snake_case for column names
  });
  return Admin;
};
