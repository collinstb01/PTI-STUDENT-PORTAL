const express = require("express");
const { create_receipt } = require("../controllers/Receipt");

const router = express.Router();

router.post("/create_receipt", create_receipt);

module.exports = router;
