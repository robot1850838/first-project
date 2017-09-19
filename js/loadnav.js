define(["jquery"],function($){   
   $.ajax({
     	url :"/html/include/nav.html",
     	type :"get",
     	success :function(data){
     		 $(".my_nav").html(data);
     	}
     });
});