const express = require("express");
const cors = require("cors");
const User = require("./routes/User");

const app = express();

app.use("/api", User);

app.use(cors());
app.use(express.json());

app.use("/", async (req, res) => {
  res.send("App running");
});

app.listen(5000, () => console.log("App Running"));
