// var check = localStorage.getItem("check");

// function index(){
    
   // window.onbeforeunload = function() {
   //     localStorage.removeItem("check");
    //    return '';
     // };
   //   alert(check);
   //   if(check == "true" ){document.getElementById("login").style.display = "none";
   // data();}
// }

//  RADIM NA TOME DA SE NE POJAVLJUJE LOGIN SVAKI PUT KAD SE VRATIMO NA POCETNU STRANU


function data(){
   // var check = true;
    var ime = document.getElementById("firstName").value;
    var prezime = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    localStorage.setItem("ime", ime );  
    localStorage.setItem("prezime", prezime );  
    localStorage.setItem("email", email );
    //localStorage.setItem("check", check );  
    document.getElementById("login").style.display = "none";
    document.getElementById("docek").style.backgroundImage = "url('images/electronics.png')";
    
        
    document.getElementById("klijent").innerHTML = " ";                     
    var string = " "+ime+" "+prezime+" ";
    var str = string.split("");
    var el = document.getElementById('klijent');                                        //  funkcija koja animira ispis imena i prezimena 
    (function animate() {                      
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);      
        var running = setTimeout(animate, 100);})();
    
    document.getElementById("poruka").innerHTML = " ";                     
    var string1 = " Navigaciju možete vršiti pomoću linkova IZNAD, po završenoj kupovini u odeljku korpa pritikom na 'poruči' biće vam poslat e-mail na: "+email+" Hvala Vam što nam pomažete da razvijemo ovaj softwer... ";
    var str1 = string1.split("");
    var el1 = document.getElementById('poruka');                                        //  funkcija koja animira ispis poruke na prvoj strani posle logina
    (function animate() {                      
        str1.length > 0 ? el1.innerHTML += str1.shift() : clearTimeout(running1);      
        var running1 = setTimeout(animate, 5);})();
        
    document.getElementById("logo").style.display = "block";
    document.getElementById("frontend").style.display = "block";
}