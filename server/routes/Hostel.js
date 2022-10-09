const express = require("express");
const {
  get_hostels,
  create_hostel,
  collect_hostel,
} = require("../controllers/Hostel");

const router = express.Router();

router.get("/get_hostels", get_hostels);
router.post("/create_hostel", create_hostel);
router.post("/collect_hostel", collect_hostel);

module.exports = router;
