<template lang="pug">
  .container
   .row: .col-sm-12
      .jumbotron
         h1 {{$t("title")}}
         p {{$t("text.p1")}}
         p {{$t("text.p2")}}
         p {{$t("text.p3")}}
         .row: .col-sm-4: form: .form-group
            label(for="locale-select") {{$t("label.language")}}
            select#locale-select.form-control(v-model="appLocale")
               option(value="en") EN
               option(value="es") ES
               option(value="jp") JP
   .row: .col-sm-12
      ul.nav.nav-tabs
         li(role="presentation"): router-link(to="page1") Page 1
         li(role="presentation"): router-link(to="page2") Page 2
   .row: .col-sm-12.text-center
      router-view
</template>
<script>
import strings from "./app.i18n.json";
import {userDataService, UserData} from "../services/userDataService.js";

export default {
   i18n: strings,
   name: "vue-app",
   data: () => {
      return {
         title: new Date().toTimeString(),
         // locale: "en"
      }
   },
   watch: {
   }
}
</script>
<style lang="sass">

</style>

