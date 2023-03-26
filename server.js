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
  let value1Query = req.query.value1;
  let value2Query = req.query.value2;
  res.send(value1Query * value2Query);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
