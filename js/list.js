require(["config"],function(){
    require(["jquery","load","loadnav"],function($){
          var imgboxs = $("#list-h li"),
              len = imgboxs.length,
              imgWidth = imgboxs.outerWidth(), // 轮播图片盒子的宽度
				currentIndex = 1, // 当前显示图片索引
				nextIndex = 2; // 即将显示图片索引

			// 复制第一个/最后一个图片盒子
			var first = imgboxs.clone(true),
				last = imgboxs.last().clone(true);
			// 添加到 ul 内部
			$("#list-h").append(first)
					  .prepend(last);
			// 因为多添加了两张图片，所以修改len
			len += 5;
			// 计算 ul#list-h 宽度，默认显示内容1的图片
			$("#list-h").width(imgWidth*len)
					  .css("left", -imgWidth);

		   	// 向上/下翻页
			$("#spec-left").click(function(){
				console.log("ss");
				nextIndex = currentIndex - 1;
				move();
			});
			$("#spec-right").click(move);

	function move(){
				// 计算轮播运动定位位置
				var _left = -1 * nextIndex * imgWidth;
				// 运动定位
				$("#list-h").stop().animate({left:_left}, function(){
					// 判断 nextIndex 取值
					console.log("ss");
					if (nextIndex >= len) { // 还原初始状态
						currentIndex = 1;
						nextIndex = 2;
						$("#list-h").css("left", -imgWidth);
					} 
					if (currentIndex === 0) {
						currentIndex = len - 5;
						nextIndex = len - 4;
						$("#list-h").css("left", -(len-7)*imgWidth);
					}
				});

				// 修改索引值
				currentIndex = nextIndex;
				nextIndex++;
          }
    });
});