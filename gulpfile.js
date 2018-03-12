var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('default', function(){
	return console.log('Gulp Default Test.');
});

//start defining browser-sync task
gulp.task('watch', function(){
	browserSync.init({
		//notify:false,
		server:{
			baseDir:"app"
		}
	});

	//reload browser on changes
	watch('./app/index.html', function(){
		browserSync.reload();
	});

	//inject css on change
	watch('./app/assets/css/*.css', 'cssInjector');
});

gulp.task('cssInjector', function(){
	return gulp.src('./app/assets/css/*.css')
		.pipe(browserSync.stream());
});
