const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const port = 3000;
let order = require('./order.js');
let pizzas = require('./pizzas.js');

app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('*/pizzas', (req, res) => {
  res.status(200).send(pizzas);
});

app.post('*/order', (req, res) => {
  order.items.push(req.body);
  res.sendStatus(201)
});

// expects pizza with property {name: pizzaName}
app.delete('*/order', (req, res) => {
  for (let i = 0; i < order.items.length; i++) {
    if (order.items[i].name === req.body.name) {
      order.items.splice(i, 1);
    }
  }
  res.sendStatus(204);
});

app.get('*/order', (req, res) => {
  order.time = order.items.length * 7;
  res.status(200).send(order);
});

app.get('*', (req, res) => {
  res.send("There's nothing here!");
});

app.listen(port, () => console.log(`App listening on port ${port}`));
