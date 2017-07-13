require.config({
	urlArgs: "bust=" +  (new Date()).getTime(),
	paths:{
		jquery:'../lib/jquery-3.2.1',
		lxCarousel:'../lib/jquery.lxCarousel/jquery.lxCarousel',
		hxgoodlist:'../lib/jquery.hxgoodlist/jquery.hxgoodlist',
		gdsZoom:'../lib/jquery-gdsZoom/jquery.gdsZoom',
		//pageLoad:'./pageLoad'
	},
	shim:{
		lxCarousel:['jquery'],
		hxgoodlist:['jquery'],
		gdsZoom:['jquery'],
		//pageLoad:['jquery']
	}
});