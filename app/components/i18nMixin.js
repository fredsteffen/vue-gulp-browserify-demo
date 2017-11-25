var locale = localStorage.getItem("locale") || "en";

export default {
   data: () => {
      return {
         appLocale: locale
      }
   },
   watch: {
      appLocale: function(locale){
         // TODO: Create a warning here letting users know that the app will be reloaded and data could be lost.
         localStorage.setItem("locale", locale);
         window.location.reload(true);
      }
   }
}