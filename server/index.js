const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const User = require("./routes/User");
const Receipt = require("./routes/Receipt");
const Hostels = require("./routes/Hostel");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use("/api", User);
app.use("/api", Receipt);
app.use("/api", Hostels);

app.use("/", async (req, res) => {
  res.send("App running");
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://jayden38400:jayden38400@cluster0.6t7tovb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(PORT, console.log("App Running")));
