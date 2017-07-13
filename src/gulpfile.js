var gulp =require("gulp");
var sass = require("gulp-sass");
gulp.task("buildCss",function(){
	//console.log("haha,ok");
	gulp.src("./sass/header.scss")
	.pipe(sass({
		outputStyle:"expanded"
	}))
	.pipe(gulp.dest("./css/"));
})