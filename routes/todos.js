const express = require("express");
const router = express.Router();
const {getTodo, getTodos} = require('../controllers/todos')

router.get('/', getTodo);

router.get('/:id', getTodo);


module.exports = router;

