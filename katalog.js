    var red = [];                       // definisem promenljive koje ce se koristiti 
    localStorage.clickcount = 0;
    var total = 0;   
    
    function run(){              // funkcija koja se automatski ucitava prilikom otvaranja stranice katalog
        var ime = localStorage.getItem("ime");
        var prezime = localStorage.getItem("prezime");
        document.getElementById("kupac").innerHTML = ' ' +ime+ ' ' +prezime;        // citam ime i prezime iz localstoradge i ispisujem na strani
    }
    function locstormake(){      // ovo je moglo i bolje, ali kad je vec bilo uradjeno Branko je trazio da budu 4 forme na strani umesto jedne tako da....  svega ima 4x 
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;        //  ovde sabiram koliko puta je neki item dodat u korpu
            var b = localStorage.clickcount;                                    //  smestam vrednost u promenljivu
            document.getElementById("itemCount").style.display= "block";        //  span na kolicima koji postaje vidljiv ako ima nesto u korpi 
        } 
        var vrsta = document.getElementById("vrsta").value;                         // citam koja je vrsta (otpornik, kondenzator...) i dodeljujem  promenljivoj  
        var tip = document.getElementById("tip").value;                             // citam koji je tip iz select liste
        var komada = document.getElementById("komada").value;                       // citam koliko komada je uneseno
        var cena = document.getElementById("cena").value;                           //  citam jedinacnu cenu 
        var mnozenje = parseFloat(komada).toFixed(2) * parseFloat(cena).toFixed(2); //  mnozim broj komada sa cenom i zaokruzujem na dve decimale
        var ukupnacena = mnozenje.toFixed(2);                                       //  prebacujem podatak u promenljivu ukupnacena
        red.push(b,vrsta,tip,komada,cena,ukupnacena);                               //  ovde dodajem sve vrednosti u niz koji cu koristiti za pregled korpe i/ili za slanje na sledecu stranu
        document.getElementById("forma").reset();                                   //  resetujem formu, da bi mogao novi unos
        document.getElementById("korpa1").disabled = true;                          //  ponovo disejblujem dugme dodaj u korpu (dok se ne izbira tip i kolicina)
        document.getElementById("itemCount").innerHTML = b;                         //  span na kolicima (mali crveni krug) i u njemu broj artikala u korpi
    }
 
    function locstormake2(){                                                        // isto kao locstormake  (ovaj iznad) samo za sledeci element kataloga (ima ih 4 ista - kao sto rekoh )
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
            var b = localStorage.clickcount;
            document.getElementById("itemCount").style.display= "block";
            } 
        var vrsta = document.getElementById("vrsta2").value;
        var tip = document.getElementById("tip2").value;
        var komada = document.getElementById("komada2").value;
        var cena = document.getElementById("cena2").value;
        var mnozenje = parseFloat(komada).toFixed(2) * parseFloat(cena).toFixed(2);
        var ukupnacena = mnozenje.toFixed(2);
        red.push(b,vrsta,tip,komada,cena,ukupnacena);
        document.getElementById("forma2").reset();
        document.getElementById("korpa2").disabled = true;
        document.getElementById("itemCount").innerHTML = b;
    }

    function locstormake3(){                                                        // isto kao locstormake  (ovaj iznad) samo za sledeci element kataloga (ima ih 4 ista - kao sto rekoh )
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
            var b = localStorage.clickcount;
            document.getElementById("itemCount").style.display= "block";
            } 
        var vrsta = document.getElementById("vrsta3").value;
        var tip = document.getElementById("tip3").value;
        var komada = document.getElementById("komada3").value;
        var cena = document.getElementById("cena3").value;
        var mnozenje = parseFloat(komada).toFixed(2) * parseFloat(cena).toFixed(2);
        var ukupnacena = mnozenje.toFixed(2);
        red.push(b,vrsta,tip,komada,cena,ukupnacena);
        document.getElementById("forma3").reset();
        document.getElementById("korpa3").disabled = true;
        document.getElementById("itemCount").innerHTML = b;
    }

    function locstormake4(){                                                         // isto kao locstormake  (ovaj iznad) samo za sledeci element kataloga (ima ih 4 ista - kao sto rekoh )
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
            var b = localStorage.clickcount;
            document.getElementById("itemCount").style.display= "block";
            } 
        var vrsta = document.getElementById("vrsta4").value;
        var tip = document.getElementById("tip4").value;
        var komada = document.getElementById("komada4").value;
        var cena = document.getElementById("cena4").value;
        var mnozenje = parseFloat(komada).toFixed(2) * parseFloat(cena).toFixed(2);
        var ukupnacena = mnozenje.toFixed(2);
        red.push(b,vrsta,tip,komada,cena,ukupnacena);
        document.getElementById("forma4").reset();
        document.getElementById("korpa4").disabled = true;
        document.getElementById("itemCount").innerHTML = b;
    }

    function funkcija(){                                                        // funkcija koja se pokrece klikom na kolicinu ili tip -takodje nasledjeno od Branka pa sve ima 4 puta :)
        var vrstar = document.getElementById("tip").value;                      // uzimam vrednosti kolicine i tipa
        var kom = document.getElementById("komada").value;
        document.getElementById("ukupno").value = (document.getElementById("cena").value * kom).toFixed(2); // ispisujem na formi ukupnu vrednost (kolicina*cena)
        if (vrstar!="0" && kom>0) document.getElementById("korpa1").disabled = false; else document.getElementById("korpa1").disabled = true;   // ako su uneseni i kolicina i tip omogucujem dugme dodaj u korpu
        if(vrstar=="100r"){                                                     // u redovima ispod se dodeljuje jedinicna cena za svaki tip 
            document.getElementById("cena").value ="1.2";                       // i tako 4 puta :)
        }else if (vrstar=="120r"){
            document.getElementById("cena").value ="1.3";
        }else if (vrstar=="1k"){
            document.getElementById("cena").value ="1.4";
        }else if (vrstar=="10k"){
            document.getElementById("cena").value ="1.5";
        }else if (vrstar=="100k"){
            document.getElementById("cena").value ="1.6";
        }else{
            document.getElementById("cena").value ="";
        }  
    }
        
    function funkcija2(){                                                       // isto kao iznad, samo za sledeci element
        var vrstar = document.getElementById("tip2").value;
        var kom = document.getElementById("komada2").value;
        document.getElementById("ukupno2").value = (document.getElementById("cena2").value * kom).toFixed(2);
        if (vrstar!="0" && kom>0) document.getElementById("korpa2").disabled = false; else document.getElementById("korpa2").disabled = true;
        if(vrstar=="100uF"){
            document.getElementById("cena2").value ="50";
        }else if (vrstar=="220uF"){
            document.getElementById("cena2").value ="80";
        }else if (vrstar=="470uF"){
            document.getElementById("cena2").value ="100";
        }else if (vrstar=="1000uF"){
            document.getElementById("cena2").value ="120";
        }else if (vrstar=="2200uF"){
            document.getElementById("cena2").value ="160";
        }else{
            document.getElementById("cena2").value ="";
        }
    }
    
    function funkcija3(){                                                       // isto kao iznad, samo za sledeci element
        var vrstar = document.getElementById("tip3").value;
        var kom = document.getElementById("komada3").value;
        document.getElementById("ukupno3").value = (document.getElementById("cena3").value * kom).toFixed(2);
        if (vrstar!="0" && kom>0) document.getElementById("korpa3").disabled = false; else document.getElementById("korpa3").disabled = true;
        if(vrstar=="1N4007"){
            document.getElementById("cena3").value ="5";
        }else if (vrstar=="1N5404"){
            document.getElementById("cena3").value ="10";
        }else if (vrstar=="1N5408"){
            document.getElementById("cena3").value ="12";
        }else if (vrstar=="25F120M"){
            document.getElementById("cena3").value ="240";
        }else if (vrstar=="40HFR100M"){
            document.getElementById("cena3").value ="450";
        }else{
            document.getElementById("cena3").value ="";
        }
    }
                    
    function funkcija4(){                                                       // isto kao iznad, samo za sledeci element
        var vrstar = document.getElementById("tip4").value;
        var kom = document.getElementById("komada4").value;
        document.getElementById("ukupno4").value = (document.getElementById("cena4").value * kom).toFixed(2);
        if (vrstar!="0" && kom>0) document.getElementById("korpa4").disabled = false; else document.getElementById("korpa4").disabled = true;
        if(vrstar=="2N2222A"){
            document.getElementById("cena4").value ="3";
        }else if (vrstar=="2N3439"){
            document.getElementById("cena4").value ="55";
        }else if (vrstar=="BC547"){
            document.getElementById("cena4").value ="195";
        }else if (vrstar=="2SA1943"){
            document.getElementById("cena4").value ="220";
        }else if (vrstar=="2SC5200"){
            document.getElementById("cena4").value ="416";
        }else{
            document.getElementById("cena4").value ="";
        }
    }
                    
function send(){        // funkcija za slanje na sledecu stranu , pretvaram niz RED u string i pakujem ga u jedan localstorage
    red.toString();
    localStorage.setItem("red", red );  
}                    

function logout(){     // logout funkcija - brisem sve localstorage i reloadujem index.html
    check = false;
    sessionStorage.setItem("check",check);   // stavljam check na false da bi index.html omogucio login (koji je skriven ako je check true)
    localStorage.removeItem("ime");
    localStorage.removeItem("prezime");
    localStorage.removeItem("email");
    localStorage.removeItem("red");
    location.reload();
}
                                                                                    // ==============================================
function korpa(){                                                                   //  OVDE POCINJE !!!!!!  
    document.getElementById("kolica").disabled = true;                              // ==============================================
    var r = 0;                                                                      // disejblujem dugme kolica ( da se ne bi duplirao ispis)
    var y = 0;                                                                      // definisem lokalne promenljive
    var total = 0;                                                                  // =========================================================================
    if (red.length < 6)alert("Korpa je prazna !!!");                                //  proveravam da li je korpa prazna
    else {                                                                          // ========================================================================= 
        for (x = 0; x < red.length; x = x + 6) {                                    //  vrtim red u koracima po 6 posto toliko podataka ima u jednom redu tabele                                                                                    
            var tabela = document.getElementById('cartTable');                      //  ovo je sad sustina: pozivam tabelu i definisem dodavanje reda na kraj tabele
            var novired = tabela.insertRow(tabela.rows.length);                     //                      potom vrtim taj red 7 puta posto sad tabela ima 7 podataka
            for (i = 0; i < 7; i = i + 1) {                                         //                      u jednom redu ( sedmi je ikonica za brisanje)
                if (i == 5) total = total + parseFloat(red[i + r]);                 //                      i u svakom prolazu dodajem jedan cell u red (indexirano promenljivom i)
                novired.id = "tr"+(1+y);                                            //                      istovremeno iscitavam niz RED koji smo gore napunili i te podake dodajem u textNode
                var novacelija  = novired.insertCell(i);                            //                      za podatke u CELL od tabele. 
                var tekst  = document.createTextNode(red[i + r]);                   //                      takodje, zbog mogucnosti brisanja kreiram i jedinstveni ID za svaki red i za 
                var button = document.createElement('input');                       //                      svaku ikonicu za bisanje (da bi znao koji red se brise ) - bice kasnije...
                if(i==6){                                                           //  ovde prekidam dodavanje textNode i umesto njega dodjem slikicu za brisanje sa ID koji je jednak redu u  
                    button.id = "d"+(i-5+y);                                        //  kojem se nalazi (D1, D2, D3 ... )
                    button.setAttribute('type', 'image');                           //  takodje, dodajem i atribute koji su mi potrebni ( visina slikice, njen SRC, type)    
                    button.setAttribute('src', 'images/djubre2.png');               //  
                    button.setAttribute('width','35px')                             //  ovde definisemo brisanje, onClick poziva funkciju brisiRed (kreirace se onoliko puta koliko ima redova)
                    button.setAttribute('onclick', 'brisiRed(this)');               //  VAZNO: kod pozivanja funkcije brisiRed(this) saljem this u funkciju da bi mogao da procitam ID 
                    novacelija.appendChild(button);}                                //  ova komanda dodaje ikonicu za brisanje kao sedmi element reda tabele
                else {                                                              //
                    if(i==0)tekst=document.createTextNode(1+y);                     //  da bi redni brojevi bili redni, tj. ako npr. od 4 stavke u korpi obrisemo trecu, da redni brojevi ne bi isli 1,2,4
                    novacelija.appendChild(tekst);}                                 //  ovaj append dodaje od drugog do setog elementa tabele ( prvi je redni broj , a sedmi slikica)
            }
            r = r + 6;                                                                      // povecavam promenljivu za 6, da bi citao podatke iz "zamisljenog "sledeceg reda tabele  
            y++;}}                                                                          // podaci se u stvarnosti nalaze u nizu RED
    document.getElementById("ispisUkupno").innerHTML = " UKUPNO: "+total.toFixed(2)+" RSD"; // ovde ispisujem ukupno zaduzenje u donjem desnom uglu 
    prikaziKorpu();                                                                         // sada je tabela spreman za prikaz i TEK sada pozivam funkciju za prikaz kolica 
}

function prikaziKorpu() {                                                           // funkcija za prikaz kolica (od samog starta je sve tu, samo je invisible ;)  )
    document.getElementById('bg_mask').style.visibility='visible';                  // background mask
    document.getElementById('frontlayer').style.visibility='visible';               // front layer
}

function sakrijKorpu() {                                                            // funkcija za ponovno skrivanje kolica ( poziva se dugmetom NASTAVITE KUPOVINU)
    document.getElementById('bg_mask').style.visibility='hidden';                   // sakrivam background mask i front layer
    document.getElementById('frontlayer').style.visibility='hidden';
    document.getElementById('cartTable').innerHTML = "";                            // brisem celu tabelu   
    var naslov = ["Redni broj","Proizvod","Tip","Količina","Jedinična cena","Ukupna cena","Briši"]  // posto nisam dobro isplanirao, obrisao sam i header tabele pa ga sad ponovo upisujem :)
    var tabela = document.getElementById('cartTable');                                              // ne zamerite
    var novired = tabela.insertRow(tabela.rows.length);
    novired.className  = "table table-warning";                                     // ovde se lepo vidi kako dodavati klasu u element koji kreiramo
    for (i = 0; i < 7; i = i + 1) {
        var novacelija  = novired.insertCell(i);
        var tekst  = document.createTextNode(naslov[i]);
        novacelija.appendChild(tekst);}
    document.getElementById("ispisUkupno").innerHTML = " UKUPNO: "+total.toFixed(2)+" RSD";     // ispis ukupnog zbira u donjem desnom uglu ( bice 0 posto smo obrisali sve podatke)
    document.getElementById("kolica").disabled = false;                                         // na posletku ponovo omogucavam da se moze kliknuti na kolica
}                                                                   


function brisiRed(brisi){                                                           //  funkcija koja brise red u kolicima
    var str = brisi.id;                                                             // ===========================================================
    var res = str.toString();                                                       //  ono (this) kad sam zvao funkciju ovde se zove brisi i vadim njegov ID (D1, D2, D3...)
    var target = "tr"+res.slice(1);                                                 // secem ono D sa pocetka i dobijam broj reda koji je obrisan (1, 2, 3...)
    document.getElementById(target).remove();                                       //  takodje, u funkciji korpa(), kad sam kreirao redove tabele i njima sam dao ID (TR1, TR2, TR3 ...)
    localStorage.clickcount = Number(localStorage.clickcount)-1;                    //  sad spajam TR i broj reda, i brisem taj ceo red komandom .remove()
    vrednostiTabele();                                                              //  smanjujem i broj artikala u kolicima za 1 i pozivam vrednostiTabele()
}                                                                                   // =======================================================================
                                                                                    //  ovde sam se trudio da pisem funcije redom kojim se i zovu 
                                                                                    //  radi lakseg pregleda 
function vrednostiTabele() {                                                        // =========================================================================
    var ReadTable = document.getElementById('cartTable');                           //  funkcija koja vadi vrednosti iz modifikovane tabele i ubacuje vrednosti u niz RED
    var duzinareda = red.length;                                                    // ====================================================================================
    for (i = 0; i < duzinareda ; i++) delete red[i];                                //  prvo brisem SVE podake iz niza (treba mi prazan posto cu u njega upisivati ponovo podatke iz tabele)
    red = red.filter(Boolean);                                                      //  sad krecem sa iscitavanjem tabele (krecem od drugog reda (index 1) posto je prvi red header ) 
    for (y = 1; y <= ReadTable.rows.length - 1; y++) {                              //  kroz dve for petlje citam podatke iz reda odjednom i onda prelazim na sledeci red
        for (i = 0; i <= ReadTable.rows[y].cells.length - 1; i = i + 7) {           //  sedmi podatak mi nije bitan posto je on slikica za brisanje
        var b = y;                                                                  //  na posletku, sve podatke koje sam procitao iz tabele pushujem u niz RED
        var vrsta = ReadTable.rows[y].cells[i+1].innerHTML;                         //
        var tip = ReadTable.rows[y].cells[i+2].innerHTML;                           //
        var komada = ReadTable.rows[y].cells[i+3].innerHTML;                        //
        var cena = ReadTable.rows[y].cells[i+4].innerHTML;                          //
        var ukupnacena = ReadTable.rows[y].cells[i+5].innerHTML;                    //
        red.push(b,vrsta,tip,komada,cena,ukupnacena);}}                             //
    if (b>0)document.getElementById("itemCount").innerHTML = b;                     //  ovde proveravam da li su obrisani svi podaci iz korpe, ako jesu sakrivam crveni krug na kolicima
    else document.getElementById("itemCount").style.display= "none";                //
    document.getElementById('cartTable').innerHTML = "";                            //  brisem SVE podatke iz tabele i pozivam sakrijKorpu(), da bi upisao header u tabelu (jedini razlog)
    sakrijKorpu();                                                                  //  a potom i funkciju korpa() da bi ispisao nove vrednosti ( posle brisanja )
    korpa();                                                                        //
}                                                                                   // +++++++++++++++++++++
                                                                                    // jednostavno, zar ne ?
                                                                                    // +++++++++++++++++++++





