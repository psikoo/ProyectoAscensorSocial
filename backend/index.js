const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

//! Rutas 
const rutas = [
  { conversor_centiles_euros_hijos_simple: "http://localhost:3000/api/conversor_centiles_euros_hijos_simple" },
  { conversor_centiles_euros_padres_simple: "http://localhost:3000/api/conversor_centiles_euros_padres_simple" },
  { distribucion_quintiles_nacional_pivot: "http://localhost:3000/api/distribucion_quintiles_nacional_pivot" },
  { movilidad_nacional_curva: "http://localhost:3000/api/movilidad_nacional_curva" },
  { ranking_ccaa_centil_padres_20: "http://localhost:3000/api/ranking_ccaa_centil_padres_20" }
];

app.get('/api', (req, res) => {
  res.json(rutas);
});
app.get('/api/conversor_centiles_euros_hijos_simple', (req, res) => {
  try {
    const data = fs.readFileSync('./data/conversor_centiles_euros_hijos_simple.json', 'utf8');
    const obj = JSON.parse(data);
    res.json(obj);
  } catch (err) { console.error(err); }
});
app.get('/api/conversor_centiles_euros_padres_simple', (req, res) => {
  try {
    const data = fs.readFileSync('./data/conversor_centiles_euros_padres_simple.json', 'utf8');
    const obj = JSON.parse(data);
    res.json(obj);
  } catch (err) { console.error(err); }
});
app.get('/api/distribucion_quintiles_nacional_pivot', (req, res) => {
  try {
    const data = fs.readFileSync('./data/distribucion_quintiles_nacional_pivot.json', 'utf8');
    const obj = JSON.parse(data);
    res.json(obj);
  } catch (err) { console.error(err); }
});
app.get('/api/movilidad_nacional_curva', (req, res) => {
  try {
    const data = fs.readFileSync('./data/movilidad_nacional_curva.json', 'utf8');
    const obj = JSON.parse(data);
    res.json(obj);
  } catch (err) { console.error(err); }
});
app.get('/api/ranking_ccaa_centil_padres_20', (req, res) => {
  try {
    const data = fs.readFileSync('./data/ranking_ccaa_centil_padres_20.json', 'utf8');
    const obj = JSON.parse(data);
    res.json(obj);
  } catch (err) { console.error(err); }
});

app.listen(PORT, () => {
  console.log(`Backend: http://localhost:${PORT}/api`);
});