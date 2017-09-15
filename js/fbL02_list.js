require(["config"],function(){
	require(["jquery","template"],function($,template){
		$.getJSON("/mock/fbL02.li.json",function(data){
			var html = template("fbL02_li_temp",{products:data})
			  $(".fbL02_ul").html(html);
		});
	});
});