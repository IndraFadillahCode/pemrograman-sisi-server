const { Supplier, Sequelize , Item} = require('../../models');

module.exports = {
  getAllSuppliers: async (req, res) => {
    try {
      const suppliers = await Supplier.findAll();
      res.json(suppliers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createSupplier: async (req, res) => {
    const { name, contact_info, created_by } = req.body;
    try {
      const newSupplier = await Supplier.create({ name, contact_info, created_by });
      res.status(201).json(newSupplier);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getSupplierSummary: async (req, res) => {
    try {
      const summaries = await Supplier.findAll({
        attributes: [
          'id',
          'name',
          [Sequelize.fn('COUNT', Sequelize.col('items.id')), 'item_count'],
          [Sequelize.fn('SUM', Sequelize.literal('items.price * items.quantity')), 'total_value']
        ],
        include: [{
          model: Item,
          as: 'items',
          attributes: []
        }],
        group: ['Supplier.id'],
        raw: true
      });

      res.json(summaries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
