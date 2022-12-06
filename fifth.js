var odabraoSvjetlo = false;

window.addEventListener ("load", function(){
document.getElementById("umbrellaMalo").style.visibility = "hidden";
document.getElementById("mapMalo").style.visibility = "visible";
document.getElementById("flashlight").style.visibility = "visible";
document.getElementById("poruka").style.visibility = "hidden";
document.getElementById("totoroumbrella").style.visibility = "hidden";
document.getElementById("kisobran").style.visibility = "visible";
    });

function pokaziSlikuDolje() 
{
    document.getElementById("kisobran").style.visibility = "hidden";
    document.getElementById("poruka").style.visibility = "hidden";    
    document.getElementById("umbrellaMalo").style.visibility = "visible";
    
}

function idiNaSestuStranicu() 
{
    if (odabraoSvjetlo == true)
    {
        location.href = "sixth.html";
    }
    else
    {
        document.getElementById("poruka").style.visibility = "visible";
    } 
}

function kisobranTotoru() 
{
    document.getElementById("totorostanding").style.visibility = "hidden";
    document.getElementById("totoroumbrella").style.visibility = "visible";
    odabraoSvjetlo = true;
}
