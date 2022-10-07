const { sign_up } = require("../controllers/User");
const express = require("express");

const router = express.Router();

router.post("/sign_up", sign_up);

module.exports = router;
