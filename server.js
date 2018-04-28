const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const app = express();
const routes = require("./routes");
const db = require('./models/Article');


// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

//Establish a reference to all of the models


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1/nytReact"
);

// Send every request to the React app
// Define any API routes before this runs


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
