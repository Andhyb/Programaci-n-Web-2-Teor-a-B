function realizarOperacion() {
    let primerOperando = parseInt(document.getElementById("valorUno").value);
    let segundoOperando = parseInt(document.getElementById("valorDos").value);
    let operadorSeleccionado = document.getElementById("operadorElegido").value;
    let resultadoOperacion;

    switch (operadorSeleccionado) {
        case '+':
            resultadoOperacion = primerOperando + segundoOperando;
            break;
        case '-':
            resultadoOperacion = primerOperando - segundoOperando;
            break;
        case '*':
            resultadoOperacion = primerOperando * segundoOperando;
            break;
        case '/':
            resultadoOperacion = segundoOperando !== 0 ? primerOperando / segundoOperando : "Error: División entre cero";
            break;
        case '%':
            resultadoOperacion = segundoOperando !== 0 ? primerOperando % segundoOperando : "Error: División entre cero";
            break;
        case '&&':
            resultadoOperacion = primerOperando && segundoOperando;
            break;
        case '||':
            resultadoOperacion = primerOperando || segundoOperando;
            break;
        case '&':
            resultadoOperacion = primerOperando & segundoOperando;
            break;
        case '|':
            resultadoOperacion = primerOperando | segundoOperando;
            break;
        case '^':
            resultadoOperacion = primerOperando ^ segundoOperando;
            break;
        default:
            resultadoOperacion = "Operador inválido";
    }

    document.getElementById("resultadoFinal").innerText = "Resultado: " + resultadoOperacion;
}
