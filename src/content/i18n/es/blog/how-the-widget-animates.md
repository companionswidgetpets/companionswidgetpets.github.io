---
title: "Widgets animados en el iPhone: así nadan los peces"
description: "Los widgets del iPhone no pueden ejecutar código, así que ¿cómo nadan los peces de Companions? Igual que giran las manecillas de un widget de reloj, y por eso no gasta batería."
---
Mucha gente nos pregunta si los peces del widget se mueven de verdad o si es solo un video de la vista previa del App Store. Se mueven de verdad, sin parar, con la app cerrada. Aquí te contamos cómo, en palabras sencillas.

## Los widgets son, casi siempre, imágenes

Un widget de la pantalla de inicio de iOS no es una app en funcionamiento. La app prepara una **línea de tiempo**: una lista de imágenes con el momento en que hay que mostrar cada una. Después, iOS dibuja la que toca. Entre un momento y otro no se ejecuta nada; la app no tiene permiso para hacerlo. Por eso los widgets gastan tan poca batería, y por eso la mayoría están quietos.

## Lo único que iOS anima por su cuenta

Hay un tipo de movimiento que iOS hace por su cuenta dentro de un widget: puede hacer girar un elemento a un ritmo constante, como gira el segundero de un widget de reloj. La app dice “esta manecilla da una vuelta por minuto, empezando desde aquí”, y a partir de ahí iOS la mantiene girando, con fluidez, mientras el widget esté en pantalla, sin la app.

## Un pez son unas cuantas manecillas de reloj

Companions describe el nado de cada pez como una pequeña suma de esas manecillas. En la app, el recorrido de un pez se construye a partir de tres vaivenes:

- un **deslizamiento** que cruza casi toda la pecera, de ida y vuelta en unas cuantas decenas de segundos;
- una **deriva** más lenta por el resto, que va moviendo los puntos donde el pez da la vuelta, para que deambule en lugar de rebotar como una pelota de ping-pong;
- un pequeño **balanceo** de arriba abajo.

Cada uno de ellos es exactamente lo que da una manecilla que gira si solo te fijas en una de sus coordenadas. Así que el widget prepara una manecilla para cada uno, con los ritmos y los ángulos iniciales propios de ese pez, y deja que iOS las haga girar. Sumadas, colocan al pez justo donde lo pondría la pecera de la app en ese mismo momento.

Hacia dónde mira el pez se resuelve igual: un pez se voltea para mirar hacia donde se mueve, y en el widget, una especie de cortinilla movida por la manecilla del deslizamiento muestra la imagen del pez mirando a la izquierda o a la derecha en el momento justo. La Estrella, que se ve igual por los dos lados, en cambio se inclina un poco hacia donde va.

## Qué ganas con esto

- **Sin gasto de batería.** Detrás de la pantalla de inicio no se ejecuta nada de Companions. iOS dibuja el widget igual que dibuja un reloj. La app solo trabaja cuando cambias algo, y entonces le pide a iOS que vuelva a dibujarlo una vez.
- **Los mismos peces en todas partes.** Los ritmos y los ángulos iniciales de un pez salen de su identidad, así que el widget, la pecera de la app y el Apple Watch lo muestran en el mismo lugar al mismo tiempo. Abre la app desde el widget y los peces estarán donde los dejaste.
- **Sin conexión y sin actualizaciones que esperar.** La pecera se lee del almacenamiento que comparten la app y el widget. El widget no descarga nada (el pronóstico de la complicación del clima lo descarga la app, tres veces al día).

## Lo que solo pasa en la app

Hay dos cosas que necesitan que se ejecute código mientras miras: el chapuzón cuando un pez nuevo cae al agua y la comida, cuando los peces persiguen las escamas. Las dos pasan solo en la app. Y en Mac, los widgets del iPhone se reflejan como imágenes desde el teléfono, así que la fluidez con la que se mueven ahí los peces depende de macOS.

## Para los curiosos

Con la misma idea están hechas en la app la caída de un pez nuevo, las burbujas y la comida: cada posición es una función pura del tiempo y de unos pocos números fijados al principio, así que la pecera simplemente se vuelve a dibujar en cada fotograma sin tener que llevar la cuenta de nada. Eso es también lo que permite que el video promocional, el widget y la app coincidan, al segundo, en dónde está cada pez.
