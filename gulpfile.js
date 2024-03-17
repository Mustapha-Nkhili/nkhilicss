const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const compileStyles = () =>
  src("./src/**/*.scss").pipe(sass()).pipe(dest("./dist"));

const watchTask = () => watch(["./src/**/*.scss"], compileStyles);

exports.default = series(compileStyles, watchTask);
