var gulp = require('gulp');

//load dependencies
var clean = require('gulp-clean'),
    gulpSequence = require('gulp-sequence'),
    typescript = require('gulp-typescript'), 
    sourcemaps = require('gulp-sourcemaps'),
    mocha = require('gulp-mocha');

var tsProject = typescript.createProject('tsconfig.json')

gulp.task('default', function() {

});

gulp.task('build', function() {

    // var destPath = 'build';

    // gulp.dest(destPath)
    //     .pipe(clean());

    // var tsResult = gulp.src('app/**/*.ts')
    //     .pipe(tsProject());

    // gulp.dest(destPath)
    //     .pipe(clean())
    //     .pipe(tsResult.js)

    // // tsResult.js.pipe(gulp.dest('build'))

});

gulp.task('_appTranspil', function(){

    //create a ts stram
    var tsResults = gulp.src('./app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return tsResults.js
        .pipe(sourcemaps.write('./'))   //create map files
        .pipe(gulp.dest('./app'))          //dump js+map files to directory

});

gulp.task('_appClean', function(){

    return gulp.src(['./app/**/*.js', './app/**/*.js.map'])
        .pipe(clean());

})

gulp.task('test',  gulpSequence(['_testClean','_appClean'], ['_testTranspil', '_appTranspil'], '_testRun'));

gulp.task('_testClean', function() {

     return gulp.src(['./test/**/*.spec.js', './test/**/*.spec.js.map'])
        .pipe(clean());

});

gulp.task('_testTranspil', function() {

    //create a ts stram
    var tsResults = gulp.src('./test/**/*.spec.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript({
            "module": "commonjs",
            "target": "es5",
            "noImplicitAny": false,
            "sourceMap": true,
        }));

    return tsResults.js
        .pipe(sourcemaps.write('./')) //create map files
        .pipe(gulp.dest('./test/'))   //dump js+map files to directory

});

gulp.task('_testRun', function() {

    return gulp.src(['./test/**/*.spec.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', console.error);

});
