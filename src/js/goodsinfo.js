require(['config'],function(){
	require(['jquery','gdsZoom'],function($){
		console.log(666);
		var carNum = 0;
		var thisCount = 1;
		var obj={};
		$('<div/>').addClass('headers').load('header.html',function(){
				$(this).insertBefore('.goodsinfo');
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
		//functino getInfo (){
			var id = location.search.substring(1).split('=')[1];
			$.ajax({
				url:'../api/goodsinfo.php',
				data:{
					goodsid:id
				},
				dataType:"json",
				success:function(res){
					console.log(res)
					obj=res;
					//ginfo.init(res);
					//console.log(res[0].goodstitle);
					$(".title").html(res[0].goodstitle);
					ginfo.goodsName.html(res[0].goodstitle);
					ginfo.price.html(res[0].price);
					ginfo.saleout.html(res[0].saleout);
					ginfo.other.html(res[0].other);
					//console.log('../img/'+res[0].bigImg);
					ginfo.goodsimg.attr("src","../img/"+res[0].bigImg);
					ginfo.goodsimg.attr("data-big","../img/"+res[0].bigImg);
					//ginfo.goodsName.html(res[0].goodstitle);
					//ginfo.goodsName.html(res[0].goodstitle);
				}
			})
		//}
		
		//console.log(id);
		$('.goods').gdsZoom({
			position:'right',
			width:350,
			height:350,
			gap:10
		});
		//商品详情页面对象
		var ginfo = {
			goodsimg:$("#goodsimg"),
			goodsName:$("h1"),
			other:$("#other"),
			price:$(".price"),
			count:$("#number"),
			saleout:$("#saleout"),
			pingjia:$("#discuss"),
			pingfen:$("#pingfen"),
			btnjia:$("#jia"),
			btnjian:$("#jian"),
			btnBuy:$("#btnBuy"),
			btnAdd:$("#btnAdd"),
			init:function(res){
				//减少商品
				this.btnjian.click(function(){
					//console.log(this);
					console.log(this.goodsName);
					if(Number(this.count.val())==1){
						num=1;
					}else{
						var num = this.count.val()-1;
						thisCount = num;
					}
					this.count[0].value=num;
				}.bind(this));
				//增加商品
				this.btnjia.click(function(){
					//console.log(this);
					var num = Number(this.count.val())+1;
					this.count[0].value=num;
				}.bind(this));
				//立即购买
				this.btnBuy.click(function(){
					//console.log(this);
				}.bind(this));
				//加入购物车
				this.btnAdd.click(function(e){
					//console.log(this);
					//console.log($(document).scrollTop());
					//console.log(150-$(document).scrollTop());
					//console.log($(".carli")[0].offsetTop);
					var top = e.pageY-50/2;
					var left = e.pageX-50/2;
					$("#goodsimg").clone(false,false).appendTo($('body')).addClass("mini").css({'top':top,'left':left}).animate({top:150+$(document).scrollTop(),left:$(document).width()},1000,function(){
						$('.mini').remove();
						addGoods();
						carNum += Number($("#number").val());
						$('.carli em').html(carNum);
						//console.log($('.carli em'));
						
					});
				}.bind(this));

					
				
			},
			cal:function(){

			},
			shopping:function(){

			},

			getInfo:function(){

			}

		}

		ginfo.init();

		//商品对象
		function Goods (id,num){
			this.top=top;
			this.left=left;
			this.id=id;
			this.num=num;
		}

		Goods.prototype.init = function(){

		}

		function addGoods(){
			console.log(0);
			$ul = $("<ul/>");
			console.log($("#number"));
			$ul.append(`<li class="gli"><input type = "checkbox" class="goodscheck"/><img class="mini2" src="../img/${obj[0].bigImg}"/><i class="carnumber">${$("#number").val()}</i><i class="carprice">${obj[0].price}</i></li>`)
			$ul.appendTo($(".car-list"));
		}

		
	})
})