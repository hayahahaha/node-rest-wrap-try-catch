const express = require("express");
const router = express.Router();
const { getIndex, getIndexDetail } = require("../controllers/index");

/* GET home page. */
router.get("/", getIndex);

router.get("/:id", getIndexDetail);

module.exports = router;
