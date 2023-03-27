const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Yay Node!");
});

app.get("/node", (request, response) => {
  response.send("This is node");
});

app.get("/codeyourfuture", (request, response) => {
  response.send("This is CodeYourFuture");
});

app.get("/chocolate", (request, response) => {
  let amountQuery = request.query.amount;
  response.send(amountQuery);
});

app.get("/json", function (req, res) {
  let lat = req.query.lat;
  let lng = req.query.lng;
  res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});

app.get("/multiply", (req, res) => {
  // the values from the query are always strings
  const value1Query = Number(req.query.value1);
  const value2Query = Number(req.query.value2);
  const multiplyResult = value1Query * value2Query;
  // this result is STILL A NUMBER and we cannot send that number to res.send() because...
  // if you give res.send() a NUMBER it will think its an HTTP CODE and then try to send it back as that - the same as doing res.status(30)
  // res.send(multiplyResult);  // <-- returning HTTP CODE 30
  // so we convert it back to a String
  res.send(multiplyResult.toString());
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

// Random Mad Comments:

// header 200 OK
// body "30"

// res.status(30) // <-- HTTP CODE

// "http://localhost:3000/multiply?value1=2&value2=10"

// ? start of the query "value1=2&value2=10"
// & separator
// key=something
// { "key" : "something" }
// {
//   value1: "2",
//   value2: "10"
// };

// console.log("the req.query object:", req.query);
// console.log("the type of req.query object:", typeof req.query);

// console.log("the type of value1:", typeof value1Query);
// console.log("the type of value2:", typeof value2Query);

// string * string
// number

// TYPE COERCION !!!!!!!!!!!!!!!! COERCING
// console.log(
//   "the typeof multiplying them:",
//   typeof (value1Query * value2Query)
// );

// const result = Number(value1Query) * Number(value2Query);

// console.log("the result:", result);

// const number = 1;
// number.toString() ===> "1"

// .toNumber()

// parseInt("20") INTEGER ==> 20

// parseInt("20.038549") ==> 20
// parseFloat("20.038549")  FLOAT / DECIMAL NUMBER => 20.038549

// res.send(value1Query * value2Query);

// res.status(200);
// res.status(404);

// String() // the same as x.toString()
// Boolean() // true/false

// truthy / falsy
// Boolean(0) === false;
// Boolean(1) === true;
// Boolean("") === false;
// Boolean("hello") === true;

// console.log("2" < 3 ) <=== true
