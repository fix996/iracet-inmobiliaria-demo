# Gaspar Tapia Iracet · Demo inmobiliaria de Cruz del Eje

Portal personal conceptual no oficial, con seis publicaciones reales verificadas el 6 de septiembre de 2026. No sustituye el sitio de Red Nova.

## Desarrollo

```sh
npm ci
npm run dev
npm run build
npm run preview
```

React, TypeScript y Vite. Base `/iracet-inmobiliaria-demo/`, navegación de fichas mediante hash para soportar enlaces directos y recargas en GitHub Pages. El workflow publica `dist` al actualizar `main`.

## Funciones

- Seis fichas con 109 imágenes WebP, galerías completas y ampliación accesible mediante diálogo nativo, teclado y miniaturas.
- Filtros por operación, tipo, zona, moneda, precios, dormitorios, características y destacadas; orden de precios por moneda.
- Favoritos y comparación de hasta tres avisos con persistencia local.
- Consultas de WhatsApp individuales y mensajes para comprar, alquilar, tasar, ofrecer una propiedad, permutar y visitar.
- Dos formularios exclusivamente demostrativos, validación y confirmación explícita de que nada se envió.
- Captación de propietarios, servicios, proceso, zonas, presentación profesional, FAQ, contacto y mapas orientativos a pedido.
- Diseño adaptable, navegación por teclado, estados vacíos y noindex.

## Datos y límites

Leer [fuentes y alcance](public/fuentes.html). La pertenencia pública de Gaspar al equipo de Red Nova y su teléfono se confirmaron en el sitio oficial. La dirección es la publicada por el catálogo local y debe confirmarse antes de asistir. No se verificaron Instagram personal, horarios ni matrícula personal. No se infiere continuidad jurídica con Guillermo Iracet.

Los precios y superficies con contradicciones están aclarados en la interfaz. Aviso activo no equivale a disponibilidad confirmada. La casa y el alquiler de Sarmiento se presentan como avisos separados tal como figuran en el catálogo; comparten algunas fotografías y no se presume que sean unidades independientes.

Los archivos `research/*-text.txt` contienen transcripciones locales para verificar datos; `research/image-sources.json` conserva el origen de cada imagen. Las transcripciones, HTML crudos y pruebas visuales se excluyen de Git. Materiales de terceros no se ofrecen bajo una licencia de libre reutilización. Validar permiso del titular antes de convertir esta demo en sitio oficial.

## Privacidad

Sin backend, analítica ni envíos automáticos. Datos de formularios solo en el DOM y nunca en localStorage. Favoritos/comparador guardan únicamente IDs. WhatsApp se abre con mensajes genéricos de intención o información pública del aviso. Mapas externos solo al solicitarlos. Google Fonts carga tipografías externas. No se incluyeron secretos ni credenciales.
