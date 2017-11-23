<template lang="pug">
  .container
   .row: .col-sm-12
      .jumbotron
         h1 Vue App!
         p This app was created to show that you CAN build Vue using single file components without giving up all control of your build process.
         p This uses Gulp, Browserify, Vueify, Babelify, Karma, Jasmine and some other components.
         P TODO: Show localization in app.
   .row: .col-sm-12
      ul.nav.nav-tabs
         li(role="presentation"): router-link(to="page1") Page 1
         li(role="presentation"): router-link(to="page2") Page 2
   .row: .col-sm-12.text-center
      router-view
</template>
