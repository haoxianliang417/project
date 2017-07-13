require(['config'],function(){
	require(['jquery'],function(){
		var id = 0;
		$('<div/>').addClass('headers').load('header.html',function(){
				$(this).insertBefore('.listcontent');
				var times = 0;
				var cookies = document.cookie;
				console.log(cookies);
				if(cookies==""){
					$('.logAndReg').show();
					$(".info").hide();
				}else{
					$('.logAndReg').hide();
					$(".info").show();
					// 以"; "拆分成数组
					var ac_cookie = cookies.split('=')[1].split(",")[0].split(":")[1];
					var pw_cookie = cookies.split('=')[1].split(",")[1].split(":")[1].slice(0,-1);
					console.log(pw_cookie);
					$("#userAc").html(ac_cookie);

				}
				$("#quit").on("click",function(){
					//删除cookie
					var now = new Date();
					now.setDate(now.getDate()-1);
					document.cookie = 'info=' +'{"account":'+$(this.ac).val()+',"password":'+$(this.pw).val()+'};expires=' + now.toUTCString()+";path=/";
					location.href="index.html";
				})
				$(".header").width($(".divHeadBg").width()-50*2)
				//$(".logAndReg").addClass("logAndReg");
				//console.log($(".logAndReg").find("a"));
				//登录
				$(".logAndReg").on("click","a",function(){
					if(this===$(".logAndReg").find("a")[0]){
					}
				})
				//注册
				.on("click","a",function(){
					if(this===$(".logAndReg").find("a")[1]){
					}
				})

				$(".headNav").on("mouseover","li",function(){
					//console.log($(this));
					//console.log($(".headNav").children().eq($(this).index()));
					if(this===$(".headNav").children().eq($(this).index())[0]){
						switch($(this).index()){
						case 0:
							$(".myZhong9").hide()?$(".myZhong9").show():$(".myZhong9").hide();
							//console.log($(".myZhong9").hide());
						break;
						case 1:
						break;
						case 2:
							//console.log($(this).children())
							$(".code").show();
						break;
						case 3:
							$(".mob").show();
						break;
						case 4:
							$(".saleCen").show();
						break;
						case 5:
							$(".netNav").show();
						break;
						case 6:
						break;
						}
						$(this).addClass("active");
					}
					
					
				}).on("mouseleave","li",function(){
					$(this).removeClass("active");
					$(".myZhong9").hide();
					$(".code").hide();
					$(".mob").hide();
					$(".saleCen").hide();
					$(".netNav").hide();
					
				})

				$("label").on("click",function(){
					$(".sear-form ul").show().on("click","li",function(){
						console.log(this);
						$("label").html(this.innerText);
						$(".sear-form ul").hide();
					})
				})
				$(".menu-top li").on("mouseover",function(){
					console.log($(this).index());
					switch($(this).index()){
						case 0:
							$(".menu-top li").eq(0).find("span").show().animate({right:40,opacity:1});
							$(".menu-top li").eq(0).addClass("menuActive");
						break;
						case 2:
							$(".menu-top li").eq(2).find("span").show().animate({right:40,opacity:1});
							$(".menu-top li").eq(2).addClass("menuActive");
						break;
						case 3:
							$(".menu-top li").eq(3).find("span").show().animate({right:40,opacity:1});
							$(".menu-top li").eq(3).addClass("menuActive");
						break;
						case 4:
							$(".menu-top li").eq(4).find("span").show().animate({right:40,opacity:1});
							$(".menu-top li").eq(4).addClass("menuActive");
						break;
					}
					
				}).on("mouseleave",function(){
					$(".menu-top li span").hide().stop(true,true).animate({right:60,opacity:0});;
					$(".menu-top li").removeClass("menuActive");
				})
				$(".carli").on("click",function(event){
					event.stopPropagation();
					//console.log(666)
					times+=1;
					$(".side-content").show();
					$(".right-side").addClass("right-side2");
					$(".right-side").animate({right:0});
					
				});
				$(document).click(function(){
					if(times==0){

					}else{
						$(".right-side").animate({right:-220});
						$(".right-side").removeClass("right-side2");
					}
					
					//$(".side-content").hide();
				})
				$(".right-side").click(function(event){
					event.stopPropagation();
				})
				//console.log($(window).height(),$(".side-top").height(),$(".car-btn").height());
				$(".car-list").height($(window).height()-38-70);
		})
		$.ajax({
			url:'../api/list.php',
			data:{
				goodsid:id,
			},
			dataType:"json",
			success:function(res){
				console.log(res);
				var html = res.map(function(item){
					id=item.goodsid;
					return`
						<li data-id="${item.goodsid}" class="showli"><img src="../img/${item.imgUrl}"/></li>
					`
				}).join("")
				console.log(html);
				$("<ul/>").html(html).appendTo($('.listcontent'));
			}
		})

		// 滚动更多
			$(window).on('scroll',function(){
				console.log(111);
				var scrollTop = $(window).scrollTop();
				var winHeight = $(window).height();
				var scrollHeight = $('html').outerHeight();

				// 如何判断滚动到最底部
				if(scrollTop >= scrollHeight - winHeight - 100){
					if(id == 50) return;
					$.ajax({
						url:'../api/list.php',
						data:{
							goodsid:id,
						},

						// 设定返回数据类型
						dataType:'json',
						success:function(res){
							var $ul = $('<ul/>');
							var html = res.map(function(item){
								id=item.goodsid;
								return`
									<li data-id="${item.goodsid}" class="showli"><img src="../img/${item.imgUrl}"/></li>
								`
							}).join("")

							$("<ul/>").html(html).appendTo($('.listcontent'));

							id+=10;
						}
					});

					// 更新lastPage
					id = id;
				}

			});
		
	})
})