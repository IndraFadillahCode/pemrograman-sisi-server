const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

router.get('/', supplierController.getAllSuppliers);
router.get('/summary', supplierController.getSupplierSummary);
router.post('/', supplierController.createSupplier);

module.exports = router;