document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mostrar-btn');
  const lista = document.getElementById('lista-confirmados');

  btn.addEventListener('click', () => {
    fetch('/confirmados-por-region')
      .then(response => response.json())
      .then(data => {
        lista.innerHTML = ''; // Limpiar lista anterior
        for (const region in data) {
          const li = document.createElement('li');
          li.textContent = `${region}: ${data[region]} casos confirmados`;
          lista.appendChild(li);
        }
      })
      .catch(err => console.error('Error al obtener datos:', err));
  });
});
