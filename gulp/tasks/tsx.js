import { task, src, lastRun, dest } from 'gulp';
import { createProject } from 'gulp-typescript';

const tsProject = createProject('tsconfig.json');

task('tsx', function() {
	return src('./src/tsx/**/*.tsx', { since: lastRun('tsx') })
		.pipe(tsProject())
		.js.pipe(dest('./src/compiled/tsx'));
});