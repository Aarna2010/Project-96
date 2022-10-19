const firebaseConfig = {
    apiKey: "AIzaSyArwXqhGcbyijuXc19rFwiB9WIIaMy2MaY",
    authDomain: "kwitter-project-3b12d.firebaseapp.com",
    databaseURL: "https://kwitter-project-3b12d-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-3b12d",
    storageBucket: "kwitter-project-3b12d.appspot.com",
    messagingSenderId: "1066874635664",
    appId: "1:1066874635664:web:9c9f6748143ee97ef9df15"
  };
  
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
getData();
