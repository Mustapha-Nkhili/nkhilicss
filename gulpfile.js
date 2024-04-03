const { src, dest, watch, series, task } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

// Compile Sass to CSS
const compileStyles = () =>
  src("./sass/**/*.scss")
    .pipe(sass())
    .pipe(rename("nkhilicss.css"))
    .pipe(dest("./dist/css/"));

// Minify CSS
const minifyCSS = () =>
  src("./dist/css/nkhilicss.css") // Source from compiled CSS
    .pipe(cleanCSS())
    .pipe(rename("nkhilicss.min.css"))
    .pipe(dest("./dist/css/"));

// Watch for changes
const watchTask = () =>
  watch(["./sass/**/*.scss"], series(compileStyles, minifyCSS));

// Define minify-css task
task("minify-css", minifyCSS);

// Define compile-css task
task("compile-css", compileStyles);

// Default task
exports.default = series(compileStyles, minifyCSS, watchTask);
