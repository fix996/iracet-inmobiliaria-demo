# Verificación de la demo · Guillermo Iracet

Actualización del 4 de octubre de 2026. La versión anterior, basada en un catálogo publicado con el nombre de otra persona, permanece recuperable en el historial de Git. Esta versión no muestra esos avisos ni datos de contacto.

## Alcance comprobado

- La portada es una propuesta institucional breve; el menú incluye ocho secciones de muestra.
- Cada sección declara que es una demo y que el contenido final queda pendiente de validación.
- No se incluyen propiedades, precios, fotografías de inmuebles, teléfono, correo, dirección, formularios ni enlaces de mensajería.
- La ilustración arquitectónica de la portada es decorativa. El diseño y sus colores son conceptuales.
- `noindex`, `nofollow` y `noarchive` continúan en la portada y la página de fuentes.

## Pruebas

- `npm run build` completó TypeScript y Vite. `npm audit --omit=dev --audit-level=high` informó 0 vulnerabilidades; se usó el almacén de certificados del sistema para completar la consulta TLS.
- GitHub Actions publicó el commit `1e7a632` y la URL pública respondió HTTP 200. El HTML servido incluye el bundle correcto y la directiva `noindex`. La página de fuentes respondió 200 sin teléfonos, correo ni enlaces de mensajería; una fotografía retirada respondió 404.
- En navegador se revisaron portada en escritorio de 1280 px, portada y sección Propiedades a 390 px, y menú y sección Contacto a 360 px. No se observó desbordamiento horizontal ni errores de consola en esos recorridos.
- El menú contiene Inicio y ocho secciones de muestra. Propiedades y Contacto muestran el aviso de demo y carecen de fichas, precios o enlaces activos de teléfono/correo/mensajería.
- Peso del build: JavaScript 208,02 kB (65,03 kB gzip), CSS 10,96 kB (3,28 kB gzip). Se retiraron 111 imágenes que sumaban aproximadamente 17,07 MB; la ilustración actual se genera con CSS.

La verificación confirma los recorridos indicados, no la vigencia comercial del nombre o de los datos que se agregarán más adelante.
