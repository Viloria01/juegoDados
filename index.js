document.querySelector("button").addEventListener('click', function() {
    comparador();})


function probabilidad(){

    sorteo = Math.floor((Math.random())*10);
    while(sorteo<1 || sorteo > 6){
        sorteo = Math.floor((Math.random())*10);
    }   
    return sorteo;
}

function comparador(){
    var elemento1 = probabilidad();
    var elemento2 = probabilidad();

    var imagen1 = "dado" + elemento1+".png";
    var fuenteImagen1 = "image/"+ imagen1;
    var picture1 = document.querySelectorAll("img")[0];
    picture1.setAttribute("src", fuenteImagen1);

    var imagen2 = "dado" + elemento2+".png";
    var fuenteImagen2 = "image/"+ imagen2;
    var picture2 = document.querySelectorAll("img")[1];
    picture2.setAttribute("src", fuenteImagen2);


    if( elemento1 > elemento2){
        document.getElementById("test").innerHTML = "Player 1 WIN";
    }
    if(elemento1 < elemento2){
        document.getElementById("test").innerHTML = "Player 2 WIN";
    }
    if(elemento1 == elemento2){
        document.getElementById("test").innerHTML = "Draw";
    }


   
}
