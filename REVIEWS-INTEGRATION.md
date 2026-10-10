# Reseñas y comentarios en Quiebre

## Qué hace el tema

La plantilla de producto separa tres funciones para no confundir comentarios con prueba de compra:

- **Reseñas y calificaciones:** `sections/quiebre-product-reviews.liquid` acepta bloques de apps de Shopify. La puntuación agregada solo aparece si existen los metacampos estándar `reviews.rating` y `reviews.rating_count`. No se incluyen nombres, opiniones, estrellas ni conteos inventados.
- **Comentarios generales:** la sección puede cargar Giscus por producto, mapeado a la ruta (`pathname`). Giscus usa GitHub Discussions; quienes comentan deben autorizar la app de Giscus con GitHub. Los comentarios quedan asociados a la ruta de cada producto. El bloque informa que no comprueba compra.
- **Videos:** la sección nativa `quiebre-product-films` muestra los medios de video añadidos por el administrador al producto en Shopify. El tema no abre una subida pública de archivos.

## Activar reseñas auténticas

1. Instala y configura una app de reseñas compatible con Online Store 2.0 y con bloques de aplicaciones en páginas de producto. Si necesitas distinguir compradores, exige que la app marque/valide “compra verificada”; no se debe inferir esa condición solo del comentario.
2. En el editor del tema, abre una plantilla de producto y agrega el bloque de la app en **Reseñas del producto**. Conserva el bloque app en esa sección para que use la jerarquía visual y el espaciado de Quiebre.
3. Comprueba que la app publique los metacampos `reviews.rating` y `reviews.rating_count` si quieres que el resumen agregado del tema muestre puntuación y cantidad. La app es responsable de almacenar, validar y moderar los envíos.
4. Envía una reseña de prueba en modo de prueba de la app si está disponible. No uses un testimonio ficticio en la tienda pública.

El tema proporciona el espacio visual y el resumen, pero **no almacena ni envía reseñas por sí mismo**. La recepción de calificaciones, moderación, límites anti-spam, verificación de pedido, borrado/exportación y consentimiento dependen de la app elegida.

## Activar comentarios generales con Giscus (opcional)

Giscus requiere un repositorio **público** con Discussions habilitado, la app Giscus instalada en ese repositorio y una categoría de Discussion. El generador oficial de [giscus.app](https://giscus.app/) muestra el `repo`, `repo-id`, `category` y `category-id` válidos.

En el editor de la plantilla de producto, abre la sección **Reseñas del producto**, activa **Comentarios comunitarios (Giscus)** e introduce esos cuatro valores. El JavaScript de `assets/quiebre-reviews.js` carga el cliente oficial solo cuando todos están presentes. Cada producto se asocia por URL (`pathname`), el widget está en español y las reacciones se desactivan para que no parezca una calificación de compra.

Giscus requiere que la persona visitante tenga una cuenta de GitHub para publicar y sus comentarios quedan en el repositorio público elegido. Revisa si eso sirve a tus compradores y si es compatible con tu aviso de privacidad/moderación antes de activarlo. El `repo-id` y el `category-id` son identificadores públicos, no claves secretas.

## Por qué no se incrusta Cusdis / OpenVidReview

La documentación del propio proyecto Cusdis marca el servicio como **descontinuado** y recomienda pedir una exportación de datos. Por eso no se añade como widget por defecto para una tienda nueva.

OpenVidReview se describe a sí mismo como trabajo en curso y advierte que puede no ser seguro para producción. El código revisado escribe contraseñas en logs, guarda una contraseña de review en SQLite y configura cookies de sesión sin `secure: true`. No reutilizamos su backend ni exponemos un endpoint de carga de videos a visitantes.

Para videos creados por compradores, usa una app con almacenamiento privado, validación del tipo/tamaño de archivo, autorización, moderación antes de publicar, consentimiento de imagen/voz y herramientas de borrado. Los videos aprobados se pueden añadir después como medios del producto; el tema los mostrará bajo la ficha.

## Referencias revisadas

- [emilie-v11/star-rating](https://github.com/emilie-v11/star-rating): React/TypeScript y patrón de interacción accesible con teclado; sin licencia en el repositorio consultado, así que no se copió código.
- [davidguva/OpenVidReview](https://github.com/davidguva/OpenVidReview): herramienta de anotación/revisión colaborativa de videos, no app de reseñas de compra; sin licencia declarada en GitHub y el README advierte que está en desarrollo.
- [giscus/giscus](https://github.com/giscus/giscus) y [documentación de Giscus](https://giscus.app/): comentarios generales basados en GitHub Discussions. El repo de Giscus declara licencia MIT; el tema carga el cliente oficial, no copia su implementación.
- [djyde/cusdis](https://github.com/djyde/cusdis): proyecto GPL-3.0; su README indica que está descontinuado.
- [Shopify: product media](https://help.shopify.com/en/manual/products/product-media): medios de producto nativos, incluidos videos.
