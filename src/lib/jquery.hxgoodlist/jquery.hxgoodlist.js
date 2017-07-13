;(function($){
	$.fn.hxgoodlist=function(options){
		var defaults={

		}

		var opt = $.extend({},defaults,options);
		//url:'../../spi/hxgoodlist.php'
		return this.each(function(idx,ele){
			//console.log(ele);
			var $self = $(ele);
			//console.log($self);
			var tabNum = opt.tabArr.length;
			var $div=$("<div/>").addClass("tabHead");
			var html = opt.tabArr.map(function(item){
				return `
					<a class="tab">${item}</a>
				`
			}).join("");
			html +='<a class="more">更多>></a>';
			//console.log(html);
			$div.append(html);
			$div.appendTo($self);
			

			$.ajax({
				url:opt.goodurl,
				success:(res)=>{
					for(var i=0;i<tabNum;i++){
					//if(i==0){
						//$("<div/>").appendTo($self);
					//}else{
					$("<div/>").addClass("tabConter").appendTo($self);
					//}
					$('<ul/>').appendTo($(".tabConter").eq(i));
					}
					//console.log(res);
					var [list0,list1,list2,list3,list4] = ["","","","",""];
					JSON.parse(res).map(function(item){
					//console.log(item.imgUrl,item.classify);
						//console.log(typeof item.classify);
						switch(item.classify){
							case "0":
							//console.log($(".tabConter").eq(0).children());
							list0 +=`<li class="list" data-id="${item.goodsid}"><img src="img/${item.imgUrl}"/></li>`;
							break;
							case "1":
							list1 +=`<li class="list" data-id="${item.goodsid}"><img src="img/${item.imgUrl}"/></li>`;
							break;
							case "2":
							list2 +=`<li class="list" data-id="${item.goodsid}"><img src="img/${item.imgUrl}"/></li>`;
							break;
							case "3":
							list3 +=`<li class="list" data-id="${item.goodsid}"><img src="img/${item.imgUrl}"/></li>`;
							break;
							case "4":
							list4 +=`<li class="list" data-id="${item.goodsid}"><img src="img/${item.imgUrl}"/></li>`;
							break;
						}
						//console.log(list0);
						
						$(".tabConter").eq(1).children().html(list1);
						$(".tabConter").eq(2).children().html(list2);
						$(".tabConter").eq(3).children().html(list3);
						$(".tabConter").eq(4).children().html(list4);
						$(".tabConter").eq(0).children().html(list0);
						$(".tabConter").hide();
						$(".tabConter").eq(0).show();
						return  
					}).join("");

					$(".list").click(function(){
						//console.log(this);
						var id = $(this).data("id");
						location.href = "./html/goodsinfo.html?id="+id;
					})
				}
			});
			$(".tab").eq(0).addClass("active");
			//console.log($("div").find(".tabConter"));
			$self.on("mouseenter",".tab",function(){
				//console.log(this);
				var idx = $(this).index();
				//console.log(idx);
				//console.log($(".tabConter"));
				//console.log($(".tabConter").eq(0));
				for(var i=0;i<tabNum;i++){
					$(".tab").eq(i).removeClass("active");
					$(".tabConter").eq(i).hide();
				}
				$(".tab").eq(idx).addClass("active");
				$(".tabConter").eq(idx).show();
			})
			
		});
	}
})(jQuery);