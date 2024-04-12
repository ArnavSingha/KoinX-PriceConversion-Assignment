const schedule = require('node-schedule');
const axios = require('axios');

require('dotenv').config();
const PORT = process.env.PORT;

// Schedule job to update cryptocurrency data every hour
const scheduleCryptocurrencyUpdate = () => {
    const rule = "0 * * * *" ;
  schedule.scheduleJob(rule, async () => {
    try {
      await axios.get(`http://localhost:${PORT}/api/cryptocurrencylist`);
      console.log("Cryptocurrency data updated successfully after 1 hour");
    } catch (error) {
      console.error("Error while updating cryptocurrency data:", error.message);
    }
  });
};

module.exports = { scheduleCryptocurrencyUpdate };
