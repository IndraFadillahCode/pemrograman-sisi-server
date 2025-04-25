const { Admin } = require('../../models');

module.exports = {
  getAllAdmins: async (req, res) => {
    try {
      const admins = await Admin.findAll();
      res.json(admins);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createAdmin: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const newAdmin = await Admin.create({ username, email, password });
      res.status(201).json(newAdmin);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};
