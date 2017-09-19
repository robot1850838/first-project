define(["jquery"],function($){ 
     $.ajax({
     	url :"/html/include/header.html",
     	type :"get",
     	success :function(data){
     		 $(".header").html(data);
     	}
     });
    $(".footer").load("/html/include/footer.html");
});