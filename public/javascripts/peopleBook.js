var table=document.getElementById("peopleTable");
var update=function(){
	var changeURL=function(node){
		var parentNode=node.parentNode.parentNode;
		console.log(node);
		console.log(parentNode);
		var nameP=parentNode.querySelector(".nameP");
		var ageP=parentNode.querySelector(".ageP");
		var bookP=parentNode.querySelector(".bookP");
		var id=parentNode.querySelector(".itemID");

		var queryString= "/change/?id="+id.value+ "&nameP="+nameP.value+"&ageP="+ageP.value+"&bookP="+bookP.value;
		console.log(queryString);
		return queryString;
	}

	table.addEventListener("click",function(event){
		event.preventDefault();
		if(event.target.nodeName=="A")
		{
		   window.location.href=changeURL(event.target);
		}

	})
}

update();