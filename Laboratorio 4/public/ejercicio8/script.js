document.addEventListener('DOMContentLoaded', () => {
  fetch('/comparar-diario-sin-lima-callao')
    .then(res => res.json())
    .then(datos => {
      google.charts.load('current', { packages: ['corechart'] });
      google.charts.setOnLoadCallback(() => dibujarGrafico(datos));
    })
    .catch(err => console.error('Error al cargar datos:', err));
});

function dibujarGrafico(datos) {
  const encabezado = ['Fecha', ...datos.regiones];

  const filas = datos.fechas.map((fecha, i) => {
    return [fecha, ...datos.regiones.map(r => datos.valores[r][i])];
  });

  const data = google.visualization.arrayToDataTable([encabezado, ...filas]);

  const opciones = {
    title: 'Casos Confirmados por Día en Regiones (sin Lima y Callao)',
    curveType: 'function',
    legend: { position: 'bottom' },
    vAxis: {
      title: 'Confirmados por Día'
    },
    hAxis: {
      title: 'Fecha'
    }
  };

  const chart = new google.visualization.LineChart(document.getElementById('grafico'));
  chart.draw(data, opciones);
}
