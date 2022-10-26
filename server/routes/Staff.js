const {} = require("../controllers/User");
const express = require("express");
const { create_staff } = require("../controllers/Staff");

const router = express.Router();

router.post("/sign_up/staff", create_staff);

module.exports = router;
