import glob from 'glob';
import { builder } from '../helpers/builder';

import { task } from 'gulp';

task('generate-html', function () {
    return glob('./src/compiled/tsx/{index,pages/**/*}.js', function (error, files) {
        if (error) {
            console.log(error)
        }
        files.forEach((file) => builder(file));
    })
})