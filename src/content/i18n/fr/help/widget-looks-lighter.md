---
question: "Pourquoi le widget paraît-il plus clair que l’aquarium dans l’app ?"
summary: "iOS pose un voile blanc translucide et un rebord lumineux sur chaque widget de l’écran d’accueil. Companions dessine son widget un peu plus sombre à l’avance pour qu’une fois l’effet de verre ajouté, il corresponde à l’app."
---
Sur l’écran d’accueil d’iOS 26, chaque widget s’affiche à travers le verre du système : un voile blanc, plus marqué en haut et qui s’estompe vers le bas, et un rebord lumineux tout autour. C’est ce qui donne l’impression que les widgets sont posés sur le fond d’écran plutôt que découpés dedans, et aucune app ne peut le désactiver.

Companions mesure ce voile et dessine son widget plus sombre d’autant, pour qu’une fois le verre d’iOS ajouté, l’eau retombe exactement sur les couleurs de l’app. En pratique, le widget et l’aquarium de l’app devraient sembler identiques au premier coup d’œil. Deux choses sont impossibles à compenser :

- **Le rebord**. Le bord lumineux est dessiné par-dessus le widget : il est donc toujours là. L’aquarium de l’app dessine lui aussi un rebord semblable, plus fin, et c’est pourquoi les deux se lisent toujours comme la même vitre.
- **L’eau très sombre**. Rien ne peut être dessiné plus sombre que le noir : les styles les plus sombres ressortent donc un peu plus clairs en haut du widget que dans l’app. Le style **Sombre** a été conçu en tenant compte de cela : sa surface se situe à peine au-dessus du voile pour que le widget et l’app puissent s’accorder, et il est aussi noir que l’écran d’accueil le permet.

Si le widget paraît vraiment différent, et pas seulement plus clair, vérifiez qu’il affiche bien le même aquarium : chaque taille de widget a son propre aquarium, avec son propre style.
