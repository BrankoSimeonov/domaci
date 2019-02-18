function start() {
    var r = 0;                                                  //  pomocna promenljiva sluzi da razdvoji redove, deklarisana i definisana na 0 
    var total = 0;                                              //  promenljiva za ukupan iznos racuna , deklarisana i definisana na 0
    var ime = localStorage.getItem("ime");                      //  citam ime iz local storagea
    var prezime = localStorage.getItem("prezime");              //  citam prezime iz local storagea
    var red = localStorage.getItem("red");                      //  citam string u kojem je upisano sve iz kataloga (6 podataka u redu  * broj porudzbina)
    var rod = red.split(",");                                   //  pretvaram taj string u niz
    if (rod.length < 6) {                                       //  proveravam da li je ista kupljeno i ako nije izbacujem alert ( ako ima manje od 6 podataka, nije bilo kupovine)
        alert("Prazna korpa");
    }
    else {                                                              //  e ovde pocinje
        for (x = 0; x < rod.length; x = x + 6) {                        // =========================================================================
            var tabela = document.getElementById('pText');              //  pText je tbody u tabeli ( u html-u je definisana tabela i thead )
            var novired = tabela.insertRow(tabela.rows.length);         //  dodajem novi ROW u tbody
            for (i = 0; i < 6; i = i + 1) {                             //  vrtim petlju do 6, za svaki podatak iz reda
                if (i == 5) total = total + parseFloat(rod[i + r]);     //  sabiram ukupan iznos racuna ( samo ako je poslednji podatak u redu)
                var novacelija  = novired.insertCell(i);                //  dodajem novi DATA Cell
                var tekst  = document.createTextNode(rod[i + r]);       //  dodajem tektualnu vrednost iz reda
                novacelija.appendChild(tekst);                          //  konacno appendujem tekst u data cell u row
            }
            r = r + 6;                                                  //  povrcavam pomocnu promenljivu za 6, da bi citala podatke iz sledeceg reda
        }
    }
    document.getElementById("total").innerHTML = 'Poštovani <b>'+ime+' '+prezime+'</b>, Vaš ukupan račun je <b>' + total.toFixed(2) + '</b> RSD.';    // ispisujem ime i prezime, kao i ukupan iznos racuna
}
// pop up za zavrsavanje kupovine;
function finish(){
    var ime = localStorage.getItem("ime");
    alert("Hvala " +ime+ " što ste kupovali kod nas, posetite nas opet !!!");
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