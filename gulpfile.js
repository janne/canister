var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify);
  b.add('./src/main.jsx');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['browserify']);
});

gulp.task('webserver', function() {
  gulp.src('.')
  .pipe(webserver({
    livereload: true,
    open: true
  }));
});

gulp.task('default', ['browserify', 'watch', 'webserver']);
