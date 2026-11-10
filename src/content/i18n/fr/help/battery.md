---
question: "Companions vide-t-il la batterie de l’iPhone ?"
summary: "Non. Le widget n’exécute aucun code : iOS dessine les poissons à partir d’une description fournie par l’app, comme il fait tourner les aiguilles d’un widget d’horloge. Rien ne s’exécute en arrière-plan."
---
Pas plus que n’importe quel autre widget. Un widget de l’écran d’accueil n’a pas le droit d’exécuter du code pendant qu’il est affiché, et Companions n’essaie pas de le faire. L’app confie à iOS une description de l’aquarium qui comprend, pour le trajet de chaque poisson, quelques « aiguilles d’horloge » en rotation ; iOS se charge du dessin, comme il fait tourner la trotteuse d’un widget d’horloge. Aucun processus de Companions ne s’exécute derrière votre écran d’accueil, aucune minuterie ne vient le réveiller, et il n’y a aucune connexion réseau.

L’app elle-même ne travaille que lorsqu’elle est ouverte : quand vous ajoutez, renommez ou retirez un poisson, changez le style ou les décorations d’un aquarium, ou modifiez un réglage, elle enregistre l’aquarium et demande une fois à iOS de redessiner les widgets.

Deux complications vont chercher des données : **Météo** demande une prévision au service météo d’Apple trois fois par jour, et **Objectif de pas** lit le nombre de pas du jour dans Santé. Ces opérations sont brèves, et elles n’ont lieu que si vous avez choisi ces complications.

Comme tout contenu animé, le widget demande bien à l’écran de se rafraîchir tant qu’il est visible, ce qui coûte autant que de regarder un cadran d’horloge. Si vous utilisez le mode En veille la nuit sur un iPhone doté de l’écran toujours activé, iOS assombrit l’écran et ralentit son rafraîchissement, comme pour tous les widgets.
