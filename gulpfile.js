var gulp = require("gulp");
var postcss = require("gulp-postcss");
var cssnext = require("postcss-cssnext");
var minify = require("gulp-minify");

// Process CSS
gulp.task("css", function() {
  var processors = [cssnext({ browsers: ["last 3 versions", "Firefox < 27"] })];

  return gulp
    .src("./src/*.css")
    .pipe(postcss(processors))
    .pipe(gulp.dest("./public/stylesheets"));
});

// Minify JS
gulp.task("js", function() {
  gulp
    .src(["./src/*.js"])
    .pipe(minify())
    .pipe(gulp.dest("./public/scripts"));
});

gulp.task("default", function() {
  gulp.watch("./src/*css", ["css"]);
  gulp.watch("./src/*.js", ["js"]);
});
