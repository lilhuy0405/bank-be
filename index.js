const express = require('express');
const cors = require("cors");
const app = express();

const accounts = [
  {
    address: "0x123",
    tokens: [
      {
        id: "FRL",
        label: "FRL",
        price: 0.1,
        amount: 1000,
      },
      {
        id: "BTC",
        label: "FRL",
        price: 1_000,
        amount: 1,
      },
      {
        id: "USDT",
        label: "USDT",
        price: 1,
        amount: 10.2,
      },
      {
        id: "DOGE",
        label: "DOGE",
        price: 30,
        amount: 10.2,
      }
    ]
  },
  {
    address: "0x456",
    tokens: [
      {
        id: "FRL",
        label: "FRL",
        price: 0.1,
        amount: 200,
      },
      {
        id: "BTC",
        label: "FRL",
        price: 1_000,
        amount: 10,
      },
      {
        id: "USDT",
        label: "USDT",
        price: 1,
        amount: 167.2,
      },
      {
        id: "DOGE",
        label: "DOGE",
        price: 30,
        amount: 98.2,
      }
    ]
  }
]

app.use(express.json());
app.use(cors())
app.get('/accounts', function (req, res) {
  res.json({data: accounts});
});

app.get('/accounts/:address', function (req, res) {
  const { address } = req.params;
  const account = accounts.find(account => account.address === address);
  if(!account) {
    res.status(404).json({error: "Account not found"});
  }
  res.json({data: account});
});

const server = app.listen(3000, function () {
  console.log('Server is running..');
});
