const express = require("express");
const app = express();
const cors = require("cors");
const creditCardData = require("./data/creditCard");
const plbData = require("./data/personalLearningBudget");
const transactionsData = require("./data/transactions");

const PORT = process.env.PORT || 3000;
app.use(cors());

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

app.get("/transactions", (_, res) => {
  res.send(transactionsData);
});

app.get("/card-details", (req, res) => {
  const showCardNumber = req.query["show-card-number"] === "true";
  res.send(creditCardData(showCardNumber));
});

app.get("/personal-learning-budget", (_, res) => {
  res.send(plbData);
});

app.get("/", (_, res) => {
  res.send("Welcome to card transactions API!");
});

/*
|--------------------------------------------------------------------------
| Server Listening
|--------------------------------------------------------------------------
*/

app.listen(PORT, () => {
  console.log(`Transactions server is listening on port ${PORT}!`);
});
