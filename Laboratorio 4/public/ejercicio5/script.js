document.addEventListener('DOMContentLoaded', () => {
  fetch('/comparar-regiones')
    .then(res => res.json())
    .then(datos => {
      google.charts.load('current', { packages: ['corechart'] });
      google.charts.setOnLoadCallback(() => dibujarGrafico(datos));
    })
    .catch(err => console.error('Error al cargar datos:', err));
});

function dibujarGrafico(datos) {

  const encabezado = ['Fecha', ...datos.regiones];

  // Convertimos los datos a formato por fila (una por fecha)
  const filas = datos.fechas.map((fecha, i) => {
    return [fecha, ...datos.regiones.map(r => datos.valores[r][i])];
  });

  const data = google.visualization.arrayToDataTable([encabezado, ...filas]);

  const opciones = {
    title: 'Comparación de Casos Confirmados entre Regiones',
    curveType: 'function',
    legend: { position: 'bottom' },
    vAxis: {
      title: 'Casos Confirmados',
      scaleType: 'log',
      minValue: 1
    },
    hAxis: {
      title: 'Fecha'
    }
  };

  const chart = new google.visualization.LineChart(document.getElementById('grafico'));
  chart.draw(data, opciones);
}
