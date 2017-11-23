module.exports = function (config) {
    config.set({
        frameworks: ["browserify", "jasmine"],
        plugins: ["karma-chrome-launcher", "karma-jasmine", "karma-browserify"],
        files: [
            "spec/**/*.js" // Location of our spec files. Could change this to app/ if you wanted to have tests next to code
        ],
        browsers: ["Chrome"], // Specifies Chrome to run tests. You can use phantom js as a headless browser
        preprocessors: { // Need to transform our Vue files
            "spec/**/*.js": ["browserify"]
        },
        browserify: {
            debug: true, // Sets up source maps
            transform: ["vueify", "babelify"]
        }
    });
}