---
question: "¿Por qué el widget se ve más claro que la pecera de la app?"
summary: "iOS pone un reflejo blanco translúcido y un borde brillante sobre todos los widgets de la pantalla de inicio. Companions dibuja su widget un poco más oscuro de antemano para que, cuando iOS agrega su vidrio, coincida con la app."
---
En iOS 26, todos los widgets de la pantalla de inicio se ven a través del vidrio del sistema: un velo blanco, más intenso arriba, que se desvanece hacia abajo, y además un borde brillante de luz especular alrededor. Es lo que hace que los widgets parezcan apoyados sobre el fondo de pantalla en lugar de recortados en él, y ninguna app puede desactivarlo.

Companions mide ese velo y dibuja su widget más oscuro en la misma medida, para que, cuando iOS agrega su vidrio, el agua quede con los colores que muestra la app. En la práctica, el widget y la pecera de la app deberían verse iguales a simple vista. Hay dos cosas que es imposible compensar:

- **El borde.** El borde brillante se dibuja después del widget, así que siempre está ahí. La pecera de la app tiene un borde parecido, más fino, y por eso los dos se siguen viendo como el mismo vidrio.
- **El agua muy oscura.** Nada puede dibujarse más oscuro que el negro, así que los estilos más oscuros quedan un poco más claros en la parte superior del widget que en la app. El estilo **Oscuro** está pensado para esto: su superficie queda apenas por encima del velo para que el widget y la app coincidan, y es tan negro como lo permite la pantalla de inicio.

Si el widget se ve muy distinto, y no solo más claro, comprueba que muestre la misma pecera: cada tamaño de widget es una pecera aparte, con su propio estilo.
