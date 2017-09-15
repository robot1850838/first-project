define(["jquery"],function($){
   console.log("11"); 
     $.ajax({
     	url :"/html/include/header.html",
     	type :"get",
     	success :function(data){
     		console.log("11");
     		 $(".header").html(data);
     	}
     });
});