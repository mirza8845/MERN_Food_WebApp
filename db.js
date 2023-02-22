const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://mernjs_8845:mernjs8845@cluster0.y8lph.mongodb.net/mern-pizza";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Success");
});

db.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

module.exports = mongoose;
