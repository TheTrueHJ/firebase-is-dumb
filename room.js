function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

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

username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");
msg = document.getElementById("message").value;

function send(){
    firebase.database().ref("/").child(room_name).push({
        name: username,
        message: msg,
        likes:""
    });
    document.getElementById("message").innerHTML = ""
}