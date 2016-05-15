'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

gulp.task('changelog', () => {
	return gulp.src('CHANGELOG.md', { buffer: false })
		.pipe(plugins.conventionalChangelog({ preset: 'angular'	}))
		.pipe(gulp.dest('./'));
});
