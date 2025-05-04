document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mostrar-btn');
  const lista = document.getElementById('ranking-regiones');

  btn.addEventListener('click', () => {
    fetch('/confirmados-por-region')
      .then(res => res.json())
      .then(data => {
        // Convertimos el objeto en array y lo ordenamos
        const top10 = Object.entries(data)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10);

        lista.innerHTML = '';
        top10.forEach(([region, total], index) => {
          const li = document.createElement('li');
          li.textContent = `${index + 1}. ${region}: ${total} casos`;
          lista.appendChild(li);
        });
      })
      .catch(err => console.error('Error al obtener el ranking:', err));
  });
});
