document.addEventListener('DOMContentLoaded', () => {
  fetch('/regiones')
    .then(response => response.json())
    .then(regiones => {
      const lista = document.getElementById('lista-regiones');
      regiones.forEach(region => {
        const li = document.createElement('li');
        li.textContent = region;
        lista.appendChild(li);
      });
    })
    .catch(error => console.error('Error al cargar las regiones:', error));
});
