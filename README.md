# KoinX-PriceConversion-Assignment
This project is a server-side application that allows users: 
1. To fetch all the Cryptocurrency lists from the Coingecko API :-
```
https://api.coingecko.com/api/v3/coins/list
``` 
2. To facilitate the Price Conversion of one Crypto Currency to another Crypto Currency 
3. To fetch the List of Companies holding specific Cryptocurrencies Usin API :-
 ``` 
https://api.coingecko.com/api/v3/companies/public_treasury/${currency} 
```

---

## Important Links:- 

| Project Hosted Link on Render |https://koinx-priceconversion-assignment.onrender.com/|
|---|---|

| Task 1 |https://koinx-priceconversion-assignment.onrender.com/api/cryptocurrencylist|
|---|---|

| Task 2 |https://koinx-priceconversion-assignment.onrender.com/api/currencyCoverter|
|---|---|

| Task 3 |https://koinx-priceconversion-assignment.onrender.com/api/companies/public_treasury|
|---|---|
--- 

## Task 1: Fetch Cryptocurrency Names and IDs
1. Testing URL for POSTMAN for Task-1
```
Define PORT = 8000
http://localhost:8000/api/cryptocurrencylist
```

2. Fetching The Cryptocurrencies data from the Coingecko API :- 
```
https://api.coingecko.com/api/v3/coins/list 
``` 
3. And After Fetching Data I am storing fetched data in MongoDB Database in the name and Id's format.
![Koinx_Backend_Assignment ](./assets/2.png?raw=true " Koinx_Backend_Assignment ")
4. **For updating the data at Every hour** we are using “node-shedule” package . This package 
provides a flexible and powerful way to define rules for scheduling tasks at specific times or intervals.
5. We are using “schedule.shedulejob” method to update the data at every hour
![Koinx_Backend_Assignment ](./assets/3.png?raw=true " Koinx_Backend_Assignment ")

--- 
## Task 2: Cryptocurrency Price Conversion API

1. Generated API that takes the Coingecko IDs of 2 cryptocurrencies and returns the price of one currency in another on a particular date.
   (Price Conversion Logic is written in the `currencyConverter.controller.js` file under `controllers` folder. 
```
Define PORT = 8000
http://localhost:8000/api/currencyCoverter
```

2. **Request Schema:**
    ```json
        {
            "fromCurrency": "bitcoin",
            "toCurrency": "ethereum",
            "date": "12-01-2024"
        }
    ```
3. **Response:**
    ```json
       {
            "success": true,
            "data":{
                "convertedPrice": 17.688510609605387
             }
       }
    ```
4. During The POSTMAN Testing Verification
![Koinx_Backend_Assignment ](./assets/4.png?raw=true " Koinx_Backend_Assignment ")

---

## Task 3: Companies Holding Cryptocurrency API
1. implemented an API that retrieves a list of companies holding a specific cryptocurrency.
```
Define PORT = 8000
http://localhost:8000/api/companies/public_treasury
```
2. Implemented the `getListofCompanies` function in the `listofCompaniesData.controller.js` file under `controllers` to handle the retrieval of company data.
3. Postman Testing for API functionality.
![Koinx_Backend_Assignment ](./assets/5.png?raw=true " Koinx_Backend_Assignment ")

#### Request and Response Examples
2. **Request Schema:**
    ```json
    {
        "currency": "bitcoin"
    }
    ```
3. **Response:**
    ```json
    {
    "success": true,
    "List of Companies that holds bitcoin": [
                    "MicroStrategy Inc.",
                    "Galaxy Digital Holdings",
                    "Marathon Digital Holdings",
                    "Tesla, Inc.",
                    "Hut 8 Mining Corp",
                    "Coinbase Global, Inc",
                    "Block Inc.",
                    "Riot Platforms, Inc",
                    "Hive Blockchain",
                    "CleanSpark Inc.",
                    "NEXON Co Ltd",
                    "Exodus Movement Inc",
                    "Meitu Inc",
                    "Bit Digital, Inc",
                    "Bitfarms Limited",
                    "NFT Investments PLC",
                    "Cipher Mining",
                    "DMG Blockchain Solutions Inc.",
                    "Neptune Digital Assets Corp.",
                    "BIGG Digital Assets Inc.",
                    "Advanced Bitcoin Technologies AG",
                    "FRMO Corp.",
                    "The Brooker Group",
                    "DigitalX",
                    "LQwD Technologies Corp",
                    "Cypherpunk Holdings Inc",
                    "Core Scientific",
                    "Mogo Inc."
            ]
       }
    ```

--- 

#  Testing: For Testing this Server App in POSTMAN use following URL
- **Task-1**: Get-- request to fetch All CryptoCurrency List
```
http://localhost:8000/api/cryptocurrencylist
```
- **Task-2** : Post-- request to convert one Currency to another
```
http://localhost:8000/api/currencyCoverter
```
- **Task-3** : Post--request to fetch ListofCompanies
```
http://localhost:8000/api/companies/public_treasury
```
Or 

##  Testing: For Testing this Server App using Deployed Link in POSTMAN use following URL
- **Task-1**: Get request to fetch All CryptoCurrency List
```
https://koinx-priceconversion-assignment.onrender.com/api/cryptocurrencylist
```
- **Task-2** : Post request to convert one Currency to another
```
https://koinx-priceconversion-assignment.onrender.com/api/currencyCoverter
```
- **Task-3** : Post request to fetch ListofCompanies
```
https://koinx-priceconversion-assignment.onrender.com/api/companies/public_treasury
```
---
# Installation & Steps to Run the Project Your Locally Storage
1. Download or Clone the repository:
``` 
 git clone https://github.com/ArnavSingha/KoinX-PriceConversion-Assignment.git
```

2. Install all the required dependencies:
```
 npm install
```

3. Connect the MongoDB database by adding the Connection URL and PORT to the .env file : 
 ```
MONGODB_URL = paste from connection string 
PORT = 8000
```
4. Finally, Run the project:
```
 npm start
```
Or
```
npm run start
```
---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Coingecko API
- Render
- MongoDB Atlas
- POSTMAN
- Cors
- Axios
- Node-Schedule Package
- schedule.schedule job Method