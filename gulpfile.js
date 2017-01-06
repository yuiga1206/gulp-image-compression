const gulp  = require('gulp'),
imagemin    = require('gulp-imagemin'),
jpegtran    = require('imagemin-jpegtran'),
pngquant    = require('imagemin-pngquant');

var running_tasks = [
  'imagemin'
];


// compress images
gulp.task('imagemin', function() {
  gulp.src("dev_img/**/*.+(jpg|jpeg)")
      .pipe(imagemin(
          [jpegtran({progressive: true})]
      ))
      .pipe(gulp.dest("img/"));
  gulp.src("dev_img/**/*.+(png|gif|svg)")
    .pipe(imagemin(
      [pngquant({
        quality: "60-80",
        speed: 1
      })]
    ))
    .pipe(imagemin())
    .pipe(gulp.dest("img/"));
});


gulp.task('default', running_tasks, function() {
  gulp.watch(['dev_img/img/*'],['imagemin']);
});
