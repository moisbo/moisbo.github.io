var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('build', function() {
    gulp.src(['vendor/bootstrap/dist/css/bootstrap.min.css',
        'vendor/angular-loading-bar/build/loading-bar.min.css'])
        .pipe(gulp.dest('css/vendor'));
    gulp.src(['vendor/bootstrap/fonts/glyphicons-halflings-regular.woff',
        'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2'])
        .pipe(gulp.dest('css/fonts'));
    gulp.src(['scripts/**'])
        .pipe(concat('index.js'))
        .pipe(gulp.dest('js'));
    gulp.src(['vendor/jquery/dist/jquery.min.map'])
        .pipe(gulp.dest('js'));
});
gulp.task('concat', function(){
    gulp.src(([
        'vendor/jquery/dist/jquery.min.js',
        'vendor/bootstrap/dist/js/bootstrap.min.js',
        'vendor/angular/angular.min.js',
        'vendor/angular-ui-router/release/angular-ui-router.min.js',
        'vendor/angular-loading-bar/build/loading-bar.min.js',
        'js/index.js']))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js'));
})
gulp.task('watch', function () {
    gulp.watch(['scripts/**/*.js'], ['build','concat']);
});

gulp.task('default', ['build', 'watch', 'concat']);