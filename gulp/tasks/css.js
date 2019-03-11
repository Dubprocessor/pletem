import { task, src, dest } from 'gulp';
import cleanCSS from 'gulp-clean-css';
import { init, write } from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import CSSvars from 'postcss-simple-vars';
import nestedCSS from 'postcss-nested';
import CSSimport from 'postcss-import';
import mixins from 'postcss-mixins';

task('postcss', function() {
	return src('./src/css/main.css')
		.pipe(postcss([ CSSimport, mixins, CSSvars, nestedCSS, autoprefixer ]))
		.on('error', function(err) {
			console.error('[ERROR]: ', err.toString());
			this.emit('end');
		})
		.pipe(dest('./src/compiled/css'));
});
task('minify-css', function() {
	return src('./src/compiled/css/*.css')
		.pipe(init())
		.pipe(cleanCSS())
		.pipe(write('../maps'))
		.pipe(dest('./public/dist/styles/minified'));
});
