'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' });
      Item.belongsTo(models.Supplier, { foreignKey: 'supplier_id' });
      Item.belongsTo(models.Admin, { foreignKey: 'created_by' });
      Item.belongsTo(models.Supplier, { foreignKey: 'supplier_id', as: 'supplier' });

    }
  }
  Item.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    supplier_id: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items',
    underscored: true
  });
  return Item;
};
