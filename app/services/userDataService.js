class UserDataService{
   constructor(){
   }
   getUserData(){
      if(!localStorage.getItem("userData")){
         this.setUserData(new UserData());
      }
      return JSON.parse(localStorage.getItem("userData"));
   }
   setUserData(userData){
      localStorage.setItem("userData", JSON.stringify(userData));
   }
}

class UserData{
   constructor(){
      this.locale = "en";
   }
}
var userDataService = new UserDataService();
export {userDataService, UserData};



