var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('stylus', function () {
  gulp.src('./public/styl/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('watch', function() {
  gulp.watch('./public/styl/*.styl', ['stylus']);
});

gulp.task('browser-sync', function() {
  var config = require('./config/config');
  browserSync.init(null, {
  		proxy: 'http://localhost:' + config.server.port,
          files: ['public/**/*.*'],
          browser: 'google chrome',
          port: 7000,
  });
});

gulp.task('develop', function () {
  nodemon({
    script: 'app.js',
    ext: 'js pug',
    env: { 'NODE_ENV': 'development' },
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^App listening on/.test(chunk)){
        reload();
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'stylus',
  'develop',
  'watch',
  'browser-sync'
]);
