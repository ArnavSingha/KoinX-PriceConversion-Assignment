const axios = require('axios');

exports.currency_Converter = async (req, res) => {
    try {
        const { fromCurrency, toCurrency, date } = req.body;

        // Fetch historical price data for the fromCurrency
        const fromDataResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${fromCurrency}/history?date=${date}`);
        const fromData = fromDataResponse.data;
        const fromPriceInUSD = fromData?.market_data?.current_price?.usd;
        console.log("from currency in USD:",fromPriceInUSD)

        // Fetch historical price data for the toCurrency
        const toDataResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${toCurrency}/history?date=${date}`);
        const toData = toDataResponse.data;
        const toPriceInUSD = toData?.market_data?.current_price?.usd;
        console.log("to currency in USD:",toPriceInUSD)

        // Calculate converted price
        const convertedPrice = fromPriceInUSD / toPriceInUSD; // 1 unit of fromCurrency in terms of toCurrency

        res.json({
            success: true,
            data: {
                convertedPrice
            }
        });
    } catch (error) {
        console.error("Error converting price:", error.message);
        res.status(500).json({
            success: false,
            error: "Error converting price",
            message: error.message
        });
    }
};




