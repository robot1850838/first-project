// var _imgs = $("li", $("#imgs")),
// 			len = _imgs.length,
// 			imgWidth = _imgs[0].offsetWidth,
// 			timer = null,
// 			currentIndex = 0,
// 			nextIndex = 1,
// 			circles = null;

// 		// 复制第一张图片盒子内容，添加到 ul#imgs 最后
// 		var first = _imgs[0].cloneNode(true);
// 		$("#imgs").appendChild(first);

// 		var html = "";
// 		for (let i = 0; i < len; i++) {
// 			html += `<div class="${i===0?'current':''}"></div>`;
// 		}
// 		$("#pages").innerHTML = html;
// 		circles = $("div", $("#pages"));
//        circles[0].innerHTML = "玉满脂香·谢“蟹”有礼";
// 	   circles[1].innerHTML =  "混合谷物 健康代餐";
// 	   circles[2].innerHTML =  "富硒·养生——龙山百合";
// 	   circles[3].innerHTML = "徐香猕猴桃·养颜长生果";
// 	   circles[4].innerHTML =  "散养土鸡蛋";
// 		// 图片总张数增加1
// 		len += 1;
// 		// 设置 ul#imgs 盒子的宽度
// 		css($("#imgs"), "width", len * imgWidth + "px");
//          $("#container").onmouseenter = function(){
//   	      	  clearInterval(timer);
//   	      }
//   	      $("#container").onmouseleave = function(){
//   	      	  timer = setInterval(move,2000);
//   	      }
// 		// 自动轮播
// 		timer = setInterval(move, 3000);
//         on($("#pages"),"mouseover",function(e){
//                     e = e || window.event;
//                    var src = e.target || e.srcElement;
//                  for(var i=0;i<circles.length;i++){
//                  	if(src === circles[i]){
//                  		if(currentIndex === i)
//                  			return;
//                  		  nextIndex = i;
//                  		  move();
//                  		  return;
//                  	}               	
//                  }
//   	      })

// 		// 轮播函数
// 		function move() {
// 			// 计算定位
// 			var _left = -1 * nextIndex * imgWidth;
// 			// 运动
// 			animate($("#imgs"), {left: _left}, 400, function(){
// 				if (nextIndex >= len) {
// 					currentIndex = 0;
// 					nextIndex = 1;
// 					$("#imgs").style.left = 0;
// 				}
// 			});
// 			circles[currentIndex].className = "";
// 			var circleIndex = nextIndex >= len - 1 ? 0 : nextIndex;
// 			circles[circleIndex].className = "current";
// 			// 修改索引
// 			currentIndex = nextIndex;
// 			nextIndex++;
// 		}
$(function(){
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
			$("#pages").on("click", "div", function(){
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
		});