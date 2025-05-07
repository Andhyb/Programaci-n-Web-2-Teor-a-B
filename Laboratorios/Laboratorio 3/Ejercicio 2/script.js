function invertirTexto() {
  const entrada = document.getElementById('texto').value;
  const invertido = entrada.split('').reverse().join('');
  document.getElementById('resultado').textContent = invertido;
}

document.getElementById('botonInvertir').addEventListener('click', invertirTexto);
