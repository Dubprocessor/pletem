import { task, src, lastRun, dest } from 'gulp';
import { createProject } from 'gulp-typescript';
import concat from 'gulp-concat';

const tsProject = createProject('tsconfig.json');

task('ts', function() {
	return src('./src/ts/**/*.ts', { since: lastRun('ts') })
		.pipe(tsProject())
		.js.pipe(dest('./src/compiled'));
});
 
task('concat', function() {
	return src('./src/compiled/ts/modules/**/*.js')
		.pipe(concat('bundle.js'))
		.pipe(dest('./public/dist/scripts/minified'));
});
