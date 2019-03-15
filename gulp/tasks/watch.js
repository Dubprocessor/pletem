import { resolve } from 'path';

import { task, src, dest, watch, series } from 'gulp';
import decache from "decache";
import { createProject } from 'gulp-typescript';
import { writeFile, stat } from 'fs';
import { makeDir } from '../helpers/makeDir';
import { formatFileSize } from '../helpers/formatFileSize';

task('watch-css', function() {
	watch([ './src/css/**/*.css', './src/css/**/*.pcss' ], series('postcss', 'minify-css'));
});
task('watch-ts', function() {
	watch([ './src/ts/**/*.ts' ], series('ts', 'concat'));
});

task('watch-compiled-js', function() {
	watch([ './src/compiled/tsx/**/*.js' ]).on('change', function(file) {
		if (file.includes('components')) {
			console.log(`[Changed component]: ${file}`);
			const consumers = require(resolve(file)).consumers;
			consumers.forEach((consumer) => {
				console.info(`[Starting generate HTML for]: ${consumer}`);
				const dirPath = makeDir(consumer);
				
				decache(`${resolve(file)}`);
				decache(`${resolve(consumer)}`);

				const pageMarkup = require(resolve(consumer)).default();

				const docMarkup = `<!DOCTYPE html>${pageMarkup}`;

				writeFile(`${dirPath}/index.html`, docMarkup, () =>
					stat(`${dirPath}/index.html`, (error, stats) => {
						if (error) throw error;
						if (stats.isFile()) {
							console.info('Html file successfully generated!', `size : ${formatFileSize(stats.size)}`);
						}
					})
				);
			});
		} else {
			decache(`${resolve(file)}`);
			console.info(`[Starting generate HTML for]: ${file}`);
			const dirPath = makeDir(file);
			const pageMarkup = require(resolve(file)).default();
			const docMarkup = `<!DOCTYPE html>${pageMarkup}`;

			writeFile(`${dirPath}/index.html`, docMarkup, () =>
				stat(`${dirPath}/index.html`, (error, stats) => {
					if (error) throw error;
					if (stats.isFile()) {
						console.info('Html file successfully generated!', `size : ${formatFileSize(stats.size)}`);
					}
				})
			);
		}
	});
});
task('watch-tsx', function() {
	watch([ './src/tsx/**/*.tsx' ], { awaitWriteFinish: true }).on('change', function(file) {
		const tsxProject = createProject('tsconfig.json');
		console.info(`[Transpiling file]: ${file}`);
		let dirPath = makeDir(file);
		return src(file).pipe(tsxProject()).js.pipe(dest(`${dirPath}`));
	});
});
