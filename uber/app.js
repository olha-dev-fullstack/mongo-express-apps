const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const mongoose = require('mongoose');
const app = express();

if(process.env.NODE_ENV !== "test") {
    mongoose.connect('mongodb://localhost/uber')
}

app.use(bodyParser.json());
routes(app);

module.exports = app;
