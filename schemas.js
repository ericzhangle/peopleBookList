var mongoose=require("mongoose");
var booksSchema=new mongoose.Schema({
	name:{type:String,required:true},
	pages:Number,
});
var peopleSchema= new mongoose.Schema({
	name:{type:String, required:function(){
		return this.name.length<=5;
	}},
	age:{type:Number,required:true},
	days:{type:[Number],default:[6],min:0,max:6},
	books:{type:[booksSchema]}
});

//var books=mongoose.model("book",booksSchema,"books");

var people=mongoose.model("people",peopleSchema,"people");
//module.exports.books=books;
module.exports=people;