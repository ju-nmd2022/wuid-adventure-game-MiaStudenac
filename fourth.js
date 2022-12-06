var odabraoMapu = false;

window.addEventListener ("load", function(){
    document.getElementById("poruka").style.visibility = "hidden";
     
    const mapa = document.getElementById("mapa");
    mapa.addEventListener("click", function(){
        statusUpaljenaSvjetiljka = localStorage.getItem("upaljenaSvjetiljka");
        console.log("1" + statusUpaljenaSvjetiljka);
        if (statusUpaljenaSvjetiljka == "on") {
            odabraoMapu = false;
            document.getElementById("trecaPozadina").style.backgroundImage = "url('theforestt.png')";
            localStorage.setItem("upaljenaSvjetiljka", "off");
                    console.log("2" + statusUpaljenaSvjetiljka);
                    document.getElementById("poruka").style.visibility = "hidden";
               
        } else {
            odabraoMapu = true;
            document.getElementById("trecaPozadina").style.backgroundImage = "url('mapbg.png')";
            localStorage.setItem("upaljenaSvjetiljka", "on");
                    console.log("3" + statusUpaljenaSvjetiljka);
               
        }
    });

});

function idiNaPetuStranicu() 
{
    if (odabraoMapu == true)
    {
        location.href = "fifth.html";
    }
    else
    {
        document.getElementById("poruka").style.visibility = "visible";
    } 
}