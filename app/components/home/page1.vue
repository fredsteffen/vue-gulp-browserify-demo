<template lang="pug">
   .page1
      blockquote.blockquote   
         p.mb-0 {{$t("quote1.quote")}}
         footer.blockquote-footer {{$t("quote1.author")}}
         p.mb-0 {{$t("quote2.quote")}}
         footer.blockquote-footer {{$t("quote2.author")}}
         p.mb-0 {{$t("quote3.quote")}}
         footer.blockquote-footer {{$t("quote3.author")}}
</template>
<script>
import strings from "./page1.i18n.json";
export default {
   i18n: strings
}
</script>

<style lang="sass">
   .mb-0 {
      margin-bottom: 0;
   }
   .blockquote-footer{
      margin-bottom: 15px;
   }
</style>

