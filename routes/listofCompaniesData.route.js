const express = require('express');
const router = express.Router();

const { getListofCompanies } = require('../controllers/listofCompaniesData.controller');

// Define route to fetch company data
router.post('/companies/public_treasury', getListofCompanies);

module.exports = router; 
