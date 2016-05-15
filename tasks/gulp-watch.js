'use strict';

var gulp = require('gulp');

gulp.task('watch', () => {
	gulp.watch('src/index.html', gulp.series('index'));
	gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
	gulp.watch('src/images/**/*.{png,jpg,gif}', gulp.series('images'));
	gulp.watch('src/**/!(*.spec).{ts,css,html}', gulp.series('typescript'));
	gulp.watch('src/**/*.spec.ts', gulp.series('unit'));
});
