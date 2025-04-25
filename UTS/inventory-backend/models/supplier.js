'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    static associate(models) {
      Supplier.belongsTo(models.Admin, { foreignKey: 'created_by' });
      Supplier.hasMany(models.Item, { foreignKey: 'supplier_id', as: 'items' });

    }
  }
  Supplier.init({
    name: DataTypes.STRING,
    contact_info: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Supplier',
    tableName: 'suppliers',
    underscored: true
  });
  return Supplier;
};
