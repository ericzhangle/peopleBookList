var mongoose= require("mongoose");
var people= mongoose.model("people");

var showList=function(req, res, next) {

  people.find({},function(err,docs){
  	if (err)
  		return console.log(err);
  	if (docs)
  		res.render("peoples",{people:docs})
  		//res.render('index', { title: 'what the shit' });
  })
  
};

module.exports.minionList=showList;
module.exports.minion=function(req, res, next) {
   res.render('index', { title: 'minion' });
};
module.exports.createPeople=function(req, res, next) {
   new people({
   	name:req.body.name,
   	age:req.body.age,
   	books:[{
   		name:req.body.bookname,
   		pages:req.body.pages
   	}],
   }).save(function(err,doc){
   	if(err)
   		return console.log(err);
   	 //showList(req, res, next);
   	 res.redirect("/");
   })
};
module.exports.delete=function(req, res, next) {
	var id= req.params.id;
	people.remove({_id:id},function(err){
		if(err)
			return console.log(err);
		res.redirect("/");
	})
   //res.render('taskinfo', { name: "zhangle", description:"you are bad", value:4});
};
//	var queryString= "/change/?id="+id.value+ "&nameP="+nameP.value+"&ageP="+ageP.value+"&bookP="+bookP.value;

module.exports.index=function(req, res, next) {
   res.render('index',{title:"fuck"});
};

module.exports.change=function(req, res, next) {
	var id= req.query.id;
	var nameP=req.query.nameP;
	var ageP=req.query.ageP;
	var bookP=req.query.bookP;
	people.update({_id:id,"books.name":{ $exists: true }},{$set:{name:nameP,age:ageP,"books.$.name":bookP}},function(err){
		if(err)
			console.log(err);
	});
		res.redirect("/");
   //res.render('taskinfo', { name: "zhangle", description:"you are bad", value:4});
};
module.exports.newfile=function(req, res, next) {
   res.render('newfile')
};