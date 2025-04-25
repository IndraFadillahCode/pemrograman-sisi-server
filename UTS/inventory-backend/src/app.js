const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
const adminRoutes = require('./routes/admin');
app.use('/api/admins', adminRoutes);

app.get('/', (req, res) => {
  res.send('Inventory API is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const categoryRoutes = require('./routes/category');
app.use('/api/categories', categoryRoutes);

const supplierRoutes = require('./routes/supplier');
app.use('/api/suppliers', supplierRoutes);

const itemRoutes = require('./routes/item');
app.use('/api/items', itemRoutes);

const path = require('path');
app.use(express.static(path.join(__dirname, '../public')));
