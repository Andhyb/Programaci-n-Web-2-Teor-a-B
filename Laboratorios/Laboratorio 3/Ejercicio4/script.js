function extraerCodigo() {
  const url = document.getElementById('url').value.trim();
  
  const p = url.split('/');
  const codigoConGuiones = p[p.length - 1];
  
  const codigoSinGuiones = codigooConGuiones.replace(/-/g, '');
  
  document.getElementById('codigo').textContent = 
    `Código de sesión: ${codigoSinGuiones}`;
}

document.getElementById('botonDeExtraer').addEventListener('click', extraerCodigo);
