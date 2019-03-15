import { task, src, lastRun, dest } from 'gulp';
import { createProject } from 'gulp-typescript';
import concat from 'gulp-concat';

const tsProject = createProject('tsconfig.json');

task('ts', function() {
	return src('./src/ts/**/*.ts', { since: lastRun('ts') })
		.pipe(tsProject())
		.js.pipe(dest('./src/compiled/ts'));
});
 
task('concat', function() {
	return src(['./src/compiled/ts/**/*.js', '!./src/compiled/ts/siteData.js'])
		.pipe(concat('bundle.js'))
		.pipe(dest('./public/dist/scripts/minified'));
});
