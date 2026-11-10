---
question: "¿Companions consume mucha batería?"
summary: "No. El widget no ejecuta código propio: iOS dibuja los peces a partir de una descripción que le pasa la app, igual que hace girar las manecillas de un widget de reloj. Nada se ejecuta en segundo plano."
---
No más que cualquier otro widget. Un widget de la pantalla de inicio no puede ejecutar código mientras está en pantalla, y Companions no lo intenta. La app le pasa a iOS una descripción de la pecera, que incluye un pequeño conjunto de “manecillas de reloj” que giran para trazar el recorrido de cada pez, e iOS la dibuja igual que dibuja el segundero de un widget de reloj. No hay ningún proceso de Companions funcionando detrás de tu pantalla de inicio, ningún temporizador que lo despierte y ninguna conexión de red.

La app solo trabaja mientras está abierta: cuando agregas, renombras o quitas un pez, cambias el estilo o los adornos de una pecera, o modificas alguna opción, guarda la pecera y le pide a iOS que vuelva a dibujar los widgets una vez.

Hay dos complicaciones que sí obtienen datos: **Clima** le pide un pronóstico al servicio meteorológico de Apple tres veces al día, y **Meta de pasos** lee los pasos de hoy desde Salud. Las dos tardan muy poco, y solo están activas si las elegiste.

Como cualquier contenido animado, el widget sí hace que la pantalla se actualice mientras está visible, y eso consume lo mismo que mirar la esfera de un reloj. Si usas el modo En reposo por la noche en un iPhone con pantalla siempre activa, iOS atenúa la pantalla y reduce su frecuencia de actualización, como hace con cualquier widget.
