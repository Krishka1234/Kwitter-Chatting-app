
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBpxaZg1Q6YmJtsPy1R-Zu7Gil8aPtlDDI",
      authDomain: "kwitter-30d9d.firebaseapp.com",
      databaseURL: "https://kwitter-30d9d-default-rtdb.firebaseio.com",
      projectId: "kwitter-30d9d",
      storageBucket: "kwitter-30d9d.appspot.com",
      messagingSenderId: "853109699903",
      appId: "1:853109699903:web:766fa84d7d9e7bf7614f8a"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     username=localStorage.getItem("Username");
     document.getElementById("username").innerHTML="Welcome "+username +" !";
     function addroom(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose :"adding room name"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}