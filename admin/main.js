var mainApp = {};
(function(){
var mainContainer = document.getElementById("main_container");
    var logtout =  function(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("login.html");
        },function(){})
}

var init = function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("stay");
          mainContainer.style.display = "";
        } else {
          mainContainer.style.display = "none";
          console.log("redirect");
          window.location.replace("login.html");
        }
      });
}
    
init();

mainApp.logout = logtout;
})();