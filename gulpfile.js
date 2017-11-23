var gulp = require("gulp");
var fs = require("fs");
var vueify = require("vueify");
var browserify = require("browserify");
var data = require("browserify-data");
var babelify = require("babelify");
var webserver = require("gulp-webserver");
var KServer = require("karma").Server;

var outputPath = "./dist";
var jsPath = outputPath + "/js";

// Converts vue files, bundles them and saves the result
gulp.task("transpile", ["move-html"], function () {
   // creates the js folder if it doesn't exist
   if(!fs.existsSync(jsPath)){
      fs.mkdirSync(jsPath);
   };
   return browserify('./app/app.js', { debug: true })
      .transform(data) // Allows json files to be bundled
      .transform(vueify) // Converts .vue files to js, css, and html js
      .transform(babelify) // Converts es6 to es5
      .bundle() // Combines all files into one
      .pipe(fs.createWriteStream(jsPath + "/bundle.js")); // Writes the output to a single file
});

// Transfers the html file to the dist folder
gulp.task("move-html", function () {
   return gulp.src("./app/index.html")
      .pipe(gulp.dest(outputPath));
});

// When this task is run, the "transpile" task will run whenever a file is saved.
gulp.task('watch', function () {
   return gulp.watch("app/**/*.*", ["transpile"]);
});

// Runs the Karma tests 1 time.
gulp.task("tests", (done) => {
   new KServer({
      configFile: __dirname + "/karma.conf.js",
      singleRun: true,
   }, function (exitCode) {
      console.log('Karma has exited with ' + exitCode)
      process.exit(exitCode)
   }).start();
})

// Runs the Karma tests continuously
gulp.task("auto-tests", (done) => {
   new KServer({
      configFile: __dirname + "/karma.conf.js",
      singleRun: false,
   }, done).start();
});

// Runs the web server after Transpile and Watch are run
gulp.task("webserver", ["transpile", "watch"], function () {
   return gulp.src("dist")
      .pipe(webserver({
         livereload: true,
         host: "localhost",
         port: "8444",
         open: true
      }));
});
// If you just run `gulp` in the console it'll run transpile, then watch
gulp.task("default", ["transpile", "watch"]);