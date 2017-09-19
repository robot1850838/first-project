require(["config"],function(){
	require(["jquery","template","fly","load","loadNume"],function($,template,fly){
			// fbL02模板加载
         $.getJSON("/mock/fbL02_li.json",function(data){         	
			var html = template("fbL02_li_temp",{products:data})
			  $(".fbL02_ul").html(html);
			  console.log($(".fbL02_ul")[0]);
		});
         //fbL上下轮播
            var fbL_timer = null,
             fbL_currentIndex = 0,
             fbL_nextIndex = 1,
             boxHeight = $(".fbL02_box").outerHeight();
             fbL_timer = setInterval(fbL_move,3000);
             //绑定移入事件
             $(".fbL02_index li").stop().on("mouseenter",function(){
             	    var index = $(this).index();
             	    if(fbL_currentIndex === index)
             	    	return;
                       fbL_nextIndex = index; 
                       fbL_move();     
             	    
             });
          // 鼠标移入/移出容器，停止/启动自动轮播计时器
			$(".fbL02_box").stop().hover(function(){
				// mouseenter
				clearInterval(fbL_timer);
			}, function(){
				// mouseleave
				timer = setInterval(fbL_move, 3000);
			}); 
             function fbL_move(){
		           var _top = -1 * fbL_nextIndex * boxHeight/2;           	             	   
						   // 添加/删除样式
				   var circleIndex = fbL_nextIndex ;
				
				
			  $(".fbL02_index li").eq(circleIndex).addClass("current")
									   .siblings().removeClass("current");
			  $(".fbL02_box").stop().animate({top:_top},function(){
		                      if(fbL_nextIndex >= 2){
		                         fbL_currentIndex = -1;
		             	   	     fbL_nextIndex = 0;
		             	   	     
		             	   }
		             	   }); 
						   fbL_currentIndex = fbL_nextIndex;
						   fbL_nextIndex++;
             }
         //banner左右轮播
        		var imgBoxes = $("#imgs li"), // 待轮播的图片盒子
				len = imgBoxes.length, // 轮播图片的张数
				imgWidth = imgBoxes.outerWidth(), // 轮播图片盒子的宽度
				currentIndex = 1, // 当前显示图片索引
				nextIndex = 2, // 即将显示图片索引
				timer = null; // 轮播计时器 id

			// 复制第一个/最后一个图片盒子
			var first = imgBoxes.eq(0).clone(true),
				last = imgBoxes.last().clone(true);
			// 添加到 ul 内部
			$("#imgs").append(first)
					  .prepend(last);
			// 因为多添加了两张图片，所以修改len
			len += 2;
			// 计算 ul#imgs 宽度，默认显示内容1的图片
			$("#imgs").width(imgWidth*len)
					  .css("left", -imgWidth);

			// 动态添加小圆点
			var html = "";
			for (let i = 0; i < len - 2; i++) {
				html += "<div></div>";
			}
			// $("#pages").html(html);
			// $("#pages").append(html).children(":first").addClass("current");
			$(html).appendTo("#pages")
				   .first().addClass("current");
              circles = $("div", $("#pages"));
	       circles[0].innerHTML = "玉满脂香·谢“蟹”有礼";
		   circles[1].innerHTML =  "混合谷物 健康代餐";
	 	   circles[2].innerHTML =  "富硒·养生——龙山百合";
	 	   circles[3].innerHTML = "徐香猕猴桃·养颜长生果";
	 	   circles[4].innerHTML =  "散养土鸡蛋";

			// 自动轮播
			// timer = setInterval(move, 5000);

			// 鼠标移入/移出容器，停止/启动自动轮播计时器
			$("#container").hover(function(){
				// mouseenter
				clearInterval(timer);
			}, function(){
				// mouseleave
				timer = setInterval(move, 3000);
			}).mouseleave(); //.trigger("mouseleave");

			// 处理小圆点点击事件
			$("#pages").on("mouseenter", "div", function(){
				// 获取当前点击小圆点的索引
				var index = $(this).index();
				// 判断
				if (index + 1 === currentIndex)
					return;
				nextIndex = index + 1;
				move();
			});
			// 轮播切换图片的函数
			function move(){
				// 计算轮播运动定位位置
				var _left = -1 * nextIndex * imgWidth;
				/* 切换小圆点背景 */
				// 计算当前对应小圆点的索引
				var circleIndex = nextIndex - 1;
				if (nextIndex === 0)
					circleIndex = len - 3;
				else if (nextIndex === len - 1)
					circleIndex = 0;
				// 添加/删除样式
				$("#pages div").eq(circleIndex).addClass("current")
							   .siblings().removeClass("current");


				// 运动定位
				$("#imgs").stop().animate({left:_left}, function(){
					// 判断 nextIndex 取值
					if (nextIndex >= len) { // 还原初始状态
						currentIndex = 1;
						nextIndex = 2;
						$("#imgs").css("left", -imgWidth);
					} 
					if (currentIndex === 0) {
						currentIndex = len - 2;
						nextIndex = len - 1;
						$("#imgs").css("left", -(len-2)*imgWidth);
					}
				});

				// 修改索引值
				currentIndex = nextIndex;
				nextIndex++;
			}

				 //土货模板加载
		          $.getJSON("/mock/localproducts.json",function(data){         	
					var html = template("fir_lR_temp",{products:data})
					  $(".localproducts_fir_lR").html(html);
				});
		          //水果模板加载
		          $.getJSON("/mock/fruits.json",function(data){         	
					var html = template("fruits-fir_lR_temp",{products:data})
					  $(".fruits_fir_lR").html(html);
		        });
		          //零食模板加载
		          $.getJSON("/mock/snacks.json",function(data){         	
					var html = template("snacks-fir_lR_temp",{products:data})
					  $(".snacks_fir_lR").html(html);
				});
		          //礼盒模板加载
		          $.getJSON("/mock/giftbox.json",function(data){         	
					var html = template("giftbox-fir_lR_temp",{products:data})
					  $(".giftbox_fir_lR").html(html);
				});

		          //点击购物车fly的动作
		          $(".flybtn").on("click", ".fir_lsadd",function(e){
						var offset = $(".cart_info").offset();
						var flyer = $("<img src='img/fly.jpg' style='width:40px;height:40px;'>");
						flyer.fly({
							start:{
								left : e.clientX,
								top : e.clientY
							},
							end:{
								left: offset.left - $(window).scrollLeft(),
								top: offset.top - $(window).scrollTop(),
								width : 0,
								height : 0
							}
						});				     
					});
		});
	});