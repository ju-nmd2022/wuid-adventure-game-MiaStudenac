//with the help of this website: https://sebhastian.com/coin-flip-javascript/

window.addEventListener ("load", function(){
    document.getElementById("randomimage").style.visibility = "hidden";
    document.getElementById("randomimage1").style.visibility = "hidden";
    document.getElementById("randomimage2").style.visibility = "hidden";
    });
    
    let button = document.getElementById("flip");
        let result = document.getElementById("result");
        let img = document.getElementById ("randomimage")
    
        function fnClick(event) {
          let num = Math.random();
         
    
          if (num < 0.3) {
            result.innerHTML = "You got HEAD";
            document.getElementById("randomimage2").style.visibility = "visible";
            document.getElementById("randomimage1").style.visibility = "hidden";
            document.getElementById("randomimage").style.visibility = "hidden";
          } else if (num > 0.3 && num <0.6) {
            result.innerHTML = "You got TAIL";
            document.getElementById("randomimage1").style.visibility = "visible";
            document.getElementById("randomimage2").style.visibility = "hidden";
            document.getElementById("randomimage").style.visibility = "hidden";
           } else {
            result.innerHTML = "You got BINGO";
            document.getElementById("randomimage").style.visibility = "visible";
            document.getElementById("randomimage2").style.visibility = "hidden";
            document.getElementById("randomimage1").style.visibility = "hidden";
          }
        }
    
        button.addEventListener("click", fnClick);