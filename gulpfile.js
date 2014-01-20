var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var browserify = require('gulp-browserify');

gulp.task('default', function(){
	gulp.run('build');
	gulp.run('watch');
});

gulp.task('test', function(){
	gulp.run('build');
	gulp.run('mocha');
});

gulp.task('build', function(){
	gulp.run('scripts');

});

gulp.task('scripts', function(){
    gulp.run('coffee');
	gulp.run('browserify');
})

gulp.task('watch', function(){
	nodemon({ script: 'app.js', options: '-e js -i client/engine.js' })
   	gulp.watch('coffee/*.coffee', function(){
		gulp.run('scripts');
	});
});

gulp.task('mocha', ['build'], function(){
	gulp.src('test/*.js')
		.pipe(mocha({reporter: 'nyan'}))
});

gulp.task('coffee', function(){
	gulp.src('app.coffee')
		.pipe(coffee().on('error',gutil.log))
		.pipe(gulp.dest('./'));
	gulp.src('./coffee/*.coffee')
		.pipe(coffee().on('error',gutil.log))
		.pipe(gulp.dest('./build/js/'))
});
gulp.task('browserify', ['coffee'], function(){
	gulp.src('build/js/engine.js')
		.pipe(browserify())
		.pipe(gulp.dest('./client/js/'))
});