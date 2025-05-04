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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
