define(["jquery"],function(){
     $.ajax({
     	url :"/include/header.html",
     	type :"get",
     	success :function(data){
     		 $(".header").html(data);
     	}
     })
});