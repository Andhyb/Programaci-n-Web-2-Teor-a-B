
function obtenerDia(numeroDia) {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    if (numreroDia >= 0 && numeroDia <= 6) {
        return diasSemana[numeroDia];
    } else {
        return "Número de día inválido";
    }
}
