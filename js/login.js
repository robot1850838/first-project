require(["config"],function(){
	require(["jquery","template","cookie","load"],function($,template){
       $("#loginbtn").click(function(){
        var _uname = $("#user_name").val();
        var _upawd = $("#pwd1").val();
        console.log(_uname);
         $.post(
         	"http://localhost/php/login.php",
            {username:_uname,password:_upawd},
            function(data){
               console.log(data);
               $.cookie("ueser",data.data);
               if(data.status ===1) {
               	  $.cookie("loginUser",_uname,{expires:7,path:"/"});
               	  location = "/index.html";
               } else{
               	alert("用户名或密码错误")
               }             
            },"json");


       });
	});
});