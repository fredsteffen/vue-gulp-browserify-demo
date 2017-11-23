# Vue, Gulp, Browserify Demo App
This app shows how you can use Vue single page components and ES6 while keeping your setup relatively simple.

This app also shows how you can implement a test runner for client side tests and client side localization.
## Necessary Global Installation
Installing the following makes your life a lot easier

* Gulp
* Karma-CLI
* Jasmine

Gulp is an awesome javascript task runner and is the core of building and transpiling this app.

Karma-CLI enables you to run Karma by itself instead of relying just on the gulp task

Jasmine needs to be installed globally to use Karma by itself I believe, so I list it here. You can replace Jasmine with any other javascript testing framework, but I really like Jasmine. Nested tests are awesome!
## Running the App
In the root directory...
* Install global requirements. 
  * `npm install gulp, karma-cli, jasmine -g`
* Install other js dependencies, from package. json. 
  * `npm install`
* Run the web server. 
  * `gulp webserver`
