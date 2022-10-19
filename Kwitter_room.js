const firebaseConfig = {
  apiKey: "AIzaSyArwXqhGcbyijuXc19rFwiB9WIIaMy2MaY",
  authDomain: "kwitter-project-3b12d.firebaseapp.com",
  databaseURL: "https://kwitter-project-3b12d-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-3b12d",
  storageBucket: "kwitter-project-3b12d.appspot.com",
  messagingSenderId: "1066874635664",
  appId: "1:1066874635664:web:9c9f6748143ee97ef9df15"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!";
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
        }
          localStorage.setItem("room_name", room_name);

          window.location = "Kwitter_page.html";
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room Name -" + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   });});}
getData();
function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "Kwitter_page.html";
}
function logout(){
  localStorage.revoveItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}