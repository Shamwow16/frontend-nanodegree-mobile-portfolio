var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var imageop = require('gulp-image-optimization');


gulp.task('uglify', function () {
return gulp.src(['app/views/js/*.js','app/js/*.js'])
.pipe(uglify())
.pipe(gulp.dest('dist/views/js/'));
});

gulp.task('minifyPortfolio', function () {
return gulp.src('app/css/*.css')
.pipe(minifyCss())
.pipe(gulp.dest('dist/css/'));
});

gulp.task('minifyPizzeria', function () {
return gulp.src('app/views/css/*.css')
.pipe(minifyCss())
.pipe(gulp.dest('dist/views/css'));
});

gulp.task('imageopPortfolio', function () {
return gulp.src(['app/img/*.jpg','app/img/*.png'])
.pipe(imageop())
.pipe(gulp.dest('dist/img/'));
});

gulp.task('imageopPizzeria', function () {
return gulp.src(['app/views/images/*.jpg', 'app/views/images/*.png'])
.pipe(imageop())
.pipe(gulp.dest('dist/views/images/'));
});

gulp.task('default', ['uglify', 'minifyPortfolio', 'minifyPizzeria', 'imageopPortfolio','imageopPizzeria']);



