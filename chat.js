var username = localStorage.getItem("username");
document.getElementById("user").innerHTML = "Welcome, " + username;

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}


function getData() {
firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class = 'room_name'> id = "+Room_names+" onclick = 'RedirectToRoomName(this.id)'> #" +Room_names+ "</div> <hr>"
document.getElementById("output").innerHTML = row;
//End code
});});}
getData();

var firebaseConfig = {
    apiKey: "AIzaSyC-K_2qiJv4GMNBE4vORYgQ9kYMCEr4wG8",
    authDomain: "tee-hee-ho-ho-ho.firebaseapp.com",
    databaseURL: "https://tee-hee-ho-ho-ho-default-rtdb.firebaseio.com",
    projectId: "tee-hee-ho-ho-ho",
    storageBucket: "tee-hee-ho-ho-ho.appspot.com",
    messagingSenderId: "441486015216",
    appId: "1:441486015216:web:1952536fc8711f2cbf6035"
  };
  
firebase.initializeApp(firebaseConfig);

function add(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).push({
    purpose: "adding room name"
  });
  
}

function RedirectToRoomName(name){
  localStorage.setItem("room_name", name);
  window.location = "room.html";
}