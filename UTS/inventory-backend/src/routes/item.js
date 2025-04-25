const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getAllItems);
router.get('/summary', itemController.getSummary);
router.get('/low-stock', itemController.getLowStockItems);
router.get('/by-category/:category_id', itemController.getItemsByCategory);
router.get('/summary/system', itemController.getSystemSummary);
router.post('/', itemController.createItem);


module.exports = router;
