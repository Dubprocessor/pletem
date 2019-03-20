import { resolve } from 'path';

import { task, src, dest, watch, series } from 'gulp';
import decache from "decache";
import { createProject } from 'gulp-typescript';
import { writeFile, stat } from 'fs';
import { makeDir } from '../helpers/makeDir';
import { builder } from '../helpers/builder';
import { formatFileSize } from '../helpers/formatFileSize';

task('watch-css', function () {
	watch(['./src/css/**/*.css', './src/css/**/*.pcss'], series('postcss', 'minify-css'));
});
task('watch-ts', function () {
	watch(['./src/ts/**/*.ts'], series('ts', 'concat'));
});

task('watch-compiled-js', function () {
	watch(['./src/compiled/tsx/**/*.js', './src/compiled/ts/siteData.js'])
		.on('change', (file) => builder(file))
});
task('watch-tsx', function () {
	watch(['./src/tsx/**/*.tsx'], { awaitWriteFinish: true }).on('change', function (file) {
		const tsxProject = createProject('tsconfig.json');
		console.info(`[Transpiling file]: ${file}`);
		let dirPath = makeDir(file);
		console.log(dirPath)
		return src(file).pipe(tsxProject()).on('error', function (err) {
			console.error('[ERROR]: ', err.toString());
			this.emit('end');
		}).js.pipe(dest(`${dirPath}`));
	});
});
