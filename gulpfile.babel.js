import { task, parallel } from 'gulp';
import './gulp/tasks/bs';
import './gulp/tasks/ts';
import './gulp/tasks/css';
import './gulp/tasks/lint';
import './gulp/tasks/watch';
import './gulp/tasks/clean';

task('default', parallel('bs', 'watch-css', 'watch-ts', 'watch-tsx', 'watch-compiled-js'));
