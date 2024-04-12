const express = require('express');
const router = express.Router(); 

const { currency_Converter } = require('../controllers/currencyConverter.controller'); 

// >> Route to convert price
router.post('/currencyCoverter', currency_Converter);

module.exports = router; 
