require("dotenv").config();
const express = require('express');
const axios = require("axios");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const rateLimit = require("express-rate-limit");
const app = express();

const API_URL = "https://v6.exchangerate-api.com/v6/";
const API_KEY = process.env.EXCHANGE_RATE_API_KEY;

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15 minutes
  max: 100,
});

//cors
const corsOptions = {
  origin: ['http://localhost:5173'],
};

//middleware
app.use(express.json()); // pass incoming json data
app.use(apiLimiter);
app.use(cors(corsOptions));

//conversion
app.post("/api/convert", async (req, res) => {
  try {
    //get data from the client
    const {from, to, amount} = req.body;
    console.log(from, to, amount);
    //Construct the api
    const url = `${API_URL}/${API_KEY}/pair/${from}/${to}/${amount}`;
    const response = await axios.get(url);
    if (response.data && response.data.result === "success") {
      res.json({
        base: from,
        target: to,
        conversionRate: response.data.conversion_rate,
        convertedAmount: response.data.conversion_result,
      });
    } else {
      res.json({
        message: "Error converting currency",
        details: response.data,
      });
    }
  } catch (error) {
    res.json({ message: "Error converting currency", details: error.message });
  }
     
    });


//start the server
app.listen(PORT, console.log(`Server is running on PORT ${PORT}...`));