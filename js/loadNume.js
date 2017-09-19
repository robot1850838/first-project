define(["jquery"],function($){   
   $.ajax({
     	url :"/html/include/windowRight.html",
     	type :"get",
     	success :function(data){
     		 $(".rNume").html(data);
     	}
     });
});