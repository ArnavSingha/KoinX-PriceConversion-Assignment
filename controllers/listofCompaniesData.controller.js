const axios = require('axios');

// Function to fetch company data for a cryptocurrency
const getListofCompanies = async (req, res) => {
    try {
        
        const { currency } = req.body;

        const response = await axios.get(`https://api.coingecko.com/api/v3/companies/public_treasury/${currency}`);
        const companyData = response.data;

        // Extract company names from the 'companies' array in the response data
        const companyNames = companyData.companies.map(company => company.name);

        res.status(200).json({ success: true, [`List of Companies that holds ${currency}`]: companyNames });
    } catch (error) {
        console.error('Error while Fetching List of Companies data:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

module.exports = { getListofCompanies };
