function adduser(){
    username=document.getElementById("Username").value;
    if(username.length==0){
        document.getElementById("Username").placeholder="UserName required";
    }
else{
    localStorage.setItem("Username",username);
    window.location="kwitter_room.html";
}
}