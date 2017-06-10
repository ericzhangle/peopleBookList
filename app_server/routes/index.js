var express = require('express');
var router = express.Router();
var controller= require("../controllers/main");
//var schemas= require("../controllers/schemas");
/* GET home page. */
router.get('/', controller.minionList);
router.post("/create",controller.createPeople);
router.get('/minion', controller.minion);
//router.get('/task', controller.taskinfo);
router.get('/delete/:id', controller.delete);
router.get('/change', controller.change);
module.exports = router;
