# Quiebre — tema Shopify

Tema Online Store para la marca Quiebre, basado en el diseño aprobado «Pisa distinto». Está preparado para conectarse desde Shopify mediante **Online Store → Themes → Add theme → Connect from GitHub**.

## Estado del catálogo

El tema no inventa productos, precios, stock, reseñas ni promesas de envío. La portada mantiene un estado de catálogo en preparación hasta que se importe y publique una selección real. Las imágenes editoriales de categorías y hero son conceptuales y no deben usarse como fotografía de producto.

Cuando existan colecciones con productos, las tarjetas de categorías podrán enlazar a colecciones con los handles `calzado`, `gorras` y `accesorios`. La sección de portada permite seleccionar la colección destacada desde el editor de temas.

## Importar a Shopify

1. En el admin de Shopify, abre **Tienda online → Temas**.
2. En **Biblioteca de temas**, elige **Agregar tema → Conectar desde GitHub**.
3. Autoriza la app oficial de Shopify en GitHub si lo solicita.
4. Selecciona el repositorio `Aikofarfa/quiebre-shopify-theme` y la rama `main`.
5. Shopify lo añadirá a la biblioteca como tema no publicado. Revisa la vista previa antes de publicar.

La integración de Shopify con GitHub sincroniza el tema en ambas direcciones: los commits de la rama se reflejan en Shopify y los cambios guardados en el editor de Shopify se comitean a la rama. Este repositorio contiene únicamente los archivos del tema.

## Funcionalidad incluida

- Portada editorial responsive, accesible y en español.
- Categorías con imágenes conceptuales y enlaces a colecciones cuando tengan productos.
- Tarjetas de producto con título, precio, imagen y disponibilidad desde Shopify.
- Plantillas nativas para producto, colección, carrito, búsqueda, páginas y error 404.
- Formulario de agregar a la bolsa y flujo de pago nativo de Shopify.
- Estado vacío honesto hasta importar productos reales.

## Pendiente antes del lanzamiento

- Conectar la rama desde el admin de Shopify y revisar la vista previa del tema.
- Verificar la conexión de Dropify/Dropi, importar productos y confirmar tallas, precios, disponibilidad y condiciones de entrega.
- Completar políticas de tienda, datos de contacto y métodos de pago.
- Solo publicar después de validar el catálogo y la operación.
