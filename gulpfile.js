var gulp        = require('gulp');
var watch       = require('gulp-watch');
var spritesmith = require('gulp.spritesmith');


gulp.task('default', ['watch']);


gulp.task('sprite', function () {
    var spriteData = gulp.src('img/sprites/*.png')
        .pipe(spritesmith({
            /* this whole image path is used within the css background declaration */
            imgName: '../img/sprite.png',
            cssName: 'sprite.css'
        }));
    spriteData.img.pipe(gulp.dest('img'));
    spriteData.css.pipe(gulp.dest('css'));
});


// Watch for changes to sprite images
gulp.task('watch', function () {
    gulp.watch(['img/sprites/**/*.png'], ['sprite']);
});