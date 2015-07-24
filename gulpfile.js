/**
 * Created by AlexLiu on 2015/6/1.
 */


var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),

    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

//var webpack = require('webpack-stream');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

var path = require('path');

function getStylePath(arr){
    var stylePath = './src/styles/';
    return arr.map(function(item){
        return [stylePath, item, '.scss'].join('');
    });
}

//'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
console.log(getStylePath(['reset', 'main']));
gulp.task('styles', function() {
    return gulp.src(getStylePath(['main']))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(livereload())
         //.pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
});

//gulp.task("webpack", function(callback) {
//    // run webpack
//    return gulp.src('src/App.js')
//        .pipe(webpack({
//            module: {
//                loaders: [{
//                    test: /\.jsx?$/,
//                    loaders: ['react-hot', 'babel'],
//                    include: path.join(__dirname, 'src')
//                }]
//            }
//        }))
//        .pipe(gulp.dest('dest/assets/js'))
//        .pipe(livereload());
//});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        // configuration
    }, function(err, stats) {
        //if(err) throw new gutil.PluginError("webpack", err);
        //gutil.log("[webpack]", stats.toString({
        //    // output options
        //}));
        callback();
    });
});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var port = 3000;
    var globalPath = '192.168.1.107';
    new WebpackDevServer(webpack(webpackConfig), {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        historyApiFallback: true
    }).listen(port, 'localhost', function (err, result) {
          if (err) {
              console.log(err);
          }

          console.log('Listening at localhost:' + port);
      });


});

//watch
gulp.task('watch', function() {

    // Create LiveReload server
    livereload.listen();
    console.log('livereload server active');
    // Watch .scss files
    gulp.watch('src/styles/**/*.scss', ['styles']);
    // Watch .js files
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    // Watch image files
    gulp.watch('src/images/**/*', ['images']);
    //gulp.watch('src/js/**/*.js', ['webpack']);




    //gulp.watch(['dist/assets/css/main.css']).on('change', livereload.changed);

});

gulp.task('default', ['clean'], function() {
    gulp.run('styles', 'scripts', 'images', 'watch'); //, 'webpack-dev-server'

    //gulp.run('watch');
});


