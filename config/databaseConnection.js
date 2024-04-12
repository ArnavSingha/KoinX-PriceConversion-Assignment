const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => console.log("DataBase Connected Successfully"))
    .catch((err) => {
      console.log(`DataBase Connection Error`);
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
