import glob from 'glob';
import { builder } from './gulp/helpers/builder';

import { task, parallel, series } from 'gulp';
import './gulp/tasks/bs';
import './gulp/tasks/tsx';
import './gulp/tasks/ts';
import './gulp/tasks/css';
import './gulp/tasks/lint';
import './gulp/tasks/watch';
import './gulp/tasks/clean';

task('default', parallel('bs', 'watch-css', 'watch-ts', 'watch-tsx', 'watch-compiled-js'));

task('generate-html', function(){
    return glob('./src/compiled/tsx/**/*.js', function (error, files){
        if (error) {
            console.log(error)
        }
        files.forEach((file) => builder(file));
        
        })
})
task('build', series('postcss', 'minify-css', 'ts', 'concat', 'tsx', 'generate-html' ));
