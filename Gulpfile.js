var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('less', function() {
    return gulp.src('./less/allstyles.less')
        .pipe(less())
        .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe(rename("allstyles.min.css"))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['less']);