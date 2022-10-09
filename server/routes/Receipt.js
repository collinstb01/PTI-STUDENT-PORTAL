const express = require("express");
const { create_receipt, get_receipts } = require("../controllers/Receipt");

const router = express.Router();

router.post("/create_receipt", create_receipt);
router.get("/get_receipts", get_receipts);

module.exports = router;
