const scenes = [
  {
    label:'PRÓLOGO', title:'ADAMANTINA', subtitle:'DE ONDE TUDO COMEÇOU...',
    art:'assets/adamantina.png',
    music:'prologo',
    text:'Antes de qualquer conversa, antes de qualquer mensagem... a história já passava pelos mesmos lugares, mesmo sem eles perceberem.'
  },
  {
    label:'PRÓLOGO', title:'BOX CURUMIM', subtitle:'MESMO LUGAR. ROTINAS DIFERENTES.',
    art:'assets/quadro-02-curumim-aprovado.png',
    music:'prologo',
    text:'Eles já tinham se visto algumas vezes. Mas nunca tinham realmente conversado.'
  },
  {
    label:'ANTES DA PRIMEIRA CONVERSA', title:'UMA NOTIFICAÇÃO', subtitle:'ATÉ QUE UM DIA...',
    art:'assets/05-01-notificacao-seguir.png',
    music:'instagram',
    text:'Por um tempo, foi só isso. Dois rostos conhecidos no mesmo lugar. Até que um dia... uma notificação apareceu no celular do Neneco.'
  },
  {
    label:'ANTES DA PRIMEIRA CONVERSA', title:'UM ROSTO CONHECIDO', subtitle:'ERA A NENECA.',
    art:'assets/05-02-perfil-neneca.png',
    music:'instagram',
    text:'Neneco conhecia aquele rosto. Era a menina que ele já tinha visto algumas vezes no Curumim.',
    action:'SEGUIR DE VOLTA ❤️'
  },
  {
    label:'ANTES DA PRIMEIRA CONVERSA', title:'UMA CURTIDA AQUI...', subtitle:'MAS AINDA SEM CONVERSA.',
    art:'assets/05-03-curtida-neneco.png',
    music:'instagram',
    text:'Mas nenhuma mensagem veio. Por um tempo, eles ficaram assim. Uma curtida aqui...'
  },
  {
    label:'ANTES DA PRIMEIRA CONVERSA', title:'...OUTRA ALI', subtitle:'AOS POUCOS, UM APARECIA NA ROTINA DO OUTRO.',
    art:'assets/05-04-curtida-neneca.png',
    music:'instagram',
    text:'Outra ali. Sem conversa. Só dois desconhecidos aparecendo, aos poucos, na rotina um do outro. Até que uma postagem mudou isso.'
  },
  {
    label:'06 DE JUNHO', title:'UM STORY', subtitle:'UMA PERGUNTA SIMPLES.',
    art:'assets/06-01-um-story-aprovado.png',
    music:'instagram',
    text:'No dia 06 de junho, a Neneca postou um story com uma pergunta simples: “Corrida ou show?”.'
  },
  {
    label:'06 DE JUNHO', title:'UMA RESPOSTA', subtitle:'E FOI ASSIM QUE COMEÇOU.',
    art:'assets/06-02-uma-resposta-aprovado.png',
    music:'instagram',
    text:'Neneco respondeu que escolheria a corrida. Ela concordou — e logo puxou assunto. Assim começou a primeira conversa entre os dois.'
  },
  {
    label:'06 DE JUNHO', title:'A PRIMEIRA CONVERSA', subtitle:'SEM PRESSA. SEM FLERTE.',
    art:'assets/06-03-primeira-conversa-aprovado.png',
    music:'instagram',
    text:'No começo, não tinha flerte. Eram duas pessoas que finalmente estavam se conhecendo e descobrindo coisas em comum.'
  },
  {
    label:'JUNHO → JULHO', title:'QUASE UM MÊS DE CONVERSA', subtitle:'A ROTINA FOI APROXIMANDO OS DOIS.',
    art:'assets/06-04-quase-um-mes-aprovado.png',
    music:'instagram',
    text:'Corrida, treinos, alimentação, rotina... assunto não faltava. E, aos poucos, a conversa foi ficando cada vez mais natural.'
  },
  {
    label:'JUNHO → JULHO', title:'CADA VEZ MAIS PRESENTES', subtitle:'REELS, BOBEIRAS E RISADAS.',
    art:'assets/06-05-cada-vez-mais-presentes-aprovado.png',
    music:'instagram',
    text:'Vieram os reels, as bobeiras e as risadas. Sem perceber, um começou a fazer parte do dia do outro.'
  },
  {
    label:'08 DE JULHO', title:'CONTINUA...', subtitle:'O PRÓXIMO PASSO AINDA ESTAVA POR VIR.',
    art:'assets/08-julho-continua-aprovado.png',
    music:'instagram',
    text:'Depois de quase um mês de conversa, a história estava prestes a sair da tela do celular.'
  },
  {
    label:'08 DE JULHO', title:'O CONVITE', subtitle:'QUASE UM MÊS DEPOIS.',
    art:'assets/08-convite-aprovado.png',
    music:'instagram',
    text:'Depois de tantas conversas, Neneco resolveu fazer um convite. Na manhã seguinte, aquela história finalmente sairia das mensagens.'
  },
  {
    label:'09 DE JULHO · 06:00', title:'O PRIMEIRO ENCONTRO', subtitle:'UMA MANHÃ BEM FRIA.',
    art:'assets/09-01-primeiro-encontro-aprovado.png',
    music:'encontro',
    text:'Às 06:00, em uma manhã bem fria, Neneco foi buscá-la na casa dela com o carro branco do pai. Era a primeira vez que os dois saíam juntos.'
  },
  {
    label:'09 DE JULHO', title:'A CAMINHO DO PARQUE', subtitle:'PARQUE CALDEIRA.',
    art:'assets/09-02-caminho-caldeira-aprovado.png',
    music:'encontro',
    text:'O destino era o Parque Caldeira. No caminho, a conversa que já fluía pelas mensagens começava a ganhar voz, olhares e sorrisos.'
  },
  {
    label:'09 DE JULHO', title:'PARQUE CALDEIRA', subtitle:'A PRIMEIRA MANHÃ JUNTOS.',
    art:'assets/09-03-caldeira-chegada-aprovado.png',
    music:'encontro',
    text:'Eles chegaram ao Parque Caldeira, caminharam um pouco e aproveitaram aquela manhã que, sem eles saberem, ficaria marcada para sempre.'
  },
  {
    label:'09 DE JULHO', title:'ANTES DA CORRIDA', subtitle:'HORA DE ALONGAR.',
    art:'assets/09-04-alongamento-aprovado.png',
    music:'encontro',
    text:'Antes de correr, veio o alongamento. Tudo ainda era novo, mas estar ali juntos já parecia estranhamente natural.'
  },
  {
    label:'09 DE JULHO', title:'A CORRIDA', subtitle:'FINALMENTE, JUNTOS.',
    art:'assets/09-05-corrida-aprovado.png',
    music:'encontro',
    text:'Depois de quase um mês conversando, finalmente veio a primeira corrida juntos. O que começou com um story agora acontecia lado a lado.'
  },
  {
    label:'09 DE JULHO', title:'MAIS CONVERSA', subtitle:'FORA DAS MENSAGENS.',
    art:'assets/09-06-conversa-banco-aprovado.png',
    music:'encontro',
    text:'Depois da corrida, eles caminharam e conversaram ainda mais. Pela primeira vez, não havia uma tela entre os dois.'
  },
  {
    label:'09 DE JULHO', title:'VIA SABOR', subtitle:'CAFÉ DA MANHÃ.',
    art:'assets/09-07-via-sabor-aprovado.png',
    music:'encontro',
    text:'Depois do parque, eles foram tomar café na Via Sabor, a padaria favorita da Neneca. Café com leite, pão com ovo… e um pequeno detalhe que sempre rendia risadas.',
    action:'COLOCAR 4 PACOTINHOS DE AÇÚCAR ☕'
  },
  {
    label:'MEMÓRIA DESBLOQUEADA', title:'QUATRO PACOTINHOS ☕', subtitle:'SIM. QUATRO. 😂',
    art:'assets/09-07-quatro-pacotinhos-aprovado.png',
    music:'encontro',
    text:'Sim. Quatro pacotinhos. 😂 Neneca sempre achava graça na quantidade de açúcar que Neneco colocava no café com leite — e, como sempre, acabava rindo dele.'
  },
  {
    label:'09 DE JULHO', title:'UM PEQUENO GESTO', subtitle:'ANTES DE IR EMBORA...',
    art:'assets/09-08-um-pequeno-gesto-aprovado.png',
    music:'encontro',
    text:'Depois do café, era hora de voltar. Mas antes de entrar no carro, havia um pequeno gesto que Neneco fazia questão de repetir.',
    action:'ABRIR A PORTA 🚗❤️'
  },
  {
    label:'09 DE JULHO', title:'A VOLTA', subtitle:'HORA DE LEVÁ-LA PARA CASA.',
    art:'assets/09-08-volta-carro-branco-aprovado.png',
    music:'encontro',
    text:'Neneco sempre abria a porta do carro para ela. Um gesto simples — e um daqueles que Neneca ama. ❤️ GESTO ROMÂNTICO DESBLOQUEADO — ABRIR A PORTA PARA A NENECA. A manhã estava chegando ao fim — mas ainda faltava um momento importante.'
  },
  {
    label:'09 DE JULHO', title:'UM POUCO DE CORAGEM', subtitle:'DENTRO DO CARRO.',
    art:'assets/09-09-coragem-carro-aprovado.png',
    music:'encontro',
    text:'Já em frente à casa dela, Neneco criou coragem. Faltava só uma coisa antes daquele primeiro encontro terminar...',
    action:'PEDIR UM BEIJO ❤️'
  },
  {
    label:'09 DE JULHO', title:'UM INSTANTE DE TIMIDEZ', subtitle:'ELA FICOU ENVERGONHADA.',
    art:'assets/09-09-neneca-envergonhada-aprovado.png',
    music:'encontro',
    text:'Neneca ficou tímida e envergonhada. Por um instante, Neneco achou que era melhor desistir...'
  },
  {
    label:'09 DE JULHO', title:'O PRIMEIRO BEIJO', subtitle:'ELA NÃO DEIXOU ELE DESISTIR.',
    art:'assets/09-10-primeiro-beijo-aprovado.png',
    music:'encontro',
    text:'Quando Neneco estava prestes a desistir, Neneca o puxou para perto. E foi assim que aconteceu o primeiro beijo.'
  },
  {
    label:'MEMÓRIA DESBLOQUEADA', title:'PRIMEIRO BEIJO ❤️', subtitle:'09 DE JULHO.',
    art:'assets/09-10-primeiro-beijo-aprovado.png',
    music:'encontro',
    text:'PRIMEIRO BEIJO DESBLOQUEADO — 09/07 ❤️'
  },
  {
    label:'PRÓXIMO CAPÍTULO', title:'O NOSSO LUGAR', subtitle:'PARQUE CALDEIRA.',
    art:'assets/09-03-caldeira-chegada-aprovado.png',
    music:'caldeira',
    text:'Aquele parque ainda voltaria muitas vezes para a história dos dois. Aos poucos, o Parque Caldeira deixaria de ser apenas um lugar.'
  },
  {
    label:'ALGUM TEMPO DEPOIS', title:'DE VOLTA AO CALDEIRA', subtitle:'A PRIMEIRA CORRIDA ESTAVA LONGE DE SER A ÚLTIMA.',
    art:'assets/10-01-de-volta-ao-caldeira-aprovado.png',
    music:'caldeira',
    text:'Depois daquele primeiro encontro, eles voltaram ao Parque Caldeira. E aquela primeira corrida estava longe de ser a última.'
  },
  {
    label:'O NOSSO LUGAR', title:'5 KM', subtitle:'LADO A LADO... QUASE 😅',
    art:'assets/10-02-5km-aprovado.png',
    music:'caldeira',
    text:'Nos 5 km, Neneco quase sempre corria um pouco à frente. Não para deixá-la para trás... mas para fazê-la buscar um pouquinho mais.'
  },
  {
    label:'O NOSSO LUGAR', title:'DEPOIS DA CORRIDA', subtitle:'SEM PRESSA.',
    art:'assets/10-03-depois-da-corrida-aprovado.png',
    music:'caldeira',
    text:'Depois dos quilômetros, vinha a melhor parte: diminuir o ritmo, caminhar e simplesmente aproveitar a companhia um do outro.'
  },
  {
    label:'O NOSSO LUGAR', title:'UMA PEQUENA TRADIÇÃO', subtitle:'ALGO COMEÇOU A SE REPETIR...',
    art:'assets/10-04-pegar-flor-aprovado.png',
    music:'caldeira',
    text:'Até que uma coisa pequena começou a se repetir...',
    action:'PEGAR A FLOR 🌼'
  },
  {
    label:'O NOSSO LUGAR', title:'PARA A NENECA', subtitle:'UMA FLORZINHA LARANJA.',
    art:'assets/10-05-para-neneca-aprovado.png',
    music:'caldeira',
    text:'Sempre que encontrava uma, Neneco pegava a flor, se ajoelhava e entregava para Neneca. Uma brincadeira simples... que acabou virando tradição.'
  },
  {
    label:'O NOSSO LUGAR', title:'MESMO QUANDO ELE NÃO ESTAVA LÁ', subtitle:'O CALDEIRA JÁ ERA DIFERENTE.',
    art:'assets/10-06-neneca-sozinha-aprovado.png',
    music:'caldeira',
    text:'Às vezes, Neneca também corria ali sozinha. Mas aquele lugar já não parecia exatamente o mesmo. Porque, de algum jeito, correr por ali também fazia ela lembrar do Neneco.'
  },
  {
    label:'MEMÓRIA DESBLOQUEADA', title:'O NOSSO LUGAR ❤️', subtitle:'PARQUE CALDEIRA.',
    art:'assets/10-07-nosso-lugar-aprovado.png',
    music:'caldeira',
    text:'O lugar do primeiro encontro virou o lugar das corridas, das conversas e de uma pequena flor laranja. Até que o Parque Caldeira ganhou outro nome entre os dois... ❤️ O NOSSO LUGAR — DESBLOQUEADO'
  },
  {
    label:'DEPOIS DISSO...', title:'OS PEQUENOS MOMENTOS', subtitle:'A HISTÓRIA CONTINUAVA SENDO ESCRITA.',
    art:'assets/11-01-pequenos-momentos.png',
    music:'rotina',
    text:'Depois daquele começo, vieram outros encontros. Outros dias. E uma coleção de pequenos momentos que, aos poucos, foi se tornando parte da história dos dois.'
  },
  {
    label:'EM ALGUM DESSES ENCONTROS...', title:'UMA COISA VIROU COSTUME', subtitle:'UM JEITO DE CUIDAR. 😂',
    art:'assets/11-02-batatinha-antes.png',
    music:'rotina',
    text:'Quando saíam para comer, Neneco tinha um jeito particular de dividir as batatinhas com a Neneca...',
    action:'FAZER AVIÃOZINHO 🍟✈️'
  },
  {
    label:'PEQUENOS MOMENTOS', title:'O AVIÃOZINHO 🍟✈️', subtitle:'ELA JÁ SABIA O QUE VINHA. 😂',
    art:'assets/11-03-batatinha-aviao.png',
    music:'rotina',
    text:'Ela ficava com vergonha. Ele fazia mesmo assim. E, no fundo... ela adorava. 😂'
  },
  {
    label:'ENTRE UM ENCONTRO E OUTRO...', title:'REELS E BOBEIRAS', subtitle:'MESMO DE LONGE.',
    art:'assets/11-04-reel-antes.png',
    music:'rotina',
    text:'Mesmo quando estavam longe, uma coisa sempre encontrava o caminho até o celular do outro: reels, bobeiras e coisas que tinham a cara da Neneca.',
    action:'ENVIAR PRA NENECA 😂'
  },
  {
    label:'PEQUENOS MOMENTOS', title:'UMA RISADA DO OUTRO LADO', subtitle:'A DISTÂNCIA NÃO IMPEDIA ISSO.',
    art:'assets/11-05-reels-distancia.png',
    music:'rotina',
    text:'Em lugares diferentes, os dois acabavam dividindo a mesma risada. Mesmo à distância, continuavam fazendo parte do dia um do outro.'
  },
  {
    label:'ENTRE UM ENCONTRO E OUTRO...', title:'UMA DECISÃO IMPORTANTÍSSIMA', subtitle:'NENECO, ESCOLHE A COR DO MEU ESMALTE?',
    art:'assets/11-06-esmalte-escolha.png',
    music:'rotina',
    text:'Mesmo à distância, Neneco acabou ganhando uma responsabilidade muito importante...',
    choices:[
      {label:'🤍 BRANCO', value:'branco'},
      {label:'🤎 MARROM / NUDE', value:'marrom/nude'}
    ]
  },
  {
    label:'MISSÃO CONCLUÍDA ✓', title:'COR DO ESMALTE ESCOLHIDA 😂', subtitle:'DECISÃO TOMADA.',
    art:'assets/11-06-esmalte-escolha.png',
    music:'rotina',
    text:'Escolha registrada: {corEsmalte}. Mais uma pequena decisão da rotina dela que, mesmo de longe, passava pelo Neneco.'
  },
  {
    label:'E QUANDO ESTAVAM JUNTOS...', title:'NEM TODOS OS GOSTOS ERAM IGUAIS 😂', subtitle:'PRINCIPALMENTE A PLAYLIST.',
    art:'assets/11-07-carro-musica.png',
    music:'rotina',
    text:'Neneco gostava de rock. Neneca, de funk e sertanejo. E quando ela estava dirigindo... a escolha da música já tinha dona. 😂'
  },
  {
    label:'EM UM DIA ESPECIAL...', title:'UMA SURPRESA', subtitle:'MESMO DE LONGE.',
    art:'assets/11-08a-aniversario-preparando.png',
    music:'rotina',
    text:'No aniversário da Neneca, a distância significava que Neneco não poderia simplesmente aparecer por lá. Mas isso não significava que não poderia estar presente de algum jeito.',
    action:'ENVIAR UMA SURPRESA 🌻'
  },
  {
    label:'ANIVERSÁRIO DA NENECA', title:'UMA SURPRESA NO TRABALHO', subtitle:'GIRASSOL + BOMBONS. 🌻🍫',
    art:'assets/11-08b-aniversario-recebendo.png',
    music:'rotina',
    text:'Naquele dia, Neneco não estava ali. Mas uma pequena surpresa chegou até ela. 🌻 GIRASSOL ADQUIRIDO.'
  },
  {
    label:'DEPOIS DE SAIR...', title:'O FIM DA NOITE', subtitle:'AINDA EXISTIA UMA ÚLTIMA PARADA.',
    art:'assets/11-09-buracao-chegada.png',
    music:'rotina',
    text:'Depois de comer, muitas vezes ainda existia uma última parada. O Parque dos Pioneiros. Ou, como eles sempre chamavam... o Buracão.'
  },
  {
    label:'BURACÃO', title:'SEMPRE O MESMO', subtitle:'ENTRE TANTOS BANCOS...',
    art:'assets/11-10-banquinho-caminho.png',
    music:'rotina',
    text:'E mesmo com tantos lugares para sentar... eles acabavam escolhendo sempre o mesmo.',
    action:'IR PARA O NOSSO BANQUINHO ❤️'
  },
  {
    label:'NOSSO BANQUINHO ❤️', title:'CONVERSAS SEM HORA PARA ACABAR', subtitle:'NO BURACÃO.',
    art:'assets/11-11-nosso-banquinho.png',
    music:'rotina',
    text:'Ali eles conversavam sobre tudo. Sobre o dia. Sobre a vida. Sobre eles.'
  },
  {
    label:'NOSSO BANQUINHO ❤️', title:'AS HORAS PASSAVAM', subtitle:'E NENHUM DOS DOIS TINHA PRESSA.',
    art:'assets/11-12-passagem-horas.png',
    music:'rotina',
    text:'As horas passavam. Uma conversa puxava outra. Uma risada puxava outra. E nenhum dos dois parecia estar com muita pressa.',
    action:'FICAR SÓ MAIS UM POUQUINHO ❤️'
  },
  {
    label:'NOSSO BANQUINHO ❤️', title:'SÓ MAIS UM POUQUINHO', subtitle:'QUE QUASE NUNCA ERA SÓ UM POUQUINHO.',
    art:'assets/11-13-so-mais-um-pouquinho.png',
    music:'rotina',
    text:'E “só mais um pouquinho” quase sempre virava mais uma conversa... mais uma risada... mais alguns minutos juntos.'
  },
  {
    label:'MEMÓRIA DESBLOQUEADA', title:'NOSSO BANQUINHO ❤️', subtitle:'ONDE MUITAS NOITES DEMORAVAM A TERMINAR.',
    art:'assets/11-14-banquinho-final.png',
    music:'rotina',
    text:'No fim, não era só um banco. Era onde muitas noites demoravam um pouco mais para terminar. ❤️ NOSSO BANQUINHO — MEMÓRIA DESBLOQUEADA.'
  },
  {
    label:'ALGUM TEMPO DEPOIS...', title:'UM CONVITE DIFERENTE', subtitle:'06 DE SETEMBRO.',
    art:'assets/12-01-convite-campeonato.webp',
    text:'Entre um encontro e outro, as conversas continuavam. Até que Neneco contou que, no dia 06 de setembro, participaria como judge de um campeonato em Tupã — e convidou Neneca para ir com ele.',
    music:'setembro'
  },
  {
    label:'OS PLANOS', title:'UMA IDEIA DA NENECA', subtitle:'E SE A GENTE FOR NO SÁBADO?',
    art:'assets/12-02-plano-sabado.webp',
    text:'O plano era ir no domingo bem cedo e voltar à noite, depois do campeonato. Mas Neneca teve uma ideia melhor: ir no sábado e dormir em Tupã.',
    music:'setembro'
  },
  {
    label:'05 DE SETEMBRO', title:'RUMO A TUPÃ', subtitle:'DESSA VEZ, NENECA ESTAVA AO VOLANTE.',
    art:'assets/12-03-viagem-tupa.webp',
    text:'E foi assim que os planos mudaram. No sábado, os dois partiram de Adamantina e seguiram juntos para Tupã. Dessa vez... Neneca estava ao volante. Estava frio. E ela estava toda de preto.',
    music:'setembro'
  },
  {
    label:'05 DE SETEMBRO', title:'CHEGANDO EM CASA', subtitle:'EM TUPÃ.',
    art:'assets/12-04-chegada-casa.webp',
    text:'Quando chegaram a Tupã, foram para a casa do Neneco. E foi ali que aquela noite começou.',
    music:'setembro'
  },
  {
    label:'05 DE SETEMBRO', title:'A PRIMEIRA NOITE JUNTOS', subtitle:'UMA NOITE DIFERENTE DE TODAS AS OUTRAS.',
    art:'assets/12-05-primeira-noite.webp',
    text:'No sábado à noite, em Tupã... aquela noite acabou sendo diferente de todas as outras. Pela primeira vez, não havia pressa para voltar. Não havia uma despedida esperando no fim da noite. Naquela noite, os dois ficaram mais próximos do que nunca. Foi a primeira noite deles juntos.',
    music:'setembro'
  },
  {
    label:'06 DE SETEMBRO', title:'A MANHÃ SEGUINTE', subtitle:'NENECO ACORDOU PRIMEIRO.',
    art:'assets/12-06-acordou-primeiro.webp',
    text:'Na manhã seguinte, Neneco acordou primeiro. Pela primeira vez, o dia começou com os dois no mesmo lugar — enquanto Neneca ainda dormia ao lado dele.',
    music:'setembro'
  },
  {
    label:'06 DE SETEMBRO', title:'ANTES DE COMEÇAR O DIA', subtitle:'SÓ MAIS ALGUNS MINUTOS.',
    art:'assets/12-07-admirando-neneca.webp',
    text:'Por alguns instantes, Neneco só ficou ali, admirando Neneca dormir. Mas o domingo estava só começando.',
    music:'setembro'
  },
  {
    label:'06 DE SETEMBRO', title:'CAMPEONATO EM TUPÃ', subtitle:'NENECO COMO JUDGE.',
    art:'assets/12-08-campeonato-judge.webp',
    text:'No domingo, 06 de setembro, Neneco seria judge durante um campeonato inteiro. E Neneca estava lá. Na arquibancada. Assistindo. O dia foi longo. E cansativo.',
    music:'setembro'
  },
  {
    label:'06 DE SETEMBRO', title:'EM CADA INTERVALO', subtitle:'ELE VOLTAVA PARA ELA.',
    art:'assets/12-09-intervalo-arquibancada.webp',
    text:'Mas, em cada intervalo que tinha... Neneco voltava para ficar um pouquinho com ela. Não era o rolê mais confortável do mundo para Neneca. Mesmo assim, ela ficou. E ali Neneco percebeu mais uma coisa: Neneca era parceira. Daquelas que ficam. ❤️',
    music:'setembro'
  },
  {
    label:'06 DE SETEMBRO', title:'DE VOLTA A ADAMANTINA', subtitle:'DEPOIS DE UM DIA INTENSO.',
    art:'assets/12-10-volta-adamantina.webp',
    text:'Depois de um dia intenso, eles voltaram para Adamantina. Neneca novamente ao volante. E aquele fim de semana acabou deixando mais uma memória importante na história dos dois.',
    music:'setembro'
  },
  {
    label:'DEPOIS DE TUDO ISSO...', title:'UM NOVO PASSO', subtitle:'ALGUMAS COISAS PEDEM PARA EVOLUIR.',
    art:'assets/13-01-decisao-moto.webp',
    text:'E depois de tudo que viveram juntos... Neneco percebeu que já não queria apenas esperar pelo próximo encontro. Ele queria continuar vivendo tudo aquilo. Só que agora... era hora de dar um novo passo.',
    action:'PEGAR A ESTRADA 🏍️',
    music:'estrada'
  },
  {
    label:'UMA DECISÃO', title:'A ESTRADA', subtitle:'DESSA VEZ, O DESTINO ERA DIFERENTE.',
    art:'assets/13-02-estrada.webp',
    text:'Então Neneco tomou uma decisão. E pegou a estrada.',
    music:'estrada'
  },
  {
    label:'ANTES DE CONTINUAR...', title:'O NOSSO LUGAR', subtitle:'PARQUE CALDEIRA.',
    art:'assets/13-03-caldeira-flor.png',
    text:'Mas antes de continuar... Neneco precisava buscar uma coisa. Em um lugar que já tinha se tornado especial para os dois.',
    action:'PEGAR A FLOR 🌼', flowerGain:true,
    music:'estrada'
  },
  {
    label:'COM A FLOR 🌼', title:'DE VOLTA À ESTRADA', subtitle:'AGORA FALTAVA SEGUIR.',
    art:'assets/13-04-estrada-com-flor.webp',
    text:'Com a pequena flor laranja do Caldeira com ele, Neneco voltou para a estrada. Agora, havia algo muito especial esperando no fim daquele caminho.',
    music:'estrada'
  },
  {
    label:'O CASTELO DA NENECA', title:'A CHEGADA', subtitle:'O FIM DA ESTRADA. O COMEÇO DE OUTRA COISA.',
    art:'assets/13-05-chegada-castelo.webp',
    text:'No fim da estrada, o castelo apareceu. Neneco parou a moto, tirou o capacete e seguiu levando consigo a flor que tinha acabado de buscar no Caldeira.',
    action:'ENTRAR NO CASTELO 🏰',
    music:'castelo'
  },
  {
    label:'O CASTELO DA NENECA', title:'O CORREDOR DE MEMÓRIAS', subtitle:'ELAS JÁ ESTAVAM TODAS ALI.',
    art:'assets/13-06-corredor-memorias.webp',
    text:'Lá dentro, Neneco encontrou um corredor cheio de memórias. O começo. A primeira corrida. O beijo. Os cafés. O Caldeira. Os momentos simples. Tudo o que os dois tinham vivido estava ali, acompanhando cada passo até a última porta.',
    music:'castelo'
  },
  {
    label:'TODAS AS MEMÓRIAS', title:'A ÚLTIMA PORTA', subtitle:'AGORA ERA HORA DE CRIAR MAIS UMA.',
    art:'assets/13-07-ultima-porta.webp',
    text:'Depois de atravessar um corredor cheio de memórias... estava na hora de criar mais uma. E essa seria muito especial. ❤️',
    action:'❤️ ABRIR A ÚLTIMA PORTA',
    music:'castelo'
  },
  {
    label:'UMA NOVA FASE', title:'DO OUTRO LADO DA PORTA', subtitle:'AINDA FALTAVA UMA MEMÓRIA.',
    art:'assets/14-01-sala-final.png',
    text:'No fim de todas aquelas memórias… ainda faltava uma.',
    action:'❤️ CONTINUAR',
    music:'pedido'
  },
  {
    label:'UMA NOVA FASE', title:'A NENECA', subtitle:'ERA ELA.',
    art:'assets/14-02-neneca.png',
    text:'…era ela.',
    action:'❤️ IR ATÉ A NENECA',
    music:'pedido'
  },
  {
    label:'UMA NOVA FASE', title:'FRENTE A FRENTE', subtitle:'AGORA NÃO HAVIA MAIS DISTÂNCIA.',
    art:'assets/14-03-frente-a-frente.png',
    text:'Eu não sei exatamente em qual momento percebi… mas desde o começo eu sabia que não queria que isso fosse algo passageiro.',
    action:'🌼 ENTREGAR A FLOR', flowerUse:true,
    music:'pedido'
  },
  {
    label:'UMA NOVA FASE', title:'NENECA…', subtitle:'❤️',
    art:'assets/14-04-pedido-flor.png',
    text:'Porque algumas coisas pequenas… acabam significando muito. Neneca… quer ser minha namorada? ❤️',
    action:'SIM ❤️', isYes:true,
    music:'pedido'
  },
  {
    label:'❤️ NENECO + NENECA ❤️', title:'UMA NOVA FASE FOI DESBLOQUEADA', subtitle:'NAMORADOS',
    art:'assets/14-05-o-sim.png',
    text:'E assim, uma nova fase começou. ❤️',
    music:'pedido'
  },
  {
    label:'EPÍLOGO', title:'É SÓ O COMEÇO ❤️', subtitle:'ESSA NÃO É A FASE FINAL.',
    art:'assets/15-01-epilogo.png',
    text:'Ainda temos muitos quilômetros para correr. Muitos cafés para tomar. Muitas batatinhas para dividir. Muitas madrugadas no banquinho. Muitas flores para entregar. E muitas histórias para viver.',
    music:'pedido'
  },
  {
    label:'FIM', title:'NENECO & NENECA', subtitle:'❤️',
    art:'assets/15-01-epilogo.png',
    text:'Essa não é a fase final. É só o começo. ❤️',
    action:'JOGAR NOVAMENTE', replay:true,
    music:'pedido'
  }

];

let index=0,locked=false,actionRequired=false;
const menu=document.querySelector('#menu'),story=document.querySelector('#story'),stage=document.querySelector('.stage'),art=document.querySelector('#sceneArt'),hud=document.querySelector('.chapter-hud'),label=document.querySelector('#chapterLabel'),title=document.querySelector('#chapterTitle'),subtitle=document.querySelector('#chapterSubtitle'),narration=document.querySelector('#narrationText'),progress=document.querySelector('#progressBar'),tap=document.querySelector('.tap');
let corEsmalte='';

// Trilha sonora original — acompanha a história inteira.
const musicTracks={
  prologo:new Audio('audio/prologo.ogg'),
  instagram:new Audio('audio/instagram.ogg'),
  encontro:new Audio('audio/encontro.ogg'),
  caldeira:new Audio('audio/caldeira.ogg'),
  rotina:new Audio('audio/rotina.ogg'),
  setembro:new Audio('audio/setembro.ogg'),
  estrada:new Audio('audio/estrada.ogg'),
  castelo:new Audio('audio/castelo.ogg'),
  pedido:new Audio('audio/pedido.ogg')
};
Object.values(musicTracks).forEach(a=>{a.loop=true;a.preload='auto';a.playsInline=true;a.volume=.16;});
let audioUnlocked=false,soundEnabled=true,currentMusicKey='',menuAudioActivated=false;
const soundBtn=document.createElement('button');
soundBtn.className='sound-toggle';soundBtn.type='button';soundBtn.hidden=true;soundBtn.textContent='🔊 SOM';stage.appendChild(soundBtn);

// Na abertura, o navegador exige uma interação do jogador antes de liberar áudio.
// Este botão inicia a trilha do prólogo ainda no menu e mantém a mesma música ao clicar em COMEÇAR.
const menuSoundBtn=document.createElement('button');
menuSoundBtn.className='sound-toggle menu-sound-toggle';menuSoundBtn.type='button';menuSoundBtn.textContent='🔊 ATIVAR SOM';menu.appendChild(menuSoundBtn);
function refreshSoundButton(){
  soundBtn.textContent=soundEnabled?'🔊 SOM':'🔇 SOM';
  menuSoundBtn.textContent=!menuAudioActivated?'🔊 ATIVAR SOM':(soundEnabled?'🔊 SOM':'🔇 SOM');
}
function unlockAudio(){
  if(audioUnlocked)return;
  audioUnlocked=true;
}
function setMusic(key=''){
  currentMusicKey=key;
  soundBtn.hidden=!key;
  Object.entries(musicTracks).forEach(([k,a])=>{
    if(k!==key||!soundEnabled){a.pause();return;}
    a.volume=.16;
    const p=a.play(); if(p&&p.catch)p.catch(()=>{});
  });
  refreshSoundButton();
}
function pauseAllMusic(){Object.values(musicTracks).forEach(a=>a.pause());}
soundBtn.addEventListener('click',e=>{
  e.stopPropagation();
  soundEnabled=!soundEnabled;
  if(soundEnabled){unlockAudio();setMusic(currentMusicKey);}else{pauseAllMusic();refreshSoundButton();}
});
menuSoundBtn.addEventListener('click',e=>{
  e.stopPropagation();
  unlockAudio();
  if(!menuAudioActivated){
    menuAudioActivated=true;
    soundEnabled=true;
    setMusic('prologo');
    return;
  }
  soundEnabled=!soundEnabled;
  if(soundEnabled)setMusic(currentMusicKey||'prologo');else{pauseAllMusic();refreshSoundButton();}
});

let flowerCount=0;
const inventory=document.createElement('div'); inventory.className='inventory-hud'; inventory.hidden=true; stage.appendChild(inventory);
function updateInventory(){ inventory.hidden=flowerCount<1; inventory.textContent=`🌼 ×${flowerCount}`; }
const actionBtn=document.createElement('button'); actionBtn.className='scene-action'; actionBtn.hidden=true; stage.appendChild(actionBtn);
const choicesBox=document.createElement('div'); choicesBox.className='scene-choices'; choicesBox.hidden=true; stage.appendChild(choicesBox);
const journeyHud=document.createElement('div'); journeyHud.className='journey-hud'; journeyHud.hidden=true; stage.appendChild(journeyHud);
const obstacleWord=document.createElement('div'); obstacleWord.className='obstacle-word'; obstacleWord.hidden=true; stage.appendChild(obstacleWord);
actionBtn.addEventListener('click',e=>{e.stopPropagation(); if(locked)return; const s=scenes[index]; if(s.flowerGain){flowerCount=1;updateInventory();} if(s.flowerUse){flowerCount=0;updateInventory();} if(s.replay){index=0;flowerCount=0;corEsmalte='';updateInventory();render(0);return;} actionRequired=false; actionBtn.hidden=true; next();});
function choose(value){
  corEsmalte=value; actionRequired=false; choicesBox.hidden=true; next();
}
// Cache de imagens: baixa e decodifica as artes antes de exibir a cena.
const imageCache=new Map();
function preloadImage(src){
  if(imageCache.has(src)) return imageCache.get(src);
  const promise=new Promise(resolve=>{
    const img=new Image();
    img.onload=async()=>{
      try{ if(img.decode) await img.decode(); }catch(_e){}
      resolve(img);
    };
    img.onerror=()=>resolve(img); // não trava o jogo se algum asset falhar
    img.src=src;
  });
  imageCache.set(src,promise);
  return promise;
}
function warmNextImages(from,count=5){
  for(let n=from;n<Math.min(scenes.length,from+count);n++) preloadImage(scenes[n].art);
}

let renderToken=0;
async function render(i){
  const s=scenes[i]; const token=++renderToken; locked=true;
  // A cena só troca quando a nova arte já estiver pronta. Assim card/texto/imagem entram juntos.
  await preloadImage(s.art);
  if(token!==renderToken) return;
  setMusic(s.music||'');
  stage.className='stage'; void stage.offsetWidth;
  label.textContent=s.label; title.textContent=s.title; subtitle.textContent=s.subtitle;
  narration.textContent=s.text.replace('{corEsmalte}',corEsmalte ? corEsmalte.toUpperCase() : 'BRANCO / MARROM-NUDE');
  art.src=s.art; art.alt=`${s.label} — ${s.title}`; hud.classList.remove('hidden');
  choicesBox.innerHTML=''; choicesBox.hidden=true; actionBtn.hidden=true;
  journeyHud.hidden=!s.distance; journeyHud.textContent=s.distance||'';
  obstacleWord.hidden=!s.obstacle; obstacleWord.textContent=s.obstacle||'';
  actionRequired=Boolean(s.action||s.choices);
  if(s.action){actionBtn.hidden=false; actionBtn.textContent=s.action;}
  if(s.choices){
    choicesBox.hidden=false;
    s.choices.forEach(c=>{const b=document.createElement('button');b.type='button';b.textContent=c.label;b.addEventListener('click',e=>{e.stopPropagation();if(!locked)choose(c.value)});choicesBox.appendChild(b)});
  }
  tap.textContent=actionRequired?(s.choices?'ESCOLHA UMA COR':'ESCOLHA UMA AÇÃO'):'TOQUE PARA CONTINUAR';
  progress.style.width=`${((i+1)/scenes.length)*100}%`; stage.classList.add('fade');
  // Enquanto a pessoa lê esta cena, prepara as próximas em segundo plano.
  warmNextImages(i+1,5);
  setTimeout(()=>locked=false,280);
}
function next(){
  if(locked||actionRequired)return;
  if(index<scenes.length-1){index++;render(index);return;}
}
document.querySelector('#startBtn').addEventListener('click',async()=>{
  unlockAudio();
  setMusic(scenes[0].music||'');
  locked=true;
  await preloadImage(scenes[0].art);
  menu.classList.remove('active'); story.classList.add('active'); index=0; render(0);
});
// Já na tela de abertura, prepara o começo da história sem esperar o jogador clicar.
warmNextImages(0,6);
story.addEventListener('click',next);
story.addEventListener('keydown',e=>{if(['Enter',' ','ArrowRight'].includes(e.key)){e.preventDefault();next()}});


// Mobile: preserva o jogo como um palco 16:9 e escala o conjunto inteiro.
(function setupMobileLandscape(){
  const root=document.documentElement;
  const DESIGN_W=1100, DESIGN_H=618.75;
  const coarse=window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints>0;
  if(!coarse) return;
  root.classList.add('mobile-game');

  function fitMobileStage(){
    const portrait=window.innerHeight>window.innerWidth;
    root.classList.toggle('portrait-mobile',portrait);
    const vv=window.visualViewport;
    const vw=vv ? vv.width : window.innerWidth;
    const vh=vv ? vv.height : window.innerHeight;
    // Pequena margem impede que controles do navegador encostem no jogo.
    const scale=Math.min((vw-8)/DESIGN_W,(vh-8)/DESIGN_H,1);
    root.style.setProperty('--mobile-scale',String(Math.max(.1,scale)));
  }

  fitMobileStage();
  window.addEventListener('resize',fitMobileStage,{passive:true});
  window.addEventListener('orientationchange',()=>setTimeout(fitMobileStage,120),{passive:true});
  if(window.visualViewport){
    window.visualViewport.addEventListener('resize',fitMobileStage,{passive:true});
  }
})();
