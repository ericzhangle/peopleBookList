var express = require('express');
var router = express.Router();
var controller= require("../controllers/main");

/* GET users listing. */
router.get('/', controller.users);

module.exports = router;
