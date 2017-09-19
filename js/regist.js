require(["config"],function(){
	require(["jquery","load"],function($){
        function loadCode() {
			$.ajax({
				type : "get",
				url : "http://route.showapi.com/932-2",
				data : {
					showapi_appid:"29550",
					showapi_sign:"08402fce064a484baad949d9a18f75e7",
					length : 4,
					specials : true
				},
				dataType : "json",
				success : function(data){
					data = data.showapi_res_body;
					$("#code_img")[0].src = data.image;
					$("#code_img")[0].sid = data.sid;
				}
			});
		}

		loadCode();

		// 点击更换验证码
		$("#code_img").on("click",function(){
			loadCode();
			console.log("1");
			$("#lSecurityCode").value = "";
		});

		// 失去焦点验证验证码输入是否正确
		$("#lSecurityCode").on("blur",function(){
			$.getJSON(
					"http://route.showapi.com/932-1",
					{
						showapi_appid:"29550",
						showapi_sign:"08402fce064a484baad949d9a18f75e7",
						checkcode : this.value,
						sid : $("#code_img")[0].sid
					},
					function(data){
						data = data.showapi_res_body;
						console.log(data);
						if (data.valid) {
							$("#code_info")[0].innerHTML = "正确";
						} else {
							$("#code_info")[0].innerHTML = "验证码输入错误";
						}				
			});
		});
		$("#registbtn").click(function(){
			$.ajax({
				type:"post",
				url :"http://localhost/php/regist.php",
				dataType : "json",
				data:{
					username:$("#try_user_regname").val(),
					password:$("#try_user_pwd").val(),
					password1:$("#try_user_pwd1").val()
				},
				success : function(data){
                     console.log(data);   
				}
			});
		});
		return false;
	});
});