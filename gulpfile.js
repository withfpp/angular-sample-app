var gulp = require('gulp'),

//plugins
gutil = require('gulp-util'),
sass = require('gulp-sass'),
uglify = require('gulp-uglify'),
minify = require('gulp-minify-css'),
rename = require('gulp-rename'),
browserSync = require('browser-sync'),
reload = browserSync.reload,
concat = require('gulp-concat'),
rimraf = require('gulp-rimraf'),
plumber = require('gulp-plumber'),
autoprefixer = require('gulp-autoprefixer'),
notify = require('gulp-notify'),
bower = require('gulp-bower');

var paths = {
  styles : ['app/styles/styles.scss'],
  js : ['app/*.js','app/**/*.js','!app/bower_components/**/*.js'],
  views : ['app/**/*.html'],
  dest : '.dist',
  bower: 'app/bower_components'
}

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: ".dist"
    }
  });
});

// Styles
gulp.task('styles', function() {
  return gulp.src(paths.styles)
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(paths.dest + '/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify())
    .pipe(concat('main.css'))
    .pipe(gulp.dest(paths.dest + '/styles'))
    .pipe(notify({ message: 'Hello, Jin || Sarah || Chris' }));
});


gulp.task('scripts', function(){
  return gulp.src(paths.js)
    .pipe(concat('app.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(paths.dest));
})

gulp.task('views', function() {
  gulp.src(paths.views)
    .pipe(gulp.dest(paths.dest));
});

gulp.task('clean', function() {
  gulp.src(paths.dest)
    .pipe(rimraf({force: true}));
});

gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles', browserSync.reload]);
  gulp.watch(paths.js, ['scripts', browserSync.reload]);
  gulp.watch(paths.views, ['views', browserSync.reload]);
})

gulp.task('bower', function() { 
  return bower()
     .pipe(gulp.dest(paths.dest + '/bower_components')) 
});


gulp.task('init', ['styles', 'scripts', 'views', 'bower']);

gulp.task('dev', ['styles','scripts','views']);

gulp.task('rebuild', ['clean', 'init']);

gulp.task('default', ['dev', 'browser-sync', 'watch']);


