Frontend Challenge
==================

To better assess a candidates development skills, we would like to provide the following challenge. This is intendend to be developed in a pair programming session within an hour of time.

Prerequisites
-------------

* [Git](http://git-scm.com/)
* [npm](https://www.npmjs.org/)
* [Bower](http://bower.io/)

Installation
------------

Clone the project

Install the dependencies

```
npm install
```

Start the server

```
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

**Please set up your working environment before the interview (working server, node, npm dependencies), so we don't spend time installing anything.**

Project description
-------------------

We want to develop a small web app that allows users to order pizza.

First of all we'll display the list of pizzas with ingredients and prices. Pizza data can be retrieved from the `*/pizzas` server endpoint.

When the user chooses something from the list the order summary will update dynamically.

There will be a button to confirm the order. An ajax call will be performed to the `*/order` endpoint and the result will be displayed as a message like this: "Your order will be delivered in x minutes".

You can use any library/framework/plugin you want.

The application must be single page and JS-based using AngularJS or ReactJS. That means that I load just one html file, if you want to add some navigation you have to implement it via JS.


API Endpoints
-----------------
get /pizzas
Response Data:
```
[
  {
    name: "Margherita",
    price: 5,
    ingredients: [
      "tomato",
      "mozzarella"
    ]
  },
  {
    name: "Bufala",
    price: 6,
    ingredients: [
      "tomato",
      "mozarella di bufala"
    ]
  },
  {
    name: "Romana",
    price: 5,
    ingredients: [
      "tomato",
      "mozzarella",
      "anchovies",
      "oregano",
      "oil"
    ]
  },
  {
    name: "Diavola",
    price: 7.5,
    ingredients: [
      "tomato",
      "mozzarella",
      "spicy salami"
    ]
  },
  {
    name: "Pizza Bianca",
    price: 5,
    ingredients: [
      "mozzarella",
      "oregano"
    ]
  }
]
```

post /order
Request Body Format:
(same format as individual pizza data)
```
{
  name: [STRING],
  price: [NUMBER],
  ingredients: [ARRAY OF STRINGS]
}
```

delete /order
Request Body Format:
(needs to at least have name property)
```
{
  name: [STRING],
  . . .
}
```

get /order
Example Response Data:
```
{
  success: true,
  deliveryTime: 14,
  items: [
    {
      name: "Romana",
      price: 5,
      ingredients: [
        "tomato",
        "mozzarella",
        "anchovies",
        "oregano",
        "oil"
      ]
    },
    {
      name: "Diavola",
      price: 7.5,
      ingredients: [
        "tomato",
        "mozzarella",
        "spicy salami"
      ]
    }
  ],
}
```

get /*
(any get route that wasn't defined above)
Response:
`There's nothing here!`


Evaluation
----------

This prompt tests for the following:

* Do you understand the JavaScript language and more in general web technologies?
* Can you judge which library/framework is the best fit for a job and use it correctly?
* Can you design interfaces that are clear and easy to use?
* Do you master your working environment?

Due to the limited time, consider the following:

* It is NOT important to have a fully functional application at the end.
* We'll develop just for the latest version of Google Chrome.
