'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('make-js', function () {
	return gulp.src('./src/js/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./assets/js'));
});

gulp.task('make-css', function () {
	return gulp.src('./src/less/index.less')
		.pipe(less())
		.pipe(sourcemaps.init())
		.pipe(concat('style.min.css'))
		.pipe(csso())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function () {
	gulp.watch([
		'./src/less/import/*.less'
	], [
		'make-css'
	]);
});

gulp.task('build', ['make-js', 'make-css']);