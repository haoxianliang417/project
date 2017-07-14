require(['config'],function(){
	require(['jquery'],function($){
		//创建页面对象并声明属性和方法
		var regPage={
			ac:$("#ac"),
			pw:$("#pw"),
			spw:$("#spw"),
			btnReg:$(".btnReg"),
			check : function(){
			//console.log($(this.ac).val())
			if(!(/^1[34578]\d{9}$/.test($(this.ac).val()))){ 
       			console.log("手机号码有误，请重填");  
        		return false; 
    		}
    		if(!(/^[a-z0-9_-]{6,18}$/.test($(this.pw).val()))){
    			console.log("手机密码有误，请重填");  
    			return false;
    		}
    		var idx=0;
    		for(var i=0;i<($(this.pw).val()).length;i++){
    			console.log(($(this.pw).val())[i]);
    			console.log(($(this.spw).val())[i]);
    			//try{
    				if(($(this.pw).val())[i]==($(this.spw).val())[i]){
    					idx=i;
    					console.log(idx);
    				}else{
    					//idx=i;
    				}
    			//}catch(e){
    				
    			//}
    			if(idx+1==$(this.pw).val().length){
    				//console.log("注册成功");
    				console.log($(this.ac).val());
    				console.log($(this.pw).val());
    				$.ajax({
					url:'../api/create_user.php',
					data:{
						account:$(this.ac).val(),
						password:$(this.pw).val(),
						//gender:$('#gender').val()
					},
					success:(res)=>{
						console.log(res);
							if(res){
								var now = new Date();
								now.setDate(now.getDate()+1);
								document.cookie = 'info=' +'{"account":'+$(this.ac).val()+',"password":'+$(this.pw).val()+'};expires=' + now.toUTCString()+";path=/";
								location.href="../index.html"
							}
							
						}
					});
				}
    		}
   
		},
			init:function(){
				this.btnReg.on("click",function(){
				console.log(this);
				this.check();
				}.bind(this));
			}
		}
		
		regPage.init();
	})
})