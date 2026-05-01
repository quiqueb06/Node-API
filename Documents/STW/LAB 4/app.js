import express from "express";
import { randomUUID } from "crypto";

const app = express();
const PORT = 3000;

// Parsear JSON
app.use(express.json());

// Datos iniciales
let canciones = [
  {
    id: randomUUID(),
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    genero: "pop",
    duracion: 200,
    year: 2019,
  },
  {
    id: randomUUID(),
    titulo: "HUMBLE.",
    artista: "Kendrick Lamar",
    genero: "hip-hop",
    duracion: 177,
    year: 2017,
  },
  {
    id: randomUUID(),
    titulo: "Bohemian Rhapsody",
    artista: "Queen",
    genero: "rock",
    duracion: 354,
    year: 1975,
  },
  {
    id: randomUUID(),
    titulo: "Bad Guy",
    artista: "Billie Eilish",
    genero: "pop",
    duracion: 194,
    year: 2019,
  },
  {
    id: randomUUID(),
    titulo: "Gasolina",
    artista: "Daddy Yankee",
    genero: "reggaeton",
    duracion: 203,
    year: 2004,
  },
];

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

