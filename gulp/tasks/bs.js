import { task } from 'gulp';
import { init } from 'browser-sync';

task('bs', function() {
	init({
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
