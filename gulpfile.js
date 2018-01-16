var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');

// Process CSS
gulp.task('css', function() {
  var processors = [cssnext({browsers: ['last 3 versions', 'Firefox < 27']})
                  ];

  return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('default', function() {
  gulp.watch('./src/*css', ['css']);
});
