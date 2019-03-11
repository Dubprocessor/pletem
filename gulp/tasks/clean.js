import { task, src } from 'gulp';
import clean from 'gulp-clean';

task('clean', function(){
    return src('./src/compiled/.temp', {read: false})
    .pipe(clean())
});