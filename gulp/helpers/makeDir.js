import { parse } from 'path';
import { mkdirSync, stat } from 'fs';

export function makeDir(file) {
	const parsedFilePath = parse(file);
	const { ext, dir } = parsedFilePath;
	const dirName = dir.split('/').pop();
	let dirPath;
	switch (ext) {
		case '.tsx':
			if (file === 'src/tsx/index.tsx') {
				dirPath = 'src/compiled/tsx';
			} else if (file.includes('pages')) {
				dirPath = `./src/compiled/tsx/pages/${dirName}`;
			} else {
				dirPath = './src/compiled/tsx/components';
			}
			break;
		case '.js':
			if (file === 'src/compiled/tsx/index.js') {
				dirPath = './public';
			} else {
                dirPath = `./public/pages/${dirName}`;
            }
			break;
		default:
	}
    
	mkdirSync(dirPath, { recursive: true }, (error) => {
		if (error) throw error;
	});
	return dirPath;
}
