var express = require('express');
var router = express.Router();
var passport= require("passport");
var Account= require("../../account");
var controller= require("../controllers/main");
//var schemas= require("../controllers/schemas");
/* GET home page. */
router.get('/', controller.minionList);
router.post("/create",controller.createPeople);
router.get('/minion', controller.minion);
//router.get('/task', controller.taskinfo);
router.get('/delete/:id', controller.delete);
router.get('/change', controller.change);
router.get("/jade",controller.index);
router.get("/login",function(req,res){
	res.render("login");
});
router.post("/login",passport.authenticate("local"),function(req,res){
	res.redirect("/");
});
router.get("/register",function(req,res){
	res.render("register");
})
router.post("/register",function(req,res){
	Account.register(new Account({username:req.body.username}),
		req.body.password,function(err,account){
			if(err)
			   return res.render("register",{message:err.message})

			passport.authenticate("local")(req,res,function(){
				res.redirect("/");
			});
		})
})
module.exports = router;
