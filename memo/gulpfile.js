var gulp = require('gulp');
var browserify = require('browserify');
var source= require('vinyl-source-stream');

// browserifyを実行しファイル結合を行う
gulp.task('browserify', function() {
  browserify({
    entries: ['./main.js']
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch(['./main.js'], ['browserify']);
});
