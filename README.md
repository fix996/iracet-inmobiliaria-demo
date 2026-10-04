# Guillermo Iracet · Demo inmobiliaria institucional

Propuesta conceptual no oficial para Cruz del Eje. La portada presenta la idea general y el menú muestra las secciones que podría tener una web institucional. Cada sección avisa que sigue siendo una demo.

## Desarrollo

```sh
npm ci
npm run dev
npm run build
npm run preview
```

React, TypeScript y Vite. La base de publicación es `/iracet-inmobiliaria-demo/`. La navegación usa rutas hash para que los enlaces directos funcionen en GitHub Pages. El workflow de `.github/workflows/pages.yml` publica `dist` al actualizar `main`.

## Alcance

- Portada breve y menú desplegable con Propiedades, Servicios, Para propietarios, Tasaciones, Sobre Guillermo, Zonas, Preguntas frecuentes y Contacto.
- Ninguna sección muestra inventario real, precios, teléfono, correo, dirección, horarios ni enlaces de contacto activos.
- Los avisos e imágenes que antes pertenecían a publicaciones bajo el nombre de Gaspar Tapia Iracet se retiraron de esta versión. No se atribuyen a Guillermo.
- No hay backend, formularios, cuentas, pagos ni almacenamiento local. La página incluye `noindex` mientras sea una demo.
- El nombre Guillermo Iracet se usa a pedido del creador de la demo. El contenido comercial definitivo requiere confirmación con Guillermo. Ver [fuentes y alcance](public/fuentes.html).

## Diseño

El verde oscuro, crema y dorado suave son una propuesta visual conceptual; no se presentan como colores oficiales aprobados. La ilustración de la portada es decorativa y no representa un inmueble disponible.
