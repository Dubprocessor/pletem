import { task, parallel, series } from 'gulp';
import './gulp/tasks/bs';
import './gulp/tasks/tsx';
import './gulp/tasks/ts';
import './gulp/tasks/css';
import './gulp/tasks/lint';
import './gulp/tasks/watch';
import './gulp/tasks/clean';
import './gulp/tasks/generate-html';

task('default', parallel('bs', 'watch-css', 'watch-ts', 'watch-tsx', 'watch-compiled-js'));

task('build', series('postcss', 'minify-css', 'ts', 'concat', 'tsx', 'generate-html' ));
