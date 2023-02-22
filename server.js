const express = require("express");

const Pizza = require("./models/pizzaModel");

const app = express();
const db = require("./db");

const pizzaRoute = require("./routes/pizzaRoute");

app.use(express.json());

app.use("/api/pizzas/", pizzaRoute);

app.get("/", (req, res) => {
  res.send("Server Working!!!!");
});

// app.get("/getpizzas", (req, res) => {
//   Pizza.find({}, (err, docs) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(docs);
//     }
//   });
// });

const port = process.env.PORT || 8000;

app.listen(port, () => "Server running on port !");
