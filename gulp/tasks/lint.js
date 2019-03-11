import { task, src, dest } from 'gulp';
import postcss from 'gulp-postcss';
import stylelint from 'stylelint';
import reporter from 'postcss-reporter';
import conform from 'gulp-html-conformance';

task('stylelint', function() {
	return src('./src/compiled/css/main.css').pipe(postcss([ stylelint, reporter({ clearReportedMessages: true }) ]));
});

task('htmllint', function() {
	return src('./public/pages/faq/index.html').pipe(
		 conform({logToFile: './src/compiled/.temp/vnu.log'})).pipe(dest('./src/compiled/.temp'));
});
