
/* cambiar imagen */
var Btn1 = document.getElementById("img1");
var Btn2 = document.getElementById("img2");
var Btn3= document.getElementById("img3");
var img = document.getElementById("img");

Btn1.onclick = function() {
    img.src = "./img/img1.jpg";
}

Btn2.onclick = function() {
    img.src = "./img/img2.jpg";
}

Btn3.onclick = function() {
    img.src = "./img/img3.jpg";
}

/* cambiar color */
document.addEventListener('DOMContentLoaded', function() {
    var Articulo1 = document.getElementById('n1');
    var Articulo2 = document.getElementById('n2');
    var Articulo3 = document.getElementById('n3');
    var cambiar1 = document.getElementById('color1');
    var cambiar2= document.getElementById('color2');
    var cambiar3 = document.getElementById('color3');

    cambiar1.addEventListener('click', function() {
        cambiarColor(Articulo1);
    });
    cambiar2.addEventListener('click', function() {
        cambiarColor(Articulo2);
    });
    cambiar3.addEventListener('click', function() {
        cambiarColor(Articulo3);
    });
});

function cambiarColor(elemento) {
    elemento.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}
