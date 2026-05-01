# Lab 4 - Parte 2: API REST Playlist Musical

API REST construida con Node.js y Express para gestionar una playlist de canciones.

## Tecnologías

- Node.js
- Express 4

## Instalación

```bash
npm install
```

## Uso

```bash
node app.js
```

El servidor corre en `http://localhost:3000`.

---

## Endpoints

### Informativo

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Lista todos los endpoints disponibles |

### CRUD de Canciones

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/canciones` | Obtener todas las canciones |
| GET | `/api/canciones?genero=pop` | Filtrar canciones por género |
| GET | `/api/canciones/:id` | Obtener una canción por ID |
| POST | `/api/canciones` | Agregar una nueva canción |
| PUT | `/api/canciones/:id` | Reemplazar una canción completa |
| PATCH | `/api/canciones/:id` | Actualizar campos específicos |
| DELETE | `/api/canciones/:id` | Eliminar una canción |

---

## Estructura de una Canción

```json
{
  "id": "uuid-generado-automaticamente",
  "titulo": "Blinding Lights",
  "artista": "The Weeknd",
  "genero": "pop",
  "duracion": 200,
  "year": 2019
}
```

## Campos obligatorios para POST y PUT

- `titulo`
- `artista`
- `genero`
- `duracion`
- `year`

---

## Códigos HTTP utilizados

| Código | Significado | Cuándo se usa |
|--------|-------------|---------------|
| 200 | OK | Lectura, actualización o eliminación exitosa |
| 201 | Created | Canción creada exitosamente (POST) |
| 400 | Bad Request | Faltan campos obligatorios |
| 404 | Not Found | Canción o ruta no encontrada |
| 500 | Internal Server Error | Error inesperado del servidor |

---

## Ejemplos de uso con curl

**Obtener todas las canciones:**
```bash
curl http://localhost:3000/api/canciones
```

**Filtrar por género:**
```bash
curl http://localhost:3000/api/canciones?genero=pop
```

**Crear una canción:**
```bash
curl -X POST http://localhost:3000/api/canciones \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Shape of You","artista":"Ed Sheeran","genero":"pop","duracion":234,"year":2017}'
```

**Actualizar campos (PATCH):**
```bash
curl -X PATCH http://localhost:3000/api/canciones/<id> \
  -H "Content-Type: application/json" \
  -d '{"genero":"electropop"}'
```

**Eliminar una canción:**
```bash
curl -X DELETE http://localhost:3000/api/canciones/<id>
```
