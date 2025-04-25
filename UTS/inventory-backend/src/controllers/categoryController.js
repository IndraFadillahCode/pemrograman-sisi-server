const { Category, Item, Sequelize } = require('../../models');


module.exports = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCategory: async (req, res) => {
    const { name, description, created_by } = req.body;
    try {
      const newCategory = await Category.create({ name, description, created_by });
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getReport: async (req, res) => {
    try {
      const reports = await Category.findAll({
        attributes: ['id', 'name'],
        include: [{
          model: Item,
          as: 'items',
          attributes: []
        }],
        group: ['Category.id'],
        raw: true,
        subQuery: false,
        attributes: [
          'id',
          'name',
          [Sequelize.fn('COUNT', Sequelize.col('items.id')), 'item_count'],
          [Sequelize.fn('SUM', Sequelize.literal('items.price * items.quantity')), 'total_value'],
          [Sequelize.fn('AVG', Sequelize.col('items.price')), 'average_price']
        ],
        includeIgnoreAttributes: false
      });

      res.json(reports);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getCategorySummary: async (req, res) => {
    try {
      const summaries = await Category.findAll({
        attributes: [
          'id',
          'name',
          [Sequelize.fn('COUNT', Sequelize.col('items.id')), 'item_count'],
          [Sequelize.fn('SUM', Sequelize.literal('items.price * items.quantity')), 'total_value'],
          [Sequelize.fn('AVG', Sequelize.col('items.price')), 'average_price']
        ],
        include: [{
          model: Item,
          as: 'items',
          attributes: []
        }],
        group: ['Category.id'],
        raw: true
      });

      res.json(summaries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};


