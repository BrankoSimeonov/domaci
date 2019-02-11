function start() {
    var r = 0;
    var total = 0;
    var ime = localStorage.getItem("ime");
    var prezime = localStorage.getItem("prezime");
    var red = localStorage.getItem("red");
    var rod = red.split(",");
    if (rod.length < 6) {
        alert("Prazna korpa");
    }
    else {
        for (x = 0; x < rod.length; x = x + 6) {
            var trow = document.createElement("tr");
            document.getElementById("pText").appendChild(trow);
            for (i = 0; i < 6; i = i + 1) {
                if (i == 5) total = total + parseFloat(rod[i + r]);
                var tdat = document.createElement("td");
                tdat.innerHTML = rod[i + r];
                document.getElementById("pText").appendChild(tdat);
            }
            r = r + 6;
        }
    }
    document.getElementById("total").innerHTML = 'postovani <b>'+ime+' '+prezime+'</b>, vas ukupan racun je <b>' + total.toFixed(2) + '</b> RSD';
}
// pop up za zavrsavanje kupovine;
function finish(){
    var ime = localStorage.getItem("ime");
    alert("Hvala " +ime+ " sto ste kupovali kod nas,posetite nas opet!");
}