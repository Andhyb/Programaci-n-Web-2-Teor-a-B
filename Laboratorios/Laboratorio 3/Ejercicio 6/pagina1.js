
let tamañoActual = 16;
let colores = ["red", "blue", "green", "purple", "orange"];
let indiceColor = 0;

function agrandarLetra() {
    tamañoActual += 1;
    document.getElementById("texto").style.fontSize = tamañoActual + "px";
}

function achicarLetra() {
    tamañoActual -= 1;
    document.getElementById("texto").style.fontSize = tamañoActual + "px";
}

function cambiarColor() {
    indiceColor = (indiceColor + 1) % colores.length;
    document.getElementById("texto").style.color = colores[indiceColor];
}
