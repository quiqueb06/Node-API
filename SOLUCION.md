# Entregable de la Parte 1

### Error #1: Tipo de contenido mal escrito
**Ubicación:** Línea 15 del archivo original
**Tipo de error:** HTTP
**Qué estaba mal:** El texto decía `"application-json"` pero estaba mal escrito, por lo que el navegador no lo reconocía.
**Cómo lo corregí:** 
`res.writeHead(200, { "Content-Type": "application-json" })` -> `res.writeHead(200, { "Content-Type": "application/json" })`
**Por qué funciona ahora:** Usamos el nombre correcto con una barra diagonal (`application/json`), lo que le avisa bien al navegador que está recibiendo datos JSON.

---

### Error #2: Lectura del archivo sin esperar
**Ubicación:** Línea 22 del archivo original
**Tipo de error:** Asincronía
**Qué estaba mal:** El programa intentaba leer el archivo pero no se esperaba a terminar. Por eso, en lugar del texto, guardaba una tarea pendiente (una Promesa).
**Cómo lo corregí:** 
`const texto = fs.readFile(filePath, "utf-8")` -> `const texto = await fs.readFile(filePath, "utf-8")`
**Por qué funciona ahora:** La palabra `await` hace que el programa se pause un ratito hasta que el archivo termine de leerse por completo, obteniendo el texto real.

---

### Error #3: Empaquetar un JSON dos veces
**Ubicación:** Línea 24 del archivo original
**Tipo de error:** Lógica
**Qué estaba mal:** El texto que se leía del archivo `datos.json` ya estaba en formato JSON. Al usar `JSON.stringify()`, se estaba metiendo un JSON adentro de otro JSON, y eso rompía los datos.
**Cómo lo corregí:** 
`res.end(JSON.stringify(texto))` -> `res.end(texto)`
**Por qué funciona ahora:** Ahora se envía el texto exactamente como sale del archivo, sin alterarlo, por lo que el cliente lo recibe en el formato correcto.

---

### Error #4: Código de estado "Todo bien" para un error
**Ubicación:** Línea 28 del archivo original
**Tipo de error:** HTTP
**Qué estaba mal:** Cuando alguien buscaba una ruta que no existía, el servidor respondía con un código `200`, que en internet significa "Todo bien / Éxito".
**Cómo lo corregí:** 
`res.writeHead(200, { "Content-Type": "text/plain" })` -> `res.writeHead(404, { "Content-Type": "text/plain" })`
**Por qué funciona ahora:** Se cambió al código `404`, que es la forma universal de decirle al navegador "Esta ruta no fue encontrada".

---

### Error #5: Paréntesis sin cerrar
**Ubicación:** Líneas 30 y 34 del archivo original
**Tipo de error:** Sintaxis
**Qué estaba mal:** Faltaba cerrar los paréntesis al final de crear y de encender el servidor. Esto es como olvidar un punto al final de una oración; hacía que el servidor ni siquiera pudiera prender.
**Cómo lo corregí:** 
`}` -> `});` (en ambas líneas)
**Por qué funciona ahora:** Al cerrar correctamente los bloques de código, se elimina el error de escritura y el programa ya puede arrancar sin problemas.
