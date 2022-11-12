const express = require("express");
const connect = require("./config/database");
const { json } = require("express");
const todoRoute = require("./router/todoRoutes");

connect();

const app = express();
app.use(json());

app.get("/", (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Booking Flight API, See Documentation for all APIs" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.use("/todo", todoRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
