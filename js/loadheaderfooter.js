define(["jquery"],function(){
     $.ajax({
     	url :"/include/header.html",
     	type :"get",
     	success :function(data){
     		console.log("11");
     		 $(".header").html(data);
     	}
     });
});