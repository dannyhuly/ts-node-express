var gulp = require('gulp');

//load dependencies
var clean = require('gulp-clean'),
    typescript = require('gulp-typescript'), 
    sourcemaps = require('gulp-sourcemaps');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('default', function() {

});

gulp.task('build', function() {

    var destPath = 'build';

    gulp.dest(destPath)
        .pipe(clean());

    var tsResult = gulp.src('app/**/*.ts')
        .pipe(tsProject());

    gulp.dest(destPath)
        .pipe(clean())
        .pipe(tsResult.js)

    // tsResult.js.pipe(gulp.dest('build'))

});