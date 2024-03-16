import { src, dest, watch, series } from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

const compileStyles = () =>
  src("./src/**/*.scss").pipe(sass()).pipe(dest("./dist"));

const watchTask = () => watch(["./src/**/*.scss"], compileStyles);

export default series(compileStyles, watchTask);
