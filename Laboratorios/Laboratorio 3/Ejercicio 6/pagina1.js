
let tamañoActual = 16;

function agrandarLetra() {
    tamañoActual += 1;
    document.getElementById("texto").style.fontSize = tamañoActual + "px";
}

function achicarLetra() {
    tamañoActual -= 1;
    document.getElementById("texto").style.fontSize = tamañoActual + "px";
}
