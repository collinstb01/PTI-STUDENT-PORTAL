const express = require("express")

const app = express()

app.use("/", async (req, res) => {
    res.send("App running")
})

app.listen(5000, () => console.log("App Running"))