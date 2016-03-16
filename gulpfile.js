var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify');

gulp.task('build', function() {
    gulp.src(['vendor/bootstrap/dist/css/bootstrap.min.css',
        'vendor/bootstrap-social/bootstrap-social.css',
        'vendor/font-awesome/css/font-awesome.min.css',
        'vendor/angular-loading-bar/build/loading-bar.min.css'])
        .pipe(gulp.dest('css/vendor'));
    gulp.src(['vendor/bootstrap/fonts/glyphicons-halflings-regular.woff',
        'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2',
        'vendor/font-awesome/fonts/fontawesome-webfont.woff',
        'vendor/font-awesome/fonts/fontawesome-webfont.woff2',
        'vendor/font-awesome/fonts/fontawesome-webfont.ttf'])
        .pipe(gulp.dest('css/fonts'));
    gulp.src(['scripts/**/*'])
        .pipe(concat('app.js'))
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
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('js'));
});
gulp.task('compress', function() {
    gulp.src('js/app.js')
        .pipe(minify({
            exclude: [],
            ignoreFiles: []
        }))
        .pipe(gulp.dest('js'))
});
gulp.task('watch', function () {
    gulp.watch(['scripts/**/*.js','js/*.js'], ['build', 'concat', 'compress']);
});

gulp.task('default', ['build', 'watch', 'concat']);