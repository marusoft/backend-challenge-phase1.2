# backend-challenge-phase1.2
The goal of this challenge is to create a service integration to a public API and expose a RESTful endpoint that will accept requests and returns a modified response schema from the integrated API.

# Getting Started

#### `git clone https://github.com/marusoft/backend-challenge-phase1.2.git`

# Install project dependencies
#### `npm install`

# Start project
#### `npm run start:dev`

Runs the app in the development mode.\
Open [http://localhost:5000/api/rates?base=CZK&currency=EUR,GBP,USD](http://localhost:5000/api/rates?base=CZK&currency=EUR,GBP,USD) to view it in the browser.

#### A request to fetch the currency exchange rates from `CZK` to `EUR`,`GBP`,`USD` is

   `/api/rates?base=CZK&currency=EUR,GBP,USD`
 
#### A successful response for the above request should return the following schema

```jsx
{
    "results": {
        "base": "CZK",
        "date": "2020-11-17",
        "rates": {
            "EUR": 0.0377244605,
            "GBP": 0.033795458,
            "USD": 0.044824204
        }
    }
}
```

#### Technologies used
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)