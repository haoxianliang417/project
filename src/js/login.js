require(['config'],function(){
	require(['jquery'],function($){
		//console.log(111)
		var cookies = document.cookie;
		console.log(cookies);
		$("a").eq(1).addClass("active");
		//console.log($("a"));
		$("ul").eq(0).on("click","a",function(){
			$("a").removeClass("active");
			$(this).addClass("active");
			//console.log($("a")[2]);
			if(this===$("a")[2]){
				$("section").hide();
				//$(".other").hide();
				$(".from").show();
                $('li').eq(0).addClass("active2").eq(1).addClass("active2");
			}else{
				$("section").show();
				$(".from").hide();
				//$(".other").show();
			}
		})
		$(".btnLog").on("mouseover",function(){
			$(".btnLog").addClass("overBtn");
		}).on("mouseout",function(){
			$(".btnLog").removeClass("overBtn");
		})

		console.log($(".ac"));
		console.log($(".pw"));
		var loginPage={
			ac:$(".ac"),
			pw:$(".pw"),
			btnLog:$(".btnLog"),
			checkbox:$(".checkbox"),
			errTip:$("#errTip"),
			forget:$(".forget"),

			init:function(){
				this.btnLog.on("click",function(){
					//console.log(666);
					this.select();
				}.bind(this))

				this.forget.on("click",function(){
					
				}.bind(this))
			},

			select:function(){
				//console.log(777);
				$.ajax({
					url:'../api/log_user.php',
					data:{
						account:$(this.ac).val(),
						password:$(this.pw).val(),
						//gender:$('#gender').val()
					},
					success:(res)=>{
						console.log(res);
						if(res){
							if($(this.checkbox).is(":checked")){
								//console.log(666);
								var now = new Date();
								now.setDate(now.getDate()+7);
								document.cookie = 'info=' +'{"account":'+$(this.ac).val()+',"password":'+$(this.pw).val()+'};expires=' + now.toUTCString()+";path=/";
								//console.log(document.cookie);
							};
							location.href="../index.html";
						}else if(res==""){
							$("#errTip").html("账号或密码错误");
						}
					}
				})
			}
		}

		loginPage.init();

	})
})