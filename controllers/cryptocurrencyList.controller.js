const Cryptocurrency = require("../models/cryptocurrencyModel");
const axios = require('axios'); // Importing axios for making HTTP requests

// Get all Cryptocurrencies function 
const getCryptoCurrencyList = async (req, res) => {
    try {
        // Fetch cryptocurrency data from Coingecko API
        
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
        const cryptocurrencies = response.data; 

        // Clear existing data in the database
        await Cryptocurrency.deleteMany();

        // Creating new cryptocurrency data with required fields
        const cryptocurrenciesdata = cryptocurrencies.map(crypto => ({
            name: crypto.name,
            id: crypto.id
        }));

        // Insert new cryptocurrency data into the database
        await Cryptocurrency.insertMany(cryptocurrenciesdata);

        
        res.status(200).json({ success: true, message: 'Cryptocurrency data Fetched & updated Successfully' });
    } catch (error) {
        console.error('Error updating cryptocurrency data:', error);
        res.status(500).json({ success: false, error: 'Internal server error'});
    }
}

module.exports = { getCryptoCurrencyList}
