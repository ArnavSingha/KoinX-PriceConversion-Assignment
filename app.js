const express = require("express");
const app = express();
const axios = require("axios"); 
var cors = require("cors");


// Define port number
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Importing all route modules
const cryptoCurrencyListRoute = require("./routes/cryptocurrencyList.route");
const priceConversionRoute = require("./routes/currencyConverter.route");
const ListofCompanies = require("./routes/listofCompaniesData.route");


// Importing database connection module
const dbConnect = require("./config/databaseConnection");

// Enable CORS
app.use(
  cors({
    origin: "*", // Allow requests from all origins
  })
);

// Middleware for parsing JSON
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send(`<h1> Hey Arnav here, The app is running perfectly</h1>`);
});

// Defining routes
app.use("/api", cryptoCurrencyListRoute); // Route for fetching CryptoCurrencies List (task-1)
app.use("/api", priceConversionRoute); // Route for price conversion
app.use("/api",   ListofCompanies); // Route for fetching List of Companies that holds specific cryptocurrency


// Schedule job to update cryptocurrency data every hour
const { scheduleCryptocurrencyUpdate } = require('./utils/scheduler');
scheduleCryptocurrencyUpdate();


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});


// Connect to the database
dbConnect();

// Global error handling middleware
app.use((error, req, res, next) => {
  console.error("Error:", error);
  res.status(500).json({ success: false, error: "Internal server error" });
});


//   >>>> Notes :- For Testing in POSTMAN use following URL  <<<<<<<

//   >>>>Get request to fetch All CryptoCurrency List
//http://localhost:8000/api/cryptocurrencylist

//  >>>>Post request to convert one Currency to another
//http://localhost:8000/api/currencyCoverter

//  >>>>Post request to fetch ListofCompanies
//http://localhost:8000/api/companies/public_treasury




//  >>> Refer This URL to Run this App in your POSTMAN using Deployed Link
//  task-1 ==>>> https://koinx-backend-assignment-ah3d.onrender.com/api/cryptocurrencylist

//  task-2 ==>>> https://koinx-backend-assignment-ah3d.onrender.com/api/currencyCoverter

//  task-3 ==>>> https://koinx-backend-assignment-ah3d.onrender.com/api/companies/public_treasury
