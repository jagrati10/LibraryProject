// server.js
// where node app starts

const express = require("express");
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true}));

const connectDB = require("./DB/connection");
 connectDB();

// const ManageBooksRouter = require('./manageBooks');
// app.use('/', ManageBooksRouter);

// const userdetailsRouter = require('./UserDetails');
// app.use('/', userdetailsRouter);

const borrowedBooksRouter = require('./borrowedBooksList');
app.use('/', borrowedBooksRouter);

function resolvePromise() {
  return rejectPromise();
}

function rejectPromise() {
  return Promise.reject();
}

resolvePromise().then(() => {
  console.log('resolved');
}).catch((err) => {
  console.log('errored');
});

// listen for requests 
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
