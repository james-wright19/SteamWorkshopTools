var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

function style() {
    return gulp
        .src("src/assets/css/main.sass") //Source of css
        .pipe(sourcemaps.init()) // Initialise Source Maps
        .pipe(sass()) //Run sass (convert sass to css)
        .on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()])) //use autoprefixer and css nano
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("src/assets/css"))
        .pipe(browserSync.stream())
}

function reload() {
    browserSync.reload();
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });

    gulp.watch("src/assets/css/**/*.sass", style);
    gulp.watch("src/*.html", reload);

}

exports.watch = watch

exports.style = style;

var build = gulp.parallel(style, watch);

gulp.task('default', build);
