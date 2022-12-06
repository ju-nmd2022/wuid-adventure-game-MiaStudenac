window.addEventListener ("load", function(){
    document.getElementById("mapa").style.visibility = "hidden";
    document.getElementById("poruka").style.visibility = "hidden";
    document.getElementById("mapaMalo").style.visibility = "hidden";

    
    const flashlight = document.getElementById("flashlight");
    flashlight.addEventListener("click", function(){
        statusUpaljenaSvjetiljka = localStorage.getItem("upaljenaSvjetiljka");
        console.log("1" + statusUpaljenaSvjetiljka);
        if (statusUpaljenaSvjetiljka == "on") {
            document.getElementById("trecaPozadina").style.backgroundImage = "url('thecavedark.png')";
            localStorage.setItem("upaljenaSvjetiljka", "off");
                    console.log("2" + statusUpaljenaSvjetiljka);
                    document.getElementById("mapa").style.visibility = "hidden";
                    document.getElementById("poruka").style.visibility = "hidden";
                    document.getElementById("mapamalo").style.visibility = "hidden";
        } else {
            document.getElementById("trecaPozadina").style.backgroundImage = "url('thecavelight.png')";
            localStorage.setItem("upaljenaSvjetiljka", "on");
                    console.log("3" + statusUpaljenaSvjetiljka);
                    document.getElementById("mapa").style.visibility = "visible";
                    document.getElementById("poruka").style.visibility = "hidden";
                    document.getElementById("mapamalo").style.visibility = "hidden";
        }
    });

});

var odabraoMapu = false;


function pokaziSlikuDolje() 
{
    document.getElementById("mapa").style.visibility = "hidden";
    document.getElementById("poruka").style.visibility = "hidden";    
    document.getElementById("mapaMalo").style.visibility = "visible";
    odabraoMapu = true;
}

function idiNaCetvrtuStranicu() 
{
    if (odabraoMapu == true)
    {
        location.href = "fourth.html";
    }
    else
    {
        document.getElementById("poruka").style.visibility = "visible";
    } 
}