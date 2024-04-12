const express = require('express'); 
const router = express.Router(); 
const { getCryptoCurrencyList } = require('../controllers/cryptocurrencyList.controller'); 

// Route to update & fetch cryptocurrencylist of data
router.get('/cryptocurrencylist', getCryptoCurrencyList);

module.exports = router; 
