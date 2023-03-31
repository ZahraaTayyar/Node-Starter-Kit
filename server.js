const express = require("express");
const app = express();

app.use(express.json());

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

app.get("/json", (request, response) => {
  let lat = request.query.lat;
  let lng = request.query.lng;
  response.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});

app.get("/multiply", (request, response) => {
  // the values from the query are always strings
  const value1Query = Number(request.query.value1);
  const value2Query = Number(request.query.value2);
  const multiplyResult = value1Query * value2Query;
  // this result is STILL A NUMBER and we cannot send that number to res.send() because...
  // if you give res.send() a NUMBER it will think its an HTTP CODE and then try to send it back as that - the same as doing res.status(30)
  // res.send(multiplyResult);  // <-- returning HTTP CODE 30
  // so we convert it back to a String
  response.send(multiplyResult.toString());
});

//Lesson 2 exercises:

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.get("/albums", (request, response) => {
  response.status(200).send(albumsData);
});

app.get("/albums/:albumId", (request, response) => {
  const idToFind = request.params.albumId;
  const album = albumsData.find((album) => album.albumId === idToFind);
  response.status(200).send({ album });
});

app.post("/albums", (request, response) => {
  const newAlbum = request.body;
  albumsData.push(newAlbum);
  response.status(201).send({ newAlbum });
});

app.delete("/albums/:albumId", (request, response) => {

  const idToDelete = request.params.albumId;

  const indexOfAlbumToDelete = albumsData.findIndex(
    (x) => x.albumId === idToDelete
  );

  if (indexOfAlbumToDelete === -1) {
    response.status(404).json({ success: false });
  } else {
    albumsData.splice(indexOfAlbumToDelete);
    response.status(200).json({ success: true });
  }
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001. Ready to accept requests!");
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
