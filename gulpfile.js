const gulp = require("gulp");
var watch = require("gulp-watch");

const mjml = require("gulp-mjml");
const mjmlEngine = require("mjml");

function handleError(err) {
  console.log(err.toString());
  this.emit("end");
}

function transpile_scripts(cb) {
  gulp
    .src("./src/templates/**/*.mjml")
    .pipe(mjml(mjmlEngine, { validationLevel: "strict" }))
    .on("error", handleError)
    .pipe(gulp.dest("./dist"))
    .on("end", cb);
}

function watch_scripts(cb) {
  transpile_scripts(cb);
  gulp.watch("src/**/*.mjml", transpile_scripts);
}

gulp.task("default", transpile_scripts);
gulp.task("watch", watch_scripts);
