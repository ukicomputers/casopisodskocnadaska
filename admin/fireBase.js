var fireBase = fireBase || firebase;
var hasInit = false;

var config= {
  apiKey: "AIzaSyDjInRSRuHaqAkwjMkGUIsFbR5AyqhqmgE",
  authDomain: "auth-odskocnadaska.firebaseapp.com",
  projectId: "auth-odskocnadaska",
  storageBucket: "auth-odskocnadaska.appspot.com",
  messagingSenderId: "953287009231",
  appId: "1:953287009231:web:eec94a90bfdd00b524e8ba"
};

if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


