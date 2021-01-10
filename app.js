const express = require("express");
const app = express();

const axios = require("axios");

const port = process.env.PORT || 5000;

const getCurrencyExchangeRate = async (req, res) => {
  const { base, currency } = req.query;

  try {
    if (base && currency) {
      const response = await axios.get(
        `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`
      );
      const { data } = response;
      res.status(200).json({
        results: data,
      });
    } else {
      const response = await axios.get(
        `https://api.exchangeratesapi.io/latest`
      );
      const { data } = response;
      res.status(200).json({
        results: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

app.get("/api/rates", getCurrencyExchangeRate);

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
