var odabraoSvjetlo = false;

window.addEventListener ("load", function(){
document.getElementById("flashlightMalo").style.visibility = "hidden";
document.getElementById("poruka").style.visibility = "hidden";
    });

function pokaziSlikuDolje() 
{
    document.getElementById("svjetlo").style.visibility = "hidden";
    document.getElementById("poruka").style.visibility = "hidden";    
    document.getElementById("flashlightMalo").style.visibility = "visible";
    odabraoSvjetlo = true;
}

function idiNaTrecuStranicu() 
{
    if (odabraoSvjetlo == true)
    {
        location.href = "third.html";
    }
    else
    {
        document.getElementById("poruka").style.visibility = "visible";
    } 
}