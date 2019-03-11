const { promisify } = require('util');
const glob = promisify(require('glob'));
const { parse, resolve } = require('path');
const { mkdir, writeFile } = require('fs');
const { makeDir } = require('./makeDir');
export function generateHTML() {
	glob('./src/compiled/tsx/**/*.js', { ignore: [ './src/compiled/tsx/components/**/*' ] })
		.then((files) => {
			files.forEach(async (file) => {
				// const parsedFilePath = parse(file);
				const dirPath = await makeDir(file);
				// if (files.indexOf(file) !== 0) {
				// 	dirPath = `./src/compiled/temp/pages/${parsedFilePath.dir.split('/').pop()}`;
				// 	await mkdir(dirPath, { recursive: true }, (error) => {
				// 		if (error) throw error;
				// 	});
				// }
				const htmlMarkup = `<!DOCTYPE html>${require(resolve(file)).default()}`;
				try {
					await writeFile(`${dirPath}/index.html`, htmlMarkup, () =>
						console.log('Html file successfully generated!')
					);
				} catch (error) {
					return console.log(error.toString());
				}
			});
		})
		.catch((error) => console.log(error.toString()));
}
