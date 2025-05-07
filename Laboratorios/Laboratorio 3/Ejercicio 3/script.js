function calcularDiasFaltantes() {
  const hoy = new Date();
  const añoActual = hoy.getFullYear();
  let diaArequipa = new Date(añoActual, 7, 15); // Mes 7 = Agosto 

  // Si ya pasó el 15 de agosto este año.
  if (hoy > diaArequipa) {
    diaArequipa = new Date(añoActual + 1, 7, 15);
  }
  const diferencia = diaArequipa - hoy;
  const diasFaltantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

  document.getElementById('diasFaltantes').textContent = 
    `Faltan ${diasFaltantes} día(s) para el día de arequipa`;
}

calcularDiasFaltantes();
