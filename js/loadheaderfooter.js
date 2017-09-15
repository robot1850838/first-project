define(["jquery"],function($){ 
     $.ajax({
     	url :"/html/include/header.html",
     	type :"get",
     	success :function(data){
     		console.log("11");
     		 $(".header").html(data);
     	}
     });
    $(".footer").load("/html/include/footer.html");
});