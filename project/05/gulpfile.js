var gulp = require("gulp"),
    concat = require("gulp-concat"),
    prefix = require("gulp-autoprefixer"),
    sass = require('gulp-sass')(require('sass')),
    pug = require('gulp-pug-3'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    zip = require('gulp-zip'),
    ftp = require('vinyl-ftp');
    // notify = require("gulp-notify"),


// Html Task
gulp.task("html", function () {
    return gulp.src("project/index.pug")
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest("dist"))
        .pipe(livereload());
        // .pipe(notify("HTML Task is Done"))
});


// Css Task
gulp.task("css", function() {
    return gulp.src("project/css/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix("last 2 versions"))
        .pipe(concat("main.css"))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());

})


// Js Task
gulp.task("js", function() {

    return gulp.src("project/js/*.js")
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());

})


// Compress Files
gulp.task('compress', function () {
    return gulp.src("dist/**/*.*")
        .pipe(zip("website.zip"))
        .pipe(gulp.dest("."))
    
});

// UpLoad Design with FTP
gulp.task('deploy', function () {

    var conn = ftp.create( {
        host:     'ellzero.net',
        user:     '',
        password: '',
        parallel: 10
    } );

    return gulp.src(['dist/**/*.*'], { base: '.', buffer: false } )
        .pipe(conn.newer( '/public_html' ) ) 
        .pipe(conn.dest( '/public_html' ) )
        .pipe(livereload());


});


// Watch Task
gulp.task('watch', function () {
    require('./server.js');
    livereload.listen();
    gulp.watch('project/index.pug', gulp.series('html'));
    gulp.watch('project/css/**/*.scss', gulp.series('css'));
    gulp.watch('project/js/*.js', gulp.series('js'));
    gulp.watch('dist/**/*.*', gulp.series('compress'));
    gulp.watch('dist/**/*.*', gulp.series('deploy'));
})