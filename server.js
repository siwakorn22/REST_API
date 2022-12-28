const express = require("express");
const cors = require("cors");
const restaurantRouter = require("./routes/restaurant.router");

// Create Server
const app = express();

//Use Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.get("/", (req, res) => {
  res.send("<h1>This is Restaurant API</h1>");
});
// Restaurant router
app.use("/apis", restaurantRouter);

// Running server
app.listen(5000, () => {
  console.log("Server listening to port 5000");
});
