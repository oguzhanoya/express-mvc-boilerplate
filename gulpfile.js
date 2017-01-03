const gulp = require('gulp');
const stylus = require('gulp-stylus');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');

const reload = browserSync.reload;
const config = require('./config/config');

gulp.task('stylus', () => {
  gulp.src('./public/styl/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({ stream: true }));
});

gulp.task('watch', () => {
  gulp.watch('./public/styl/*.styl', ['stylus']);
});

gulp.task('browser-sync', () => {
  browserSync.init(null, {
    proxy: `http://localhost:${config.server.port}`,
    files: ['public/**/*.*'],
    browser: 'google chrome',
    port: 7000,
  });
});

gulp.task('develop', () => {
  nodemon({
    script: 'app.js',
    ext: 'js pug',
    env: { NODE_ENV: 'development' },
    stdout: false,
    // eslint-disable-next-line func-names
  }).on('readable', function () {
    this.stdout.on('data', (chunk) => {
      if (/^App listening on/.test(chunk)) {
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
  'browser-sync',
]);
