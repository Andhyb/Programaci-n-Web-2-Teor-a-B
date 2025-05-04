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


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
