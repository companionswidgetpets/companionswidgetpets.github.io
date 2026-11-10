---
title: "Widgets animados no iPhone: como os peixes nadam de verdade"
description: "Os widgets do iPhone não rodam código. Então como os peixes do Companions nadam? Como os ponteiros de um widget de relógio, e é por isso que não gastam bateria."
---
Muita gente pergunta se os peixes do widget se mexem de verdade ou se aquilo é um vídeo da prévia da App Store. Eles se mexem de verdade, sem parar, com o app fechado. Veja como funciona, em palavras simples.

## Widgets são, quase sempre, imagens

Um widget da Tela de Início do iOS não é um app rodando. O app prepara uma **linha do tempo**: uma lista de imagens e dos horários em que cada uma deve aparecer, e o iOS desenha a imagem certa. Entre um horário e outro, nada roda; o app não tem permissão para isso. É por isso que os widgets gastam tão pouca bateria, e é por isso que a maioria deles fica parada.

## A única coisa que o iOS anima sozinho

Existe um tipo de movimento que o iOS faz por conta própria dentro de um widget: ele consegue girar um elemento num ritmo constante, do jeito que o ponteiro dos segundos de um widget de relógio dá a volta no mostrador. O app diz “este ponteiro dá uma volta por minuto, começando daqui”, e o iOS continua girando o ponteiro, suavemente, enquanto o widget estiver na tela, sem o app.

## Um peixe é feito de alguns ponteiros de relógio

O Companions descreve o nado de cada peixe como uma pequena soma desses ponteiros. No app, o caminho de um peixe é montado a partir de três movimentos de vaivém:

- um **deslize** que cruza a maior parte do aquário, indo e voltando em algumas dezenas de segundos;
- uma **deriva** mais lenta, que cobre o resto e vai mudando de lugar os pontos em que o deslize faz a curva, para que o peixe passeie em vez de ficar indo e voltando feito bolinha de pingue-pongue;
- um leve **sobe e desce**.

Cada um desses movimentos é exatamente o que um ponteiro girando produz quando você olha só para uma das coordenadas dele. Então o widget monta um ponteiro para cada um, com os ritmos e os ângulos iniciais do próprio peixe, e deixa o iOS girá-los. Somados, eles colocam o peixe onde o aquário do próprio app o colocaria naquele momento.

O lado para onde o peixe olha funciona do mesmo jeito: um peixe se espelha para ficar virado para o lado em que está indo, e, no widget, uma espécie de cortina movida pelo ponteiro do deslize mostra a imagem virada para a esquerda ou para a direita na hora certa. A estrela-do-mar, que é igual de um lado e do outro, apenas se inclina de leve para o lado em que vai.

## O que você ganha com isso

- **Bateria intacta.** Nada do Companions roda por trás da Tela de Início. O iOS desenha o widget como desenha um relógio. O app só trabalha quando você muda alguma coisa, e aí pede ao iOS que redesenhe uma vez.
- **Os mesmos peixes em todo lugar.** Os ritmos e os ângulos iniciais de um peixe vêm da identidade dele, então o widget, o aquário do app e o Apple Watch o mostram no mesmo lugar, ao mesmo tempo. Abra o app pelo widget e os peixes estão onde você os deixou.
- **Sem internet, sem esperar atualização.** O aquário é lido de um armazenamento que o app e o widget dividem. O widget não busca nada (quem busca o clima para a complicação é o app, três vezes por dia).

## O que fica só no app

Duas coisas precisam de código rodando enquanto você olha: o tchibum de quando um peixe novo cai na água e a hora de dar comida, quando os peixes correm atrás dos flocos. As duas acontecem só no app. E, no Mac, os widgets do iPhone são espelhados do celular como imagens, então a suavidade com que os peixes se mexem por lá depende do macOS.

## Para os curiosos

A mesma ideia está por trás da chegada de um peixe novo, das bolhas e da comida no app: cada posição é uma função pura do tempo e de alguns números definidos no início, então o aquário simplesmente se redesenha a cada quadro, sem nada para acompanhar. É isso também que permite que o vídeo promocional, o widget e o app concordem, ao segundo, sobre onde está cada peixe.
