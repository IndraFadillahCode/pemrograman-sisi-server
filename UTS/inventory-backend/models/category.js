'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsTo(models.Admin, { foreignKey: 'created_by' });
      Category.hasMany(models.Item, { foreignKey: 'category_id', as: 'items' });


    }
  }
  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    created_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    underscored: true
  });
  return Category;
};
