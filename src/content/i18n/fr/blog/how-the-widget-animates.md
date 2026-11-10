---
title: "Widgets animés sur iPhone : comment les poissons nagent vraiment"
description: "Un widget iPhone ne peut exécuter aucun code. Alors comment nagent les poissons du widget Companions ? Comme tournent les aiguilles d’une horloge, sans rien coûter en batterie."
---
On nous demande souvent si les poissons du widget bougent vraiment, ou si ce n’est qu’une vidéo dans l’aperçu de l’App Store. Ils bougent vraiment, en continu, app fermée. Voici comment, en termes simples.

## Les widgets sont (presque) des images

Un widget de l’écran d’accueil d’iOS n’est pas une app en cours d’exécution. L’app prépare une **chronologie** : une liste d’images, avec l’heure à laquelle afficher chacune, et iOS dessine la bonne. Entre ces moments, rien ne s’exécute : l’app n’en a pas le droit. C’est pourquoi les widgets consomment si peu de batterie, et pourquoi la plupart sont immobiles.

## La seule chose qu’iOS anime de lui-même

Il existe un type de mouvement qu’iOS exécute de lui-même à l’intérieur d’un widget : il peut faire tourner un élément à vitesse constante, comme la trotteuse d’un widget d’horloge balaie le cadran. L’app dit « cette aiguille fait un tour par minute, en partant d’ici », et iOS la fait tourner, sans à-coups, tant que le widget est à l’écran, sans l’aide de l’app.

## Un poisson, c’est quelques aiguilles d’horloge

Companions décrit la nage de chaque poisson comme une petite somme de ces aiguilles. Dans l’app, le trajet d’un poisson se compose de trois va-et-vient :

- une **traversée** de la plus grande partie de l’aquarium, aller et retour en quelques dizaines de secondes ;
- une **dérive** plus lente sur le reste, qui déplace les points où la traversée fait demi-tour, pour que le poisson se promène au lieu de faire des allers-retours de balle de ping-pong ;
- un petit **balancement** de haut en bas.

Chacun d’eux correspond exactement à ce que donne une aiguille qui tourne, si l’on n’en regarde qu’une seule coordonnée. Le widget installe donc une aiguille pour chacun, avec les vitesses et les angles de départ propres au poisson, et laisse iOS les faire tourner. Additionnées, elles placent le poisson là où l’aquarium de l’app le placerait au même instant.

L’orientation fonctionne de la même façon : un poisson se retourne pour faire face au sens de sa nage, et dans le widget, un volet piloté par l’aiguille de la traversée affiche au bon moment le dessin tourné vers la gauche ou vers la droite. L’étoile de mer, qui a la même allure dans les deux sens, se contente de s’incliner un peu dans le sens de sa marche.

## Ce que ça change pour vous

- **Aucun coût en batterie.** Rien de Companions ne s’exécute derrière l’écran d’accueil. iOS dessine le widget comme il dessine une horloge. L’app ne travaille que lorsque vous changez quelque chose, et demande alors une seule fois à iOS de redessiner.
- **Les mêmes poissons partout.** Les vitesses et les angles de départ d’un poisson découlent de son identité : le widget, l’aquarium de l’app et l’Apple Watch le montrent donc au même endroit au même moment. Ouvrez l’app depuis le widget, et les poissons sont là où vous les avez laissés.
- **Pas de réseau, pas de mise à jour à attendre.** L’aquarium est lu dans un espace de stockage que partagent l’app et le widget. Le widget ne va rien chercher (la complication Météo est récupérée par l’app, trois fois par jour).

## Ce qui reste dans l’app

Deux choses ont besoin de code qui s’exécute sous vos yeux : le plouf quand un nouveau poisson tombe dans l’eau, et le repas, quand les poissons poursuivent les flocons. Les deux n’existent que dans l’app. Et sur le Mac, les widgets pour iPhone sont reproduits sous forme d’images depuis le téléphone : la fluidité des poissons y dépend donc de macOS.

## Pour les curieux

C’est la même idée qui sert, dans l’app, à construire l’arrivée d’un nouveau poisson, les bulles et le repas : chaque position est une fonction pure du temps et de quelques nombres fixés au départ, si bien que l’aquarium se contente de redessiner chaque image sans rien avoir à retenir. C’est aussi ce qui permet au film promotionnel, au widget et à l’app de s’accorder à la seconde près sur la position de chaque poisson.
