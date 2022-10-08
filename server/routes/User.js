const {
  sign_up,
  sign_in,
  push_receipts,
  payment,
} = require("../controllers/User");
const express = require("express");

const router = express.Router();

router.post("/sign_up/student", sign_up);
router.post("/sign_in/student", sign_in);
router.get("/push_receipts/:id", push_receipts);
router.post("/payment", payment);

module.exports = router;
