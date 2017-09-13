var _imgs = $("li", $("#imgs")),
			len = _imgs.length,
			imgWidth = _imgs[0].offsetWidth,
			timer = null,
			currentIndex = 0,
			nextIndex = 1,
			circles = null;

		// 复制第一张图片盒子内容，添加到 ul#imgs 最后
		var first = _imgs[0].cloneNode(true);
		$("#imgs").appendChild(first);

		var html = "";
		for (let i = 0; i < len; i++) {
			html += `<div class="${i===0?'current':''}"></div>`;
		}
		$("#pages").innerHTML = html;
		circles = $("div", $("#pages"));
       circles[0].innerHTML = "玉满脂香·谢“蟹”有礼";
	   circles[1].innerHTML =  "混合谷物 健康代餐";
	   circles[2].innerHTML =  "富硒·养生——龙山百合";
	   circles[3].innerHTML = "徐香猕猴桃·养颜长生果";
	   circles[4].innerHTML =  "散养土鸡蛋";
		// 图片总张数增加1
		len += 1;
		// 设置 ul#imgs 盒子的宽度
		css($("#imgs"), "width", len * imgWidth + "px");
         $("#container").onmouseenter = function(){
  	      	  clearInterval(timer);
  	      }
  	      $("#container").onmouseleave = function(){
  	      	  timer = setInterval(move,2000);
  	      }
		// 自动轮播
		timer = setInterval(move, 3000);
        on($("#pages"),"mouseover",function(e){
                    e = e || window.event;
                   var src = e.target || e.srcElement;
                 for(var i=0;i<circles.length;i++){
                 	if(src === circles[i]){
                 		if(currentIndex === i)
                 			return;
                 		  nextIndex = i;
                 		  move();
                 		  return;
                 	}               	
                 }
  	      })

		// 轮播函数
		function move() {
			// 计算定位
			var _left = -1 * nextIndex * imgWidth;
			// 运动
			animate($("#imgs"), {left: _left}, 400, function(){
				if (nextIndex >= len) {
					currentIndex = 0;
					nextIndex = 1;
					$("#imgs").style.left = 0;
				}
			});
			circles[currentIndex].className = "";
			var circleIndex = nextIndex >= len - 1 ? 0 : nextIndex;
			circles[circleIndex].className = "current";
			// 修改索引
			currentIndex = nextIndex;
			nextIndex++;
		}
