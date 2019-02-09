// funkcija onload - proverava da li smo vec logovani, smesta u sessionStorage , ako zatvorimo browser, moracemo ponovo da upisujemo ime i prezime, dok god je tab otvoren, nebitno na kojoj strani, nema logovanja
function index(){
var check = sessionStorage.getItem("check");
if(check == "true" ){document.getElementById("login").style.display = "none";
var check = true;
     data();}
}


function data(){
    var check = sessionStorage.getItem("check");
    if(check == "true" ){                                   // prvo proveravam da li sam vec logovan
        var ime = localStorage.getItem("ime");              // i ako jesam vadim ime prezime i mail iz localStorage
        var prezime = localStorage.getItem("prezime");
        var email = localStorage.getItem("email");}
    else{
        var ime = document.getElementById("firstName").value;       // ako nisam znaci da se sad zavrsila forma
        var prezime = document.getElementById("lastName").value;    // i upisujem u local storage ime prezime i email
        var email = document.getElementById("email").value;
        localStorage.setItem("ime", ime );  
        localStorage.setItem("prezime", prezime );  
        localStorage.setItem("email", email );}
    
    var check = true;                                           // ovaj check sluzi da sakrije login ako je program prosao ovuda, znaci vec je logovan
    sessionStorage.setItem("check",check);
    document.getElementById("login").style.display = "none";          // sakrivam login
    document.getElementById("docek").style.backgroundImage = "url('images/electronics.png')";    //  stavljam background image
        
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
    
        var c = document.getElementById("myCanvas");                                    //   tekst sa dene strane logoa
        var ctx = c.getContext("2d");
        ctx.shadowBlur = 50;
        ctx.shadowColor = "white";
        ctx.lineWidth = 2;
        ctx.font = "90px Anton";
        // Create gradient
        var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
        gradient.addColorStop("0", "orange");
        gradient.addColorStop("0.5", "yellow");
        gradient.addColorStop("1.0", "orange");
        // Fill with gradient
        ctx.strokeStyle = gradient;
        ctx.strokeText("FrontEnd", 20, 90);
        ctx.strokeText("Developer", 20, 240);
        ctx.strokeText("Team ZR", 20, 390);    

    document.getElementById("logo").style.display = "block";                            // palim logo i tekst pored njega
    document.getElementById("frontend").style.display = "block";
}