    var red = [];
    localStorage.clickcount = 0;
    var total = 0;   
    
    function run(){
        var ime = localStorage.getItem("ime");
        var prezime = localStorage.getItem("prezime");
        document.getElementById("kupac").innerHTML = ' ' +ime+ ' ' +prezime;
    }
    function locstormake(){
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
            var b = localStorage.clickcount;
            document.getElementById("itemCount").style.display= "block";
        } 
        var vrsta = document.getElementById("vrsta").value;
        var tip = document.getElementById("tip").value;
        var komada = document.getElementById("komada").value;
        var cena = document.getElementById("cena").value;
        var mnozenje = parseFloat(komada).toFixed(2) * parseFloat(cena).toFixed(2);
        var ukupnacena = mnozenje.toFixed(2);
        red.push(b,vrsta,tip,komada,cena,ukupnacena);
        document.getElementById("forma").reset();
        document.getElementById("korpa1").disabled = true;
        document.getElementById("itemCount").innerHTML = b;

    }
 
    function locstormake2(){
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

    function locstormake3(){
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

    function locstormake4(){
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

    function funkcija(){
        var vrstar = document.getElementById("tip").value;
        var kom = document.getElementById("komada").value;
        document.getElementById("ukupno").value = (document.getElementById("cena").value * kom).toFixed(2);
        if (vrstar!="0" && kom>0) document.getElementById("korpa1").disabled = false; else document.getElementById("korpa1").disabled = true;
        if(vrstar=="100r"){
            document.getElementById("cena").value ="1.2";
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
        
    function funkcija2(){
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
    
    function funkcija3(){
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
                    
    function funkcija4(){
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
                    
    function send(){
        red.toString();
        localStorage.setItem("red", red );  
    }                    

    function logout(){     // logout funkcija
        check = false;
        sessionStorage.setItem("check",check);
        localStorage.removeItem("ime");
        localStorage.removeItem("prezime");
        localStorage.removeItem("email");
        localStorage.removeItem("red");
        location.reload();
        }

    function korpa(){
        document.getElementById("kolica").disabled = true;
        var r = 0;                                                  //  pomocna promenljiva sluzi da razdvoji redove, deklarisana i definisana na 0 
        var y = 0;
        var total = 0;
        if (red.length < 6) {                                       //  proveravam da li je ista kupljeno i ako nije izbacujem alert ( ako ima manje od 6 podataka, nije bilo kupovine)
            alert("Prazna korpa");
        }
        else {                                                              //  e ovde pocinje
            for (x = 0; x < red.length; x = x + 6) {                        // =========================================================================
                var img = document.createElement('img');
                img.src = "images/djubre2.png";    
                var tabela = document.getElementById('cartTable');          
                var novired = tabela.insertRow(tabela.rows.length);         
                for (i = 0; i < 7; i = i + 1) {                             
                    if (i == 5) total = total + parseFloat(red[i + r]);
                    novired.id = "tr"+(1+y);                
                    var novacelija  = novired.insertCell(i);
                    var tekst  = document.createTextNode(red[i + r]); 
                    var button = document.createElement('input');
                    if(i==6){
                        button.id = "d"+(i-5+y);
                        button.setAttribute('type', 'image');
                        button.setAttribute('src', 'images/djubre2.png');
                        button.setAttribute('width','35px')
                        button.setAttribute('onclick', 'brisiRed(this)');
                      //  img.onclick = brisiRed();
                        novacelija.appendChild(button);}
                    else                                                    
                        novacelija.appendChild(tekst);                          
                }
                r = r + 6;
                y++;                                                  
            }
        }
    
        document.getElementById("ispisUkupno").innerHTML = " UKUPNO: "+total.toFixed(2);

        prikaziKorpu();
    }


    
    




        function prikaziKorpu() {
            document.getElementById('bg_mask').style='height:auto';
            document.getElementById('frontlayer').style='height:auto';
            document.getElementById('bg_mask').style.visibility='visible';
            document.getElementById('frontlayer').style.visibility='visible';
          }
        function sakrijKorpu() {
            document.getElementById('bg_mask').style.visibility='hidden';
            document.getElementById('frontlayer').style.visibility='hidden';
            document.getElementById('cartTable').innerHTML = "";  
            var naslov = ["Redni broj","Proizvod","Tip","Količina","Jedinična cena","Ukupna cena","Briši"]
            var tabela = document.getElementById('cartTable');
            var novired = tabela.insertRow(tabela.rows.length);
            novired.className  = "table table-warning";
            for (i = 0; i < 7; i = i + 1) {
                var novacelija  = novired.insertCell(i);
                var tekst  = document.createTextNode(naslov[i]);
                novacelija.appendChild(tekst);           
            }
            document.getElementById("ispisUkupno").innerHTML = " UKUPNO: "+total;
            document.getElementById("kolica").disabled = false;
        }


        function brisiRed(id){
    alert("caller is "+id.id );
        }
