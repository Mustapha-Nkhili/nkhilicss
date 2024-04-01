const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require('gulp-rename');

const compileStyles = () =>
  src("./dist/**/*.scss")
    .pipe(sass())
    .pipe(rename("nkhilicss.css"))
    .pipe(dest("./dist/css/"));

const watchTask = () => watch(["./dist/**/*.scss"], compileStyles);

exports.default = series(compileStyles, watchTask);
