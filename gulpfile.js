var gulp = require('gulp'),
  browserify = require('browserify'),
  reactify = require('reactify');

gulp.task('materialize', function() {
return gulp.src('bower_components/materialize/bin/materialize.css')
  .pipe(gulp.dest('public/css'));
});

gulp.task('site', ['materialize'], function() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('public'));
});

gulp.task('server', function () {
  connect.server({
    root: 'public',
    port: 9000
  });
});

gulp.task('default', ['server', 'site']);