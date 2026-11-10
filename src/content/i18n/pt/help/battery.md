---
question: "O Companions gasta muita bateria?"
summary: "Não. O widget não roda nenhum código próprio: o iOS desenha os peixes a partir de uma descrição que o app entrega, como faz com os ponteiros de um widget de relógio. Nada fica rodando em segundo plano."
---
Não mais do que qualquer outro widget. Um widget da Tela de Início não pode rodar código enquanto está na tela, e o Companions nem tenta. O app entrega ao iOS uma descrição do aquário, incluindo um pequeno conjunto de “ponteiros de relógio” girando, que traçam o caminho de cada peixe, e o iOS desenha tudo do mesmo jeito que desenha o ponteiro dos segundos de um widget de relógio. Não existe nenhum processo do Companions rodando por trás da sua Tela de Início, nenhum timer acordando o app e nenhuma conexão de rede.

O app em si só trabalha enquanto está aberto: quando você adiciona, renomeia ou remove um peixe, muda o estilo ou os enfeites de um aquário ou mexe em algum ajuste, ele salva o aquário e pede ao iOS que redesenhe os widgets uma vez.

Duas complicações buscam alguma coisa: **Clima** pede a previsão ao serviço de meteorologia da Apple três vezes por dia, e **Meta de passos** lê os passos de hoje no app Saúde. As duas consultas são rápidas, e só acontecem se você escolheu essas complicações.

Como todo conteúdo animado, o widget pede que a tela seja redesenhada enquanto está visível, o que gasta o mesmo que ficar olhando para um mostrador de relógio. Se você usa o modo Em Espera durante a noite em um iPhone com tela Sempre Ativa, o iOS diminui o brilho e a taxa de atualização da tela, como faz com qualquer widget.
