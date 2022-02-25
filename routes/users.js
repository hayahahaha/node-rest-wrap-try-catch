var express = require("express");
var router = express.Router();
const controller = require('../controllers/users');

/* GET users listing. */
router.get("/", controller.getUser);
router.get("/:id", controller.getUserDetail);

module.exports = router;
