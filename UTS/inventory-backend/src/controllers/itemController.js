const {  Item, Category, Supplier, Sequelize } = require('../../models');

module.exports = {
  getAllItems: async (req, res) => {
    try {
      const items = await Item.findAll();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createItem: async (req, res) => {
    const { name, description, price, quantity, category_id, supplier_id, created_by } = req.body;
    try {
      const newItem = await Item.create({
        name,
        description,
        price,
        quantity,
        category_id,
        supplier_id,
        created_by
      });
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  
  getSummary: async (req, res) => {
    try {
      const summary = await Item.findAll({
        model: Category,
        as: 'category',
        attributes: [
          [Sequelize.fn('SUM', Sequelize.col('quantity')), 'total_quantity'],
          [Sequelize.fn('SUM', Sequelize.literal('price * quantity')), 'total_value'],
          [Sequelize.fn('AVG', Sequelize.col('price')), 'average_price']
        ]
      });
      res.json(summary[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getLowStockItems: async (req, res) => {
    const threshold = parseInt(req.query.threshold) || 5;
  
    try {
      const lowStockItems = await Item.findAll({
        where: {
          quantity: {
            [Sequelize.Op.lt]: threshold
          }
        }
      });
  
      res.json(lowStockItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getItemsByCategory: async (req, res) => {
    const { category_id } = req.params;
  
    try {
      const items = await Item.findAll({
        where: {
          category_id: category_id
        }
      });
  
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getSystemSummary: async (req, res) => {
    try {
      const totalItems = await Item.count();
      const totalCategories = await Category.count();
      const totalSuppliers = await Supplier.count();
      const stockSummary = await Item.findAll({
        attributes: [
          [Sequelize.fn('SUM', Sequelize.literal('price * quantity')), 'total_stock_value']
        ],
        raw: true
      });

      res.json({
        total_items: totalItems,
        total_categories: totalCategories,
        total_suppliers: totalSuppliers,
        total_stock_value: parseFloat(stockSummary[0].total_stock_value || 0)
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
