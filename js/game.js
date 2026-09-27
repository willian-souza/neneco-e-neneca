const scenes = [
  {
    label:'PRÓLOGO', title:'ADAMANTINA', subtitle:'DE ONDE TUDO COMEÇOU...',
    art:'assets/adamantina.png',
    text:'Antes de qualquer conversa, antes de qualquer mensagem... a história já passava pelos mesmos lugares, mesmo sem eles perceberem.'
  },
  {
    label:'PRÓLOGO', title:'BOX CURUMIM', subtitle:'MESMO LUGAR. ROTINAS DIFERENTES.',
    art:'assets/quadro-02-curumim-aprovado.png',
    text:'Eles já tinham se visto algumas vezes. Mas nunca tinham realmente conversado.'
  },
  {
    label:'06 DE JUNHO', title:'UM STORY', subtitle:'UMA PERGUNTA SIMPLES.',
    art:'assets/06-01-um-story-aprovado.png',
    text:'No dia 06 de junho, a Neneca postou um story com uma pergunta simples: “Corrida ou show?”.'
  },
  {
    label:'06 DE JUNHO', title:'UMA RESPOSTA', subtitle:'E FOI ASSIM QUE COMEÇOU.',
    art:'assets/06-02-uma-resposta-aprovado.png',
    text:'Neneco respondeu que escolheria a corrida. Ela concordou — e logo puxou assunto. Assim começou a primeira conversa entre os dois.'
  },
  {
    label:'06 DE JUNHO', title:'A PRIMEIRA CONVERSA', subtitle:'SEM PRESSA. SEM FLERTE.',
    art:'assets/06-03-primeira-conversa-aprovado.png',
    text:'No começo, não tinha flerte. Eram duas pessoas que finalmente estavam se conhecendo e descobrindo coisas em comum.'
  },
  {
    label:'JUNHO → JULHO', title:'QUASE UM MÊS DE CONVERSA', subtitle:'A ROTINA FOI APROXIMANDO OS DOIS.',
    art:'assets/06-04-quase-um-mes-aprovado.png',
    text:'Corrida, treinos, alimentação, rotina... assunto não faltava. E, aos poucos, a conversa foi ficando cada vez mais natural.'
  },
  {
    label:'JUNHO → JULHO', title:'CADA VEZ MAIS PRESENTES', subtitle:'REELS, BOBEIRAS E RISADAS.',
    art:'assets/06-05-cada-vez-mais-presentes-aprovado.png',
    text:'Vieram os reels, as bobeiras e as risadas. Sem perceber, um começou a fazer parte do dia do outro.'
  },
  {
    label:'08 DE JULHO', title:'CONTINUA...', subtitle:'O PRÓXIMO PASSO AINDA ESTAVA POR VIR.',
    art:'assets/08-julho-continua-aprovado.png',
    text:'Depois de quase um mês de conversa, a história estava prestes a sair da tela do celular.'
  },
  {
    label:'08 DE JULHO', title:'O CONVITE', subtitle:'QUASE UM MÊS DEPOIS.',
    art:'assets/08-convite-aprovado.png',
    text:'Depois de tantas conversas, Neneco resolveu fazer um convite. Na manhã seguinte, aquela história finalmente sairia das mensagens.'
  },
  {
    label:'09 DE JULHO · 06:00', title:'O PRIMEIRO ENCONTRO', subtitle:'UMA MANHÃ BEM FRIA.',
    art:'assets/09-01-primeiro-encontro-aprovado.png',
    text:'Às 06:00, em uma manhã bem fria, Neneco foi buscá-la na casa dela com o carro branco do pai. Era a primeira vez que os dois saíam juntos.'
  },
  {
    label:'09 DE JULHO', title:'A CAMINHO DO PARQUE', subtitle:'PARQUE CALDEIRA.',
    art:'assets/09-02-caminho-caldeira-aprovado.png',
    text:'O destino era o Parque Caldeira. No caminho, a conversa que já fluía pelas mensagens começava a ganhar voz, olhares e sorrisos.'
  },
  {
    label:'09 DE JULHO', title:'PARQUE CALDEIRA', subtitle:'A PRIMEIRA MANHÃ JUNTOS.',
    art:'assets/09-03-caldeira-chegada-aprovado.png',
    text:'Eles chegaram ao Parque Caldeira, caminharam um pouco e aproveitaram aquela manhã que, sem eles saberem, ficaria marcada para sempre.'
  },
  {
    label:'09 DE JULHO', title:'ANTES DA CORRIDA', subtitle:'HORA DE ALONGAR.',
    art:'assets/09-04-alongamento-aprovado.png',
    text:'Antes de correr, veio o alongamento. Tudo ainda era novo, mas estar ali juntos já parecia estranhamente natural.'
  },
  {
    label:'09 DE JULHO', title:'A CORRIDA', subtitle:'FINALMENTE, JUNTOS.',
    art:'assets/09-05-corrida-aprovado.png',
    text:'Depois de quase um mês conversando, finalmente veio a primeira corrida juntos. O que começou com um story agora acontecia lado a lado.'
  },
  {
    label:'09 DE JULHO', title:'MAIS CONVERSA', subtitle:'FORA DAS MENSAGENS.',
    art:'assets/09-06-conversa-banco-aprovado.png',
    text:'Depois da corrida, eles caminharam e conversaram ainda mais. Pela primeira vez, não havia uma tela entre os dois.'
  },
  {
    label:'09 DE JULHO', title:'VIA SABOR', subtitle:'CAFÉ DA MANHÃ.',
    art:'assets/09-07-via-sabor-aprovado.png',
    text:'Depois do parque, eles foram tomar café na Via Sabor, a padaria favorita da Neneca. Café com leite, pão com ovo… e um pequeno detalhe que sempre rendia risadas.',
    action:'COLOCAR 4 PACOTINHOS DE AÇÚCAR ☕'
  },
  {
    label:'MEMÓRIA DESBLOQUEADA', title:'QUATRO PACOTINHOS ☕', subtitle:'SIM. QUATRO. 😂',
    art:'assets/09-07-quatro-pacotinhos-aprovado.png',
    text:'Sim. Quatro pacotinhos. 😂 Neneca sempre achava graça na quantidade de açúcar que Neneco colocava no café com leite — e, como sempre, acabava rindo dele.'
  },
  {
    label:'09 DE JULHO', title:'UM PEQUENO GESTO', subtitle:'ANTES DE IR EMBORA...',
    art:'assets/09-08-um-pequeno-gesto-aprovado.png',
    text:'Depois do café, era hora de voltar. Mas antes de entrar no carro, havia um pequeno gesto que Neneco fazia questão de repetir.',
    action:'ABRIR A PORTA 🚗❤️'
  },
  {
    label:'09 DE JULHO', title:'A VOLTA', subtitle:'HORA DE LEVÁ-LA PARA CASA.',
    art:'assets/09-08-volta-carro-branco-aprovado.png',
    text:'Neneco sempre abria a porta do carro para ela. Um gesto simples — e um daqueles que Neneca ama. ❤️ GESTO ROMÂNTICO DESBLOQUEADO — ABRIR A PORTA PARA A NENECA. A manhã estava chegando ao fim — mas ainda faltava um momento importante.'
  },
  {
    label:'09 DE JULHO', title:'UM POUCO DE CORAGEM', subtitle:'DENTRO DO CARRO.',
    art:'assets/09-09-coragem-carro-aprovado.png',
    text:'Já em frente à casa dela, Neneco criou coragem. Faltava só uma coisa antes daquele primeiro encontro terminar...',
    action:'PEDIR UM BEIJO ❤️'
  },
  {
    label:'09 DE JULHO', title:'UM INSTANTE DE TIMIDEZ', subtitle:'ELA FICOU ENVERGONHADA.',
    art:'assets/09-09-neneca-envergonhada-aprovado.png',
    text:'Neneca ficou tímida e envergonhada. Por um instante, Neneco achou que era melhor desistir...'
  },
  {
    label:'09 DE JULHO', title:'O PRIMEIRO BEIJO', subtitle:'ELA NÃO DEIXOU ELE DESISTIR.',
    art:'assets/09-10-primeiro-beijo-aprovado.png',
    text:'Quando Neneco estava prestes a desistir, Neneca o puxou para perto. E foi assim que aconteceu o primeiro beijo.'
  },
  {
    label:'MEMÓRIA DESBLOQUEADA', title:'PRIMEIRO BEIJO ❤️', subtitle:'09 DE JULHO.',
    art:'assets/09-10-primeiro-beijo-aprovado.png',
    text:'PRIMEIRO BEIJO DESBLOQUEADO — 09/07 ❤️'
  },
  {
    label:'PRÓXIMO CAPÍTULO', title:'O NOSSO LUGAR', subtitle:'PARQUE CALDEIRA.',
    art:'assets/09-03-caldeira-chegada-aprovado.png',
    text:'Aquele parque ainda voltaria muitas vezes para a história dos dois. Aos poucos, o Parque Caldeira deixaria de ser apenas um lugar.'
  },
  {
    label:'ALGUM TEMPO DEPOIS', title:'DE VOLTA AO CALDEIRA', subtitle:'A PRIMEIRA CORRIDA ESTAVA LONGE DE SER A ÚLTIMA.',
    art:'assets/10-01-de-volta-ao-caldeira-aprovado.png',
    text:'Depois daquele primeiro encontro, eles voltaram ao Parque Caldeira. E aquela primeira corrida estava longe de ser a última.'
  },
  {
    label:'O NOSSO LUGAR', title:'5 KM', subtitle:'LADO A LADO... QUASE 😅',
    art:'assets/10-02-5km-aprovado.png',
    text:'Nos 5 km, Neneco quase sempre corria um pouco à frente. Não para deixá-la para trás... mas para fazê-la buscar um pouquinho mais.'
  },
  {
    label:'O NOSSO LUGAR', title:'DEPOIS DA CORRIDA', subtitle:'SEM PRESSA.',
    art:'assets/10-03-depois-da-corrida-aprovado.png',
    text:'Depois dos quilômetros, vinha a melhor parte: diminuir o ritmo, caminhar e simplesmente aproveitar a companhia um do outro.'
  },
  {
    label:'O NOSSO LUGAR', title:'UMA PEQUENA TRADIÇÃO', subtitle:'ALGO COMEÇOU A SE REPETIR...',
    art:'assets/10-04-pegar-flor-aprovado.png',
    text:'Até que uma coisa pequena começou a se repetir...',
    action:'PEGAR A FLOR 🌼'
  },
  {
    label:'O NOSSO LUGAR', title:'PARA A NENECA', subtitle:'UMA FLORZINHA LARANJA.',
    art:'assets/10-05-para-neneca-aprovado.png',
    text:'Sempre que encontrava uma, Neneco pegava a flor, se ajoelhava e entregava para Neneca. Uma brincadeira simples... que acabou virando tradição.'
  },
  {
    label:'O NOSSO LUGAR', title:'MESMO QUANDO ELE NÃO ESTAVA LÁ', subtitle:'O CALDEIRA JÁ ERA DIFERENTE.',
    art:'assets/10-06-neneca-sozinha-aprovado.png',
    text:'Às vezes, Neneca também corria ali sozinha. Mas aquele lugar já não parecia exatamente o mesmo. Porque, de algum jeito, correr por ali também fazia ela lembrar do Neneco.'
  },
  {
    label:'MEMÓRIA DESBLOQUEADA', title:'O NOSSO LUGAR ❤️', subtitle:'PARQUE CALDEIRA.',
    art:'assets/10-07-nosso-lugar-aprovado.png',
    text:'O lugar do primeiro encontro virou o lugar das corridas, das conversas e de uma pequena flor laranja. Até que o Parque Caldeira ganhou outro nome entre os dois... ❤️ O NOSSO LUGAR — DESBLOQUEADO'
  },
  {
    label:'DEPOIS DISSO...', title:'OS PEQUENOS MOMENTOS', subtitle:'A HISTÓRIA CONTINUAVA SENDO ESCRITA.',
    art:'assets/11-01-pequenos-momentos.png',
    text:'Depois daquele começo, vieram outros encontros. Outros dias. E uma coleção de pequenos momentos que, aos poucos, foi se tornando parte da história dos dois.'
  },
  {
    label:'EM ALGUM DESSES ENCONTROS...', title:'UMA COISA VIROU COSTUME', subtitle:'UM JEITO DE CUIDAR. 😂',
    art:'assets/11-02-batatinha-antes.png',
    text:'Quando saíam para comer, Neneco tinha um jeito particular de dividir as batatinhas com a Neneca...',
    action:'FAZER AVIÃOZINHO 🍟✈️'
  },
  {
    label:'PEQUENOS MOMENTOS', title:'O AVIÃOZINHO 🍟✈️', subtitle:'ELA JÁ SABIA O QUE VINHA. 😂',
    art:'assets/11-03-batatinha-aviao.png',
    text:'Ela ficava com vergonha. Ele fazia mesmo assim. E, no fundo... ela adorava. 😂'
  },
  {
    label:'ENTRE UM ENCONTRO E OUTRO...', title:'REELS E BOBEIRAS', subtitle:'MESMO DE LONGE.',
    art:'assets/11-04-reel-antes.png',
    text:'Mesmo quando estavam longe, uma coisa sempre encontrava o caminho até o celular do outro: reels, bobeiras e coisas que tinham a cara da Neneca.',
    action:'ENVIAR PRA NENECA 😂'
  },
  {
    label:'PEQUENOS MOMENTOS', title:'UMA RISADA DO OUTRO LADO', subtitle:'A DISTÂNCIA NÃO IMPEDIA ISSO.',
    art:'assets/11-05-reels-distancia.png',
    text:'Em lugares diferentes, os dois acabavam dividindo a mesma risada. Mesmo à distância, continuavam fazendo parte do dia um do outro.'
  },
  {
    label:'ENTRE UM ENCONTRO E OUTRO...', title:'UMA DECISÃO IMPORTANTÍSSIMA', subtitle:'NENECO, ESCOLHE A COR DO MEU ESMALTE?',
    art:'assets/11-06-esmalte-escolha.png',
    text:'Mesmo à distância, Neneco acabou ganhando uma responsabilidade muito importante...',
    choices:[
      {label:'🤍 BRANCO', value:'branco'},
      {label:'🤎 MARROM / NUDE', value:'marrom/nude'}
    ]
  },
  {
    label:'MISSÃO CONCLUÍDA ✓', title:'COR DO ESMALTE ESCOLHIDA 😂', subtitle:'DECISÃO TOMADA.',
    art:'assets/11-06-esmalte-escolha.png',
    text:'Escolha registrada: {corEsmalte}. Mais uma pequena decisão da rotina dela que, mesmo de longe, passava pelo Neneco.'
  },
  {
    label:'E QUANDO ESTAVAM JUNTOS...', title:'NEM TODOS OS GOSTOS ERAM IGUAIS 😂', subtitle:'PRINCIPALMENTE A PLAYLIST.',
    art:'assets/11-07-carro-musica.png',
    text:'Neneco gostava de rock. Neneca, de funk e sertanejo. E quando ela estava dirigindo... a escolha da música já tinha dona. 😂'
  },
  {
    label:'EM UM DIA ESPECIAL...', title:'UMA SURPRESA', subtitle:'MESMO DE LONGE.',
    art:'assets/11-08a-aniversario-preparando.png',
    text:'No aniversário da Neneca, a distância significava que Neneco não poderia simplesmente aparecer por lá. Mas isso não significava que não poderia estar presente de algum jeito.',
    action:'ENVIAR UMA SURPRESA 🌻'
  },
  {
    label:'ANIVERSÁRIO DA NENECA', title:'UMA SURPRESA NO TRABALHO', subtitle:'GIRASSOL + BOMBONS. 🌻🍫',
    art:'assets/11-08b-aniversario-recebendo.png',
    text:'Naquele dia, Neneco não estava ali. Mas uma pequena surpresa chegou até ela. 🌻 GIRASSOL ADQUIRIDO.'
  },
  {
    label:'DEPOIS DE SAIR...', title:'O FIM DA NOITE', subtitle:'AINDA EXISTIA UMA ÚLTIMA PARADA.',
    art:'assets/11-09-buracao-chegada.png',
    text:'Depois de comer, muitas vezes ainda existia uma última parada. O Parque dos Pioneiros. Ou, como eles sempre chamavam... o Buracão.'
  },
  {
    label:'BURACÃO', title:'SEMPRE O MESMO', subtitle:'ENTRE TANTOS BANCOS...',
    art:'assets/11-10-banquinho-caminho.png',
    text:'E mesmo com tantos lugares para sentar... eles acabavam escolhendo sempre o mesmo.',
    action:'IR PARA O NOSSO BANQUINHO ❤️'
  },
  {
    label:'NOSSO BANQUINHO ❤️', title:'CONVERSAS SEM HORA PARA ACABAR', subtitle:'NO BURACÃO.',
    art:'assets/11-11-nosso-banquinho.png',
    text:'Ali eles conversavam sobre tudo. Sobre o dia. Sobre a vida. Sobre eles.'
  },
  {
    label:'NOSSO BANQUINHO ❤️', title:'AS HORAS PASSAVAM', subtitle:'E NENHUM DOS DOIS TINHA PRESSA.',
    art:'assets/11-12-passagem-horas.png',
    text:'As horas passavam. Uma conversa puxava outra. Uma risada puxava outra. E nenhum dos dois parecia estar com muita pressa.',
    action:'FICAR SÓ MAIS UM POUQUINHO ❤️'
  },
  {
    label:'NOSSO BANQUINHO ❤️', title:'SÓ MAIS UM POUQUINHO', subtitle:'QUE QUASE NUNCA ERA SÓ UM POUQUINHO.',
    art:'assets/11-13-so-mais-um-pouquinho.png',
    text:'E “só mais um pouquinho” quase sempre virava mais uma conversa... mais uma risada... mais alguns minutos juntos.'
  },
  {
    label:'MEMÓRIA DESBLOQUEADA', title:'NOSSO BANQUINHO ❤️', subtitle:'ONDE MUITAS NOITES DEMORAVAM A TERMINAR.',
    art:'assets/11-14-banquinho-final.png',
    text:'No fim, não era só um banco. Era onde muitas noites demoravam um pouco mais para terminar. ❤️ NOSSO BANQUINHO — MEMÓRIA DESBLOQUEADA.'
  },
  {
    label:'ENTRE ELES...', title:'65 QUILÔMETROS', subtitle:'UMA DISTÂNCIA QUE FAZIA PARTE DA HISTÓRIA.',
    art:'assets/12-01-entre-os-dois.png',
    text:'Nem todos os dias terminavam no mesmo lugar. Neneco estava em Tupã. Neneca, em Lucélia. Entre os dois, havia cerca de 65 quilômetros.',
    distance:'65 KM'
  },
  {
    label:'65 KM', title:'QUANDO CHEGAVA O DIA', subtitle:'ERA HORA DE DIMINUIR A DISTÂNCIA.',
    art:'assets/12-02-quando-chegava-o-dia.png',
    text:'Mas, de tempos em tempos, chegava o dia de diminuir essa distância.',
    action:'🏍️ IR VER A NENECA'
  },
  {
    label:'TUPÃ → LUCÉLIA', title:'65 KM', subtitle:'A ESTRADA COMEÇAVA.',
    art:'assets/12-03-estrada-65km.png',
    text:'Era estrada. Era tempo. Era distância. Mas havia alguém esperando do outro lado.',
    distance:'65 KM'
  },
  {
    label:'PELA ESTRADA...', title:'DISTÂNCIA', subtitle:'UM POUCO MENOS A CADA QUILÔMETRO.',
    art:'assets/12-04-obstaculos.png',
    text:'A distância ainda estava ali. Mas cada quilômetro percorrido deixava os dois um pouco mais perto.',
    distance:'48 KM', obstacle:'DISTÂNCIA', action:'CONTINUAR 🏍️'
  },
  {
    label:'PELA ESTRADA...', title:'ESPERA', subtitle:'O CAMINHO CONTINUAVA.',
    art:'assets/12-04-obstaculos.png',
    text:'Também havia a espera. O tempo entre sair de um lugar e finalmente chegar ao outro.',
    distance:'27 KM', obstacle:'ESPERA', action:'CONTINUAR 🏍️'
  },
  {
    label:'PELA ESTRADA...', title:'SAUDADE', subtitle:'JÁ ESTAVA QUASE LÁ.',
    art:'assets/12-04-obstaculos.png',
    text:'E havia a saudade. Mas, dessa vez, ela já estava perto de acabar.',
    distance:'9 KM', obstacle:'SAUDADE', action:'CONTINUAR 🏍️'
  },
  {
    label:'DO OUTRO LADO...', title:'ELA ESPERAVA', subtitle:'FALTAVA POUCO.',
    art:'assets/12-05-do-outro-lado.png',
    text:'Enquanto um percorria a estrada… a outra esperava do outro lado.',
    distance:'9 KM'
  },
  {
    label:'QUASE LÁ...', title:'CHEGANDO', subtitle:'A ESTRADA ESTAVA TERMINANDO.',
    art:'assets/12-06a-chegando.png',
    text:'As luzes da cidade apareceram. Depois de tantos quilômetros, faltava muito pouco.',
    distance:'3 KM'
  },
  {
    label:'QUASE LÁ...', title:'SÓ MAIS UM POUCO', subtitle:'AGORA ERA QUESTÃO DE MINUTOS.',
    art:'assets/12-06a-chegando.png',
    text:'A distância que parecia tão grande no começo agora cabia nos últimos minutos da viagem.',
    distance:'1 KM'
  },
  {
    label:'CHEGOU ❤️', title:'0 KM', subtitle:'A DISTÂNCIA ACABOU. PELO MENOS POR AGORA.',
    art:'assets/12-06b-cheguei.png',
    text:'Neneco finalmente chegou. A moto parou. O capacete saiu. E agora faltava só encontrar quem estava esperando do outro lado.',
    distance:'❤️ 0 KM', action:'❤️ ENCONTRAR A NENECA'
  },
  {
    label:'DO OUTRO LADO ❤️', title:'O REENCONTRO', subtitle:'VALEU CADA QUILÔMETRO.',
    art:'assets/12-07a-reencontro.png',
    text:'Depois da estrada, da espera e da saudade… finalmente eles estavam no mesmo lugar.'
  },
  {
    label:'65 KM → 0 KM', title:'JUNTOS ❤️', subtitle:'PELO MENOS POR UM TEMPO.',
    art:'assets/12-07b-abraco.png',
    text:'E então, os 65 quilômetros desapareciam. Pelo menos por um tempo.',
    distance:'65 KM → ❤️ 0 KM'
  },
  {
    label:'QUANDO ESTAVAM JUNTOS...', title:'A GARUPA', subtitle:'A ESTRADA GANHAVA OUTRO SIGNIFICADO.',
    art:'assets/12-09-garupa.png',
    text:'E quando estavam juntos, a estrada ganhava outro significado. Neneco pilotava. Neneca seguia na garupa, abraçada nele.'
  },
  {
    label:'65 KM', title:'DO OUTRO LADO', subtitle:'ALGUMAS DISTÂNCIAS VALEM A PENA.',
    art:'assets/12-10-final-castelo.png',
    text:'65 quilômetros não parecem tanta coisa…'
  },
  {
    label:'🏍️ 65 KM', title:'FASE CONCLUÍDA', subtitle:'❤️',
    art:'assets/12-10-final-castelo.png',
    text:'…quando existe alguém esperando do outro lado.',
    distance:'FASE CONCLUÍDA'
  },
  {
    label:'O CASTELO DA NENECA', title:'O CORREDOR DAS MEMÓRIAS', subtitle:'ALGUMAS HISTÓRIAS DEIXAM MARCAS PELO CAMINHO.',
    art:'assets/13-01-castelo-inicio.png',
    text:'No fim da estrada, havia um lugar diferente. Um corredor construído com tudo o que os trouxe até ali.'
  },
  {
    label:'06 DE JUNHO', title:'UMA CONVERSA', subtitle:'A PRIMEIRA MEMÓRIA SE ACENDE.',
    art:'assets/13-02-memoria-story.png',
    text:'06 de junho. Uma conversa.'
  },
  {
    label:'09 DE JULHO', title:'UMA CORRIDA', subtitle:'E A HISTÓRIA SAIU DA TELA.',
    art:'assets/13-03-memoria-corrida.png',
    text:'09 de julho. Uma corrida.'
  },
  {
    label:'DEPOIS...', title:'OS CAFÉS', subtitle:'MAIS TEMPO JUNTOS.',
    art:'assets/13-04-memoria-cafes.png',
    text:'Depois vieram os cafés.'
  },
  {
    label:'O NOSSO LUGAR', title:'AS FLORES', subtitle:'ALGUMAS COISAS PEQUENAS FICAM.',
    art:'assets/13-05-memoria-flores.png',
    text:'Algumas foram encontradas pelo caminho. Outras atravessaram a distância para chegar até ela.',
    action:'🌼 PEGAR A FLOR', flowerGain:true
  },
  {
    label:'PEQUENOS MOMENTOS', title:'AS BOBEIRAS', subtitle:'REELS, RISADAS E COISAS SÓ DELES.',
    art:'assets/13-06-memoria-bobeiras.png',
    text:'Vieram também as bobeiras. As risadas. E aquelas pequenas coisas que só os dois entendiam.'
  },
  {
    label:'MADRUGADAS', title:'O NOSSO BANQUINHO', subtitle:'UM LUGAR QUE VIROU DELES.',
    art:'assets/13-07-memoria-banquinho.png',
    text:'Vieram as conversas que duravam mais do que deveriam. As madrugadas. E um banquinho que acabou virando nosso.'
  },
  {
    label:'65 KM', title:'A DISTÂNCIA', subtitle:'NUNCA O SUFICIENTE.',
    art:'assets/13-08-memoria-65km.png',
    text:'E sempre existiram alguns quilômetros entre os dois. Mas nunca o suficiente.',
    distance:'65 → 27 → 9 → 3 → 1 → ❤️ 0 KM'
  },
  {
    label:'TODAS AS MEMÓRIAS', title:'A ÚLTIMA PORTA', subtitle:'TUDO LEVOU ATÉ AQUI.',
    art:'assets/13-09-ultima-porta.png',
    text:'06 de junho. Uma conversa. 09 de julho. Uma corrida. Depois vieram os cafés. As flores. As risadas. As bobeiras. Os beijos. As madrugadas. E um banquinho que virou nosso.',
    action:'❤️ ABRIR A ÚLTIMA PORTA'
  },
  {
    label:'UMA NOVA FASE', title:'DO OUTRO LADO DA PORTA', subtitle:'AINDA FALTAVA UMA MEMÓRIA.',
    art:'assets/14-01-sala-final.png',
    text:'No fim de todas aquelas memórias… ainda faltava uma.',
    action:'❤️ CONTINUAR'
  },
  {
    label:'UMA NOVA FASE', title:'A NENECA', subtitle:'ERA ELA.',
    art:'assets/14-02-neneca.png',
    text:'…era ela.',
    action:'❤️ IR ATÉ A NENECA'
  },
  {
    label:'UMA NOVA FASE', title:'FRENTE A FRENTE', subtitle:'AGORA NÃO HAVIA MAIS DISTÂNCIA.',
    art:'assets/14-03-frente-a-frente.png',
    text:'Eu não sei exatamente em qual momento percebi… mas desde o começo eu sabia que não queria que isso fosse algo passageiro.',
    action:'🌼 ENTREGAR A FLOR', flowerUse:true
  },
  {
    label:'UMA NOVA FASE', title:'NENECA…', subtitle:'❤️',
    art:'assets/14-04-pedido-flor.png',
    text:'Porque algumas coisas pequenas… acabam significando muito. Neneca… quer ser minha namorada? ❤️',
    action:'SIM ❤️', isYes:true
  },
  {
    label:'❤️ NENECO + NENECA ❤️', title:'UMA NOVA FASE FOI DESBLOQUEADA', subtitle:'NAMORADOS',
    art:'assets/14-05-o-sim.png',
    text:'E assim, uma nova fase começou. ❤️'
  },
  {
    label:'EPÍLOGO', title:'É SÓ O COMEÇO ❤️', subtitle:'ESSA NÃO É A FASE FINAL.',
    art:'assets/15-01-epilogo.png',
    text:'Ainda temos muitos quilômetros para correr. Muitos cafés para tomar. Muitas batatinhas para dividir. Muitas madrugadas no banquinho. Muitas flores para entregar. E muitas histórias para viver.'
  },
  {
    label:'FIM', title:'NENECO & NENECA', subtitle:'❤️',
    art:'assets/15-01-epilogo.png',
    text:'Essa não é a fase final. É só o começo. ❤️',
    action:'JOGAR NOVAMENTE', replay:true
  }

];

let index=0,locked=false,actionRequired=false;
const menu=document.querySelector('#menu'),story=document.querySelector('#story'),stage=document.querySelector('.stage'),art=document.querySelector('#sceneArt'),hud=document.querySelector('.chapter-hud'),label=document.querySelector('#chapterLabel'),title=document.querySelector('#chapterTitle'),subtitle=document.querySelector('#chapterSubtitle'),narration=document.querySelector('#narrationText'),progress=document.querySelector('#progressBar'),tap=document.querySelector('.tap');
let corEsmalte='';
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
