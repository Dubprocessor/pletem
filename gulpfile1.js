const gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	CSSvars = require('postcss-simple-vars'),
	nestedCSS = require('postcss-nested'),
	CSSimport = require('postcss-import'),
	mixins = require('postcss-mixins'),
	stylelint = require('stylelint'),
	reporter = require('postcss-reporter'),
	validator = require('gulp-html'),
	bs = require('browser-sync'),
	Bundler = require('parcel-bundler'),
	ts = require('gulp-typescript'),
	concat = require('gulp-concat'),
	fs = require('fs');

const tsxProject = ts.createProject('tsconfig.json', {
	exclude: [ 'node_modules', '**/*.ts' ],
	
});
const tsProject = ts.createProject('tsconfig.json', {
	exclude: [ 'node_modules', '**/*.tsx' ],
	
});
gulp.task('tsx', function() {
	return tsxProject.src().pipe(tsxProject()).js.pipe(gulp.dest('./src/compiled'));
});

gulp.task('ts', function() {
	return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('./src/compiled'));
});

gulp.task('concat', function(){
	return gulp.src('./src/compiled/ts/modules/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./public/dist/scripts/minified'));
});

gulp.task('bs', function() {
	bs.init({
		server: {
			baseDir: './public'
		},
		files: [
			'./public/**/*.html',
			'./public/img/**/*.svg',
			'./public/dist/styles/**/*.css',
			'./public/dist/scripts/**/*.js'
		]
	});
});

gulp.task('postcss', function() {
	return gulp
		.src('./src/css/main.css')
		.pipe(postcss([ CSSimport, mixins, CSSvars, nestedCSS, autoprefixer ]))
		.on('error', function(err) {
			console.error('[ERROR]: ', err);
			this.emit('end');
		})
		.pipe(gulp.dest('./src/compiled/css'));
});
gulp.task('minify-css', function() {
	return gulp
		.src('./src/compiled/css/*.css')
		.pipe(sourcemaps.init())
		.pipe(cleanCSS())
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('./public/dist/styles/minified'));
});
gulp.task('stylelint', function() {
	return gulp
		.src('./src/css/main.css')
		.pipe(postcss([ stylelint, reporter({ clearReportedMessages: true }) ]));
});

gulp.task('html', function() {
	return gulp.src('./public/**/*.html').pipe(validator());
});
gulp.task('watch-css', function() {
	gulp.watch([ './src/css/normalize.css', './src/css/**/*.pcss' ], gulp.series('postcss', 'minify-css'));
});
gulp.task('watch-ts', function() {
	gulp.watch([ './src/ts/**/*.ts' ], gulp.series('ts', 'concat'));
});

gulp.task('default', gulp.parallel('bs', 'watch-css', 'watch-ts'));
