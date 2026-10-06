# AWAS FRESKAS

Sitio educativo estático con identidad de marca, tres bebidas, investigación sobre tecnologías web y autoevaluación. Incluye el logotipo original y su paleta. No requiere Node.js, npm, backend ni base de datos.

## Abrir en VS Code

1. Extrae el ZIP.
2. Abre la carpeta `awas-freskas` mediante **Archivo → Abrir carpeta**.
3. Instala la extensión **Live Server**, de Ritwick Dey, si todavía no la tienes.
4. Haz clic derecho sobre `index.html` y selecciona **Open with Live Server**.
5. Visita las páginas desde el menú. Al guardar cambios, Live Server actualiza la vista.

Usa un servidor HTTP local para probar la carga del catálogo mediante `fetch`. Abrir el HTML con doble clic no permite esa prueba de forma confiable.

Alternativa si tienes Python instalado:

```powershell
cd C:\ruta\awas-freskas
py -m http.server 5500
```

Abre `http://localhost:5500`. Presiona `Ctrl+C` para detenerlo.

## Archivos y función

| Archivo | Función |
|---|---|
| `index.html` | Marca, producto, público objetivo, propuesta de valor y colores |
| `javascript.html` | Conceptos de JavaScript y demostración del cambio de sabor |
| `jquery.html` | Conceptos, comparación con JS y efectos reales de jQuery |
| `json.html` | Estructura JSON, editor de validación y catálogo cargado con fetch |
| `hosting.html` | Hosting, Vercel, dominios, DNS y pasos de publicación |
| `cuestionario.html` | Diez preguntas de selección múltiple |
| `assets/styles.css` | Estilos compartidos de las páginas informativas |
| `assets/home.css` | Diseño exclusivo de la portada, paleta y adaptación a dispositivos |
| `assets/home.js` | Selector de las descripciones de las bebidas |
| `assets/bebidas-hero.webp` | Imagen editorial generada para la portada |
| `assets/app.js` | Menú, ejemplos, copia de código y evaluación |
| `assets/bebidas.json` | Datos de las tres bebidas utilizados en la demostración JSON |
| `assets/logo.png` | Logotipo proporcionado, con transparencia |
| `assets/favicon.png` | Icono del sitio derivado del logotipo |
| `assets/vendor/jquery-4.0.0.min.js` | Librería jQuery local, con su aviso de licencia |
| `vercel.json` | Configuración para un futuro despliegue estático |
| `.gitignore` | Exclusiones para Git |

## Producto

| Es de | Parece de | Sabe a | Descripción |
|---|---|---|---|
| Jamaica | Limón | Tamarindo | La que parece de limón es de jamaica, pero sabe a tamarindo. |
| Limón | Tamarindo | Jamaica | La que parece de tamarindo es de limón, pero sabe a jamaica. |
| Tamarindo | Jamaica | Limón | La que parece de jamaica es de tamarindo, pero sabe a limón. |

Nombre: **AWAS FRESKAS**. Público: jóvenes, estudiantes y familias que disfrutan bebidas refrescantes y marcas con humor. Propuesta de valor: una línea de tres bebidas con identidad compartida y descripciones memorables que provocan conversación.

## Paleta

| Color | Hexadecimal | Uso y criterio de marca |
|---|---|---|
| Rojo jamaica | `#B90032` | Energía, expresividad y acentos |
| Verde limón | `#78A900` | Frescura y vitalidad |
| Marrón tamarindo | `#592600` | Calidez, cercanía, texto y botones |

Los tres tonos representan los colores del logotipo rasterizado. Las asociaciones psicológicas son decisiones de diseño y pueden variar entre culturas. El blanco y los tonos claros apoyan la lectura.

## Dónde realizar correcciones

- **Textos:** edita el HTML de cada página. La navegación y el pie se repiten en las seis páginas: actualiza todas si cambias sus enlaces.
- **Portada:** cambia los textos en `index.html` y su diseño en `assets/home.css`. El selector utiliza las descripciones de `assets/home.js`.
- **Colores:** cambia las variables del bloque `:root` de `assets/styles.css`. Actualiza también la tabla de la portada y los colores de `bebidas.json` si cambias la identidad.
- **Productos:** ajusta las tarjetas de `index.html` y los datos de `assets/bebidas.json`. Las demostraciones de las páginas contienen ejemplos independientes.
- **Preguntas:** cambia el texto y las opciones en `cuestionario.html`; actualiza `quizAnswers` en `assets/app.js`. `correcta` es el índice de la opción: `0` para la primera, `1` para la segunda y `2` para la tercera. Conserva la correspondencia con los identificadores `q0` a `q9`.
- **Comportamiento:** modifica `assets/app.js`. Si alteras los ejemplos, actualiza los bloques de código y su explicación en las páginas correspondientes.
- **Logotipo:** reemplaza `assets/logo.png` y `assets/favicon.png` conservando los nombres, o actualiza las rutas.

El cuestionario valida que estén contestadas las diez preguntas. Muestra puntuación, porcentaje, respuesta correcta, explicación y enlace al tema. Cambiar una respuesta limpia la evaluación anterior. Reiniciar elimina las selecciones. Los resultados son temporales y no se envían ni se guardan.

## Revisión sugerida

1. Recorrer las seis páginas y comprobar la navegación.
2. Reducir el ancho de la ventana y abrir/cerrar el menú móvil.
3. Cambiar el sabor tres veces para comprobar que vuelve a Jamaica.
4. Probar `fadeIn`, ocultar y abrir/cerrar `slideToggle`.
5. Validar un JSON correcto y otro con una comilla faltante.
6. Cargar el catálogo JSON desde Live Server.
7. Avanzar y reiniciar la demostración DNS.
8. Enviar el cuestionario incompleto y verificar el aviso.
9. Contestar todas las preguntas, revisar el resultado y reiniciar.
10. Probar navegación por teclado y revisar legibilidad en móvil.

## GitHub: cuando decidas publicarlo

Crea un repositorio público vacío llamado `awas-freskas`, sin README inicial. Desde la terminal de esta carpeta:

```bash
git init
git add .
git commit -m "Crear sitio educativo AWAS FRESKAS"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/awas-freskas.git
git push -u origin main
```

Sustituye `TU_USUARIO` por tu cuenta. Conserva commits posteriores para modificaciones reales. Este ZIP no incorpora un historial inventado de avances ni crea un repositorio remoto.

## Vercel: cuando decidas desplegarlo

1. En Vercel, selecciona **Add New → Project** e importa el repositorio.
2. Selecciona **Other** como framework.
3. Usa la raíz del repositorio como **Root Directory**.
4. No requiere comando de compilación ni instalación. Usa `.` como directorio de salida si se solicita; `vercel.json` ya lo declara.
5. Selecciona **Deploy** y revisa la dirección asignada por Vercel.
6. Repite la revisión funcional en esa dirección.
7. Los nuevos commits enviados a la rama de producción podrán generar despliegues automáticos.

La configuración está preparada; no se ha realizado un despliegue. `awasfreskas.com` es solamente un ejemplo didáctico y no un dominio registrado para este proyecto.

## Entrega según la guía

Cuando el proyecto esté revisado y publicado, entregar únicamente:

1. Enlace al repositorio público de GitHub.
2. Enlace público del proyecto en Vercel.

## Fuentes

Cada página informativa contiene su bibliografía con enlaces a documentación oficial de MDN, jQuery, Vercel, Cloudflare y AWS. Fecha de consulta: 6 de octubre de 2026. Los ejemplos de código se adaptaron al contexto de la marca.

jQuery 4.0.0 se distribuye bajo licencia MIT; su aviso está incluido en el archivo de la librería. El sitio usa recursos locales para su funcionamiento. Los enlaces de bibliografía requieren conexión a internet.
