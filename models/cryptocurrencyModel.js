const mongoose = require("mongoose");

const CryptoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    
    id:{
        type: String,
        required: true,
        unique: true
    },
},{ timestamps: true });

  const Crypto = mongoose.model('Crypto', CryptoSchema);
  module.exports = Crypto;