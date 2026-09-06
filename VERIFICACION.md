# Verificación de la demo

Fecha: 6 de septiembre de 2026. Alcance: seis avisos de Cruz del Eje, portal personal conceptual de Gaspar Tapia Iracet.

## Fuentes

- Sitio oficial de Red Nova: Gaspar en el equipo, teléfono, email, retrato y logo. CPI 6914 atribuido a la organización.
- Catálogo y seis fichas consultados directamente: respuesta HTTP 200, avisos incluidos en catálogo, 109 fotografías de sus galerías.
- Discrepancias de precio, superficie, baños y cercanía al río documentadas en fichas y `public/fuentes.html`.
- No se verificó disponibilidad con el asesor porque no se autorizaron mensajes. Se informa como “Consultar disponibilidad”. Instagram personal, matrícula personal, horarios y continuidad con Guillermo no se inventan.

## Pruebas realizadas en navegador

- Escritorio: 1440 × 1000. Celular: 390 × 844. Portada, catálogo, fichas, galería ampliada, propietarios, servicios, zonas, profesional, FAQ y contacto inspeccionados visualmente.
- Filtros: alquiler 1; venta 5; terrenos 1; destacadas 3; USD hasta 60.000 devuelve Sarmiento y Laprida; 4 dormitorios devuelve Mathieu; pileta devuelve Illia, Mathieu y quinta; tipo local devuelve casa + local; Camino al Dique devuelve Illia; ARS devuelve alquiler. Combinación sin coincidencias muestra estado vacío y permite limpiar.
- Favoritos: alta de dos propiedades, visualización de selección y persistencia tras recarga.
- Comparador: tres altas, rechazo claro de una cuarta, tabla de características, retiro/vaciado, persistencia tras recarga. Monedas originales sin conversiones. Desplazamiento de la tabla dentro del diálogo en móvil.
- Galerías: seis fichas abiertas; ampliación, siguiente y acceso a última miniatura verificados: 16, 25, 19, 22, 15 y 12. Imágenes revisadas en hojas de contacto completas; sin interfaces ni marcas de portales incrustadas.
- Formularios: pruebas con datos ficticios en propietario y contacto; confirmación explícita de que no se envió ni guardó información. Campos requeridos y formato de teléfono mediante validación nativa.
- Menú móvil abre y se cierra al navegar. Sin desbordamiento horizontal global a 390 px. Entradas de formularios de 16 px en móvil para evitar zoom de foco.
- Mapa aproximado cargado a pedido. Enlace alternativo de Google Maps disponible.
- Enlaces de WhatsApp: número profesional confirmado; seis mensajes personalizados con ubicación, importe, moneda y referencia. Sin envíos reales.
- FAQ abre respuestas mediante controles nativos. Diálogos nativos con cierre y navegación por teclado. Preferencia de movimiento reducido respetada en CSS.

## Compilación y dependencias

- TypeScript y compilación de producción correctos.
- Dependencia de optimización sharp actualizada a 0.35.4; instalación informó 0 vulnerabilidades. Auditoría de dependencias de producción: 0 vulnerabilidades.
- Hash routing, base `/iracet-inmobiliaria-demo/`, fuentes y assets incluidos en build. Meta noindex en portada y página de fuentes.
- Sin backend, sin analítica, sin credenciales. Investigación cruda y pruebas locales excluidas del repositorio público.

Las verificaciones de publicación se completan después del despliegue mediante la URL pública y GitHub Actions.
