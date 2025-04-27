document.getElementById('formCantidad').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const cantidad = parseInt(document.getElementById('cantidad').value);
  const contenedor = document.getElementById('tablaContenedor');
  contenedor.innerHTML = ''; // Limpiar tabla anterior si hubiera

  // Crear tabla
  const tabla = document.createElement('table');
  tabla.id = 'tablaValores';
  const fila = tabla.insertRow();

  for (let i = 0; i < cantidad; i++) {
    const celda = fila.insertCell();
    const valor = Math.floor(Math.random() * 100) + 1; 
    celda.textContent = valor;
  }
  contenedor.appendChild(tabla);

  const botonSumar = document.createElement('button');
  botonSumar.textContent = 'Calcular Suma';
  botonSumar.addEventListener('click', calcularSuma);

  contenedor.appendChild(document.createElement('br'));
  contenedor.appendChild(botonSumar);
});

function calcularSuma() {
  const tabla = document.getElementById('tablaValores');
  let suma = 0;

  for (let celda of tabla.rows[0].cells) {
    suma += parseInt(celda.textContent);
  }

  document.getElementById('resultado').textContent = `La suma de los datos de la tabla es: ${suma}`;
}
