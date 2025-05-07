document.addEventListener('DOMContentLoaded', () => {
  fetch('/datos-arequipa')
    .then(res => res.json())
    .then(datos => {
      // Cargar Google Charts
      google.charts.load('current', { packages: ['corechart'] });
      google.charts.setOnLoadCallback(() => dibujarGrafico(datos));
    })
    .catch(err => console.error('Error al cargar datos de Arequipa:', err));
});

function dibujarGrafico(datos) {
  const arrayDatos = [['Fecha', 'Confirmados']];
  datos.forEach(d => {
    arrayDatos.push([d.fecha, d.valor]);
  });

  const data = google.visualization.arrayToDataTable(arrayDatos);

  const opciones = {
    title: 'Casos Confirmados en Arequipa por Fecha',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  const chart = new google.visualization.LineChart(document.getElementById('grafico'));
  chart.draw(data, opciones);
}
