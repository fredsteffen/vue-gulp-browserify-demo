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
## Folder Structure
* **/**
  * .babelrc
    * Stores default values for Babel, the es6 to es5 converter
  * .gitignore
    * Ensures that stuff isn't saved that shouldn't be saved, like node_modules and 
  * gulpfile.js
    * Contains Gulp tasks we use to run and transpile the app
  * package.json
    * Contains the list of packages in this application
  * ReadMe.md
    * These instructions
  * **/app** The root of the front end application
    * index.html - Root html page
    * app.js - Starting point of the Vue application. Binds Vue to the UI and sets up prerequisites
    * app.vue - The first Vue component
    * **/components**
      * All other Vue components. I typically group components by business function, /user for user management components, etc
    * **/model**
      * A place for any js business entities you want to construct
    * **/services**
      * I tend to move business logic into a light weight service model. This keeps the UI code cleaner and makes business logic easier to test
  * **/dist**
    * This is where all of the compiled artifacts go. NOTE: *The way I have this set up, /src/bundle.js and index.html are overwritten every time the code is transpiled.*
  * **/node_modules**
    * All of the dependencies of the packages we use to build this thing. I ignore things that are compiled
  * **/spec**
    * The folder containing all unit tests. I tend to mirror the structure of the app folder. All tests follow `[filename]Spec.js` convention. NOTE: *If you want, you could have the spec files inline with your js files in App. I like them being separated tho.*
