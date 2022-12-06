//with the help of my dad

window.addEventListener ("load", function(){
    document.getElementById("poruka1").style.visibility = "hidden";
    document.getElementById("poruka2").style.visibility = "hidden";
    document.getElementById("poruka3").style.visibility = "hidden";
});

var odabrao = 0;


function odgovor1() 
{
    odabrao = 1;
    odaberisliku()
}

function odgovor2() 
{
    odabrao = 2;
    odaberisliku()
}

function odgovor3() 
{
    odabrao = 3;
    odaberisliku()
}




function odaberisliku() 
{
    if (odabrao == 1)
    {
        document.getElementById("poruka1").style.visibility = "visible";
        document.getElementById("poruka2").style.visibility = "hidden";
        document.getElementById("poruka3").style.visibility = "hidden";
    }

    else if (odabrao == 2)

    {
        document.getElementById("poruka1").style.visibility = "hidden";
        document.getElementById("poruka2").style.visibility = "visible";
        document.getElementById("poruka3").style.visibility = "hidden";
    }

    else
    {
        document.getElementById("poruka1").style.visibility = "hidden";
        document.getElementById("poruka2").style.visibility = "hidden";
        document.getElementById("poruka3").style.visibility = "visible";
    } 
}