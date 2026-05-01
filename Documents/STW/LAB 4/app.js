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

// GET /api/canciones: Lista de canciones
app.get("/api/canciones", (req, res) => {
  try {
    const { genero } = req.query;

    // Filtrar por género si existe
    if (genero) {
      const resultado = canciones.filter(
        (c) => c.genero.toLowerCase() === genero.toLowerCase()
      );
      return res.status(200).json({ ok: true, data: resultado });
    }

    res.status(200).json({ ok: true, data: canciones });
  } catch (error) {
    res.status(500).json({ ok: false, error: "Error interno del servidor" });
  }
});

// GET /api/canciones/:id: Obtener canción por ID
app.get("/api/canciones/:id", (req, res) => {
  try {
    const cancion = canciones.find((c) => c.id === req.params.id);

    if (!cancion) {
      return res.status(404).json({ ok: false, error: "Canción no encontrada" });
    }

    res.status(200).json({ ok: true, data: cancion });
  } catch (error) {
    res.status(500).json({ ok: false, error: "Error interno del servidor" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

