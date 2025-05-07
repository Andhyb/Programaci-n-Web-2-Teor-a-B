const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static('public'));


app.get('/regiones', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error al leer el archivo');
    const json = JSON.parse(data);
    const regiones = [...new Set(json.map(item => item.region))]; // regiones únicas
    res.json(regiones);
  });
});

app.get('/confirmados-por-region', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error al leer el archivo');
    
    const json = JSON.parse(data);
    const resultado = {};

    json.forEach(entry => {
      const region = entry.region;
      const confirmadosArray = entry.confirmed || [];
      let total = 0;

      confirmadosArray.forEach(dato => {
        total += parseInt(dato.value) || 0;
      });

      resultado[region] = total;
    });

    res.json(resultado);
  });
});

app.get('/datos-arequipa', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error al leer el archivo');

    const json = JSON.parse(data);
    const arequipa = json.find(entry => entry.region.toLowerCase() === 'arequipa');

    if (!arequipa || !arequipa.confirmed) return res.status(404).send('No se encontró Arequipa');

    const datos = arequipa.confirmed.map(dato => ({
      fecha: dato.date,
      valor: parseInt(dato.value) || 0
    }));

    res.json(datos);
  });
});

app.get('/comparar-regiones', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error al leer el archivo');

    const json = JSON.parse(data);
    const regionesSeleccionadas = ['Lima', 'Arequipa', 'Piura'];

    const fechas = json.find(r => r.region === 'Lima').confirmed.map(d => d.date);

    const valores = {};
    regionesSeleccionadas.forEach(region => {
      const regionData = json.find(r => r.region === region);
      valores[region] = regionData.confirmed.map(d => parseInt(d.value) || 0);
    });

    res.json({ fechas, regiones: regionesSeleccionadas, valores });
  });
});

app.use(express.json());

app.post('/comparar-regiones-seleccionadas', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  const seleccionadas = req.body.regiones;

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error al leer el archivo');

    const json = JSON.parse(data);
    const fechas = json.find(r => r.region === seleccionadas[0]).confirmed.map(d => d.date);

    const valores = {};
    seleccionadas.forEach(region => {
      const regionData = json.find(r => r.region === region);
      valores[region] = regionData.confirmed.map(d => parseInt(d.value) || 0);
    });

    res.json({ fechas, regiones: seleccionadas, valores });
  });
});

app.get('/comparar-diario-sin-lima-callao', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error al leer el archivo');

    const json = JSON.parse(data);

    // Excluir Lima y Callao
    const regionesFiltradas = json
      .filter(r => r.region !== 'Lima' && r.region !== 'Callao')
      .map(r => r.region);

    const fechas = json.find(r => r.region === 'Ancash').confirmed.map(d => d.date);

    const valores = {};
    regionesFiltradas.forEach(region => {
      const regionData = json.find(r => r.region === region);
      const acumulados = regionData.confirmed.map(d => parseInt(d.value) || 0);

      // Calculamos diferencia diaria: día actual - día anterior
      const diarios = acumulados.map((val, i) => {
        if (i === 0) return 0;
        return Math.max(0, val - acumulados[i - 1]); // evita negativos por errores
      });

      valores[region] = diarios;
    });

    res.json({ fechas, regiones: regionesFiltradas, valores });
  });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
