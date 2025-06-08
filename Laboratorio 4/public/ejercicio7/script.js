document.addEventListener('DOMContentLoaded', () => {
  // Cargar regiones
  fetch('/regiones')
    .then(res => res.json())
    .then(regiones => {
      const container = document.getElementById('checkboxes');
      regiones.forEach(region => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'region';
        checkbox.value = region;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(' ' + region));
        container.appendChild(label);
        container.appendChild(document.createElement('br'));
      });
    });

  // Enviar selección
  document.getElementById('form-regiones').addEventListener('submit', e => {
    e.preventDefault();

    const seleccionadas = Array.from(document.querySelectorAll('input[name="region"]:checked'))
      .map(cb => cb.value);

    if (seleccionadas.length === 0) return alert("Elige al menos una región.");

    fetch('/comparar-regiones-seleccionadas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ regiones: seleccionadas })
    })
      .then(res => res.json())
      .then(datos => {
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(() => dibujarGrafico(datos));
      });
  });
});

function dibujarGrafico(datos) {
  const encabezado = ['Fecha', ...datos.regiones];
  const filas = datos.fechas.map((fecha, i) => {
    return [fecha, ...datos.regiones.map(r => datos.valores[r][i])];
  });

  const data = google.visualization.arrayToDataTable([encabezado, ...filas]);

  const opciones = {
    title: 'Comparación de Regiones Seleccionadas',
    curveType: 'function',
    legend: { position: 'bottom' },
    vAxis: {
      title: 'Casos Confirmados',
      scaleType: 'log',
      minValue: 1
    }
  };

  const chart = new google.visualization.LineChart(document.getElementById('grafico'));
  chart.draw(data, opciones);
}
