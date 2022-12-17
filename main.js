function login(){
    username = document.getElementById("user").value;
    localStorage.setItem("username", username);

    window.location = "chat.html"
}