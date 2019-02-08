function data(){
    var ime = document.getElementById("firstName").value;
    var prezime = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    localStorage.setItem("ime", ime );  
    localStorage.setItem("prezime", prezime );  
    localStorage.setItem("email", email );  
    document.getElementById("login").style.display = "none";
}