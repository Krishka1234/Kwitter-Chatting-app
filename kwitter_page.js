//YOUR FIREBASE LINKS
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
     roomname=localStorage.getItem("roomname");
     document.getElementById("room").innerHTML="Room name: "+roomname;
function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
function updateLike(message_id){
      buttonid=message_id;
      likes=document.getElementById(buttonid).value;
      updatelikes=Number(likes) + 1;
      firebase.database().ref(roomname).child(message_id).update({
            like:updatelikes
      });

}