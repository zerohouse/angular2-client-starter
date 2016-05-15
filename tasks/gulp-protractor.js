'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

var typescript = require('typescript'),
	webdriver = require('gulp-protractor').webdriver_update,
	del = require('del');

var project = plugins.typescript.createProject('tsconfig.json', {
	typescript,
	module: 'commonjs'
});

function protractorClean() {
	return del(['.protractor']);
}

function protractorTypescript() {
	var root = 'e2e';
	var glob = 'e2e/**/*.ts';
	var dest = '.protractor';

	return gulp.src(glob)
		.pipe(plugins.tslint())
		.pipe(plugins.tslint.report('verbose'))
		.pipe(gulp.src(env.typings, { passthrough: true }))
		.pipe(plugins.typescript(project)).js
		.pipe(plugins.size({ title: 'typescript' }))
		.pipe(gulp.dest(dest));
}

function protractorUpdateWebdriver(done) {
	webdriver({}, done);
}

function protractorRun() {
	return gulp.src('.protractor/**/*.spec.js')
		.pipe(plugins.protractor.protractor({
			configFile: 'protractor.conf.js'
		}))
		.on('error', e => { throw e })
}

gulp.task('e2e', gulp.series(
	protractorClean,
	protractorTypescript,
	protractorUpdateWebdriver,
	protractorRun,
	protractorClean
));
