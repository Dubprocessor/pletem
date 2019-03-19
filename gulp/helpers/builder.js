import { resolve } from 'path';
import { writeFile, stat } from 'fs';

import decache from "decache";
import { makeDir } from './makeDir';
import { formatFileSize } from './formatFileSize';

export function builder (file) {
    if (file.includes('components') || file.includes('siteData')) {
        console.log(`[Changed component]: ${file}`);
        const consumers = require(resolve(file)).consumers;
        console.log(consumers)
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
}