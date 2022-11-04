var firebaseConfig = {
    apiKey: "AIzaSyDMuRcrKXQLGHJTK8LoanbmyTH3DZ8EtWI",
    authDomain: "kwitter-950d3.firebaseapp.com",
    databaseURL: "https://kwitter-950d3-default-rtdb.firebaseio.com",
    projectId: "kwitter-950d3",
    storageBucket: "kwitter-950d3.appspot.com",
    messagingSenderId: "406631898626",
    appId: "1:406631898626:web:cd0d2bc97b19989bba911b"
  };
  
 
   firebase.initializeApp(firebaseConfig);
   
  var user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
