const db = require('./db');

const Question = db.sequelize.define('questions', {
    titulo: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    disciplina: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    opcao1: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    opcao2: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    opcao3: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    opcaoCorreta: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    
    
});

//Question.sync({force:true}); //so execute essa linha uma vez


/*Historia

Question.create({titulo:"O que eram as entradas?",disciplina:"Historia",opcao1:"Expedições bancadas pelos mineradores", opcao2: "Expedições da Corte Portuguesa", opcao3: "Expedições bancadas pelos índios", opcaoCorreta: "Expedições bancadas pela Coroa Portuguesa"});
Question.create({titulo:"O que eram as bandeiras?",disciplina:"Historia",opcao1:"Expedições que saiam para encontrar cidades europeias", opcao2: "Expedições bancadas pelos espanhóis", opcao3: "Expedições da Família Real", opcaoCorreta: "Expedições particulares que saiam do sudeste para encontrar ouro e escravos em Minas Gerais"});
Question.create({titulo:"O que o quinto(1/5 ou 20%) defendia?",disciplina:"Historia",opcao1:"Todos deveriam dar o que tinha de valor a Coroa", opcao2: "Que a quantidade de escravos que se tinha era 30 arrobas mensais para a Coroa", opcao3: "Que se você não pagasse até o final do ano 100 arrobas, você perderia suas propriedades até quitar sua divida", opcaoCorreta: "Que 20% da produção deveria ir para a Coroa"});
Question.create({titulo:"Em que ano a Derrama foi criada?",disciplina:"Historia",opcao1:"1754", opcao2: "1752", opcao3: "1753", opcaoCorreta: "1751"});
Question.create({titulo:"Quais cidades surgiram com o aumento do comércio e das cidades?",disciplina:"Historia",opcao1:"São Paulo, Recife e Pernambuco", opcao2: "Mariana, Belo Horizonte e Ouro Fino", opcao3: "Jundiaí,Tubarão e Caruaru", opcaoCorreta: "Mariana, Ouro Preto e Ouro Fino"});
Question.create({titulo:"Qual é o outro nome que se dá a primeira guerra?",disciplina:"Historia",opcao1:"Guerra europeia", opcao2: "Crise europeia", opcao3: "Guerra anglo-germanica", opcaoCorreta: "A grande guerra"});
Question.create({titulo:"Qual era o nome do grupo terrorista Sérvio contratado para Matar o arqueduque Francisco Ferdinando?",disciplina:"Historia",opcao1:"Mão Suja", opcao2: "Os servianos", opcao3: "Bósnia livre", opcaoCorreta: "Mão Negra"});
Question.create({titulo:"Em qual ano se iniciou a guerra?",disciplina:"Historia",opcao1:"1918", opcao2: "1928", opcao3: "1911", opcaoCorreta: "1914"});
Question.create({titulo:"O estopim da guerra foi a morte do ___ austríaco.",disciplina:"Historia",opcao1:"Diplomata", opcao2: "General", opcao3: "Ministro", opcaoCorreta: "Arqueduque"});
Question.create({titulo:"Selecione a opção em que todos os países tenham participado da Primeira Guerra Mundial",disciplina:"Historia",opcao1:"Alemanha, Brasil, Estados Unidos e Russia", opcao2: "Estados Unidos, Russia, Alemanha, França e Inglaterra", opcao3: "Brasil, Itália, Império Austro-Hungaro e Russia", opcaoCorreta: "Alemanha, Itália, Império Austro-Hungaro e Inglaterra"});
Question.create({titulo:"Quais armas eram utilizadas no período paleolítico?",disciplina:"Historia",opcao1:"Armas de fogo", opcao2: "Machados e facões", opcao3: "Armas feitas de pedra polida, ossos e madeira", opcaoCorreta: "Armas feitas de pedra lascada e arco e flecha"});
Question.create({titulo:"No Período Neolítico, surgiu a agricultura. Quais alimentos eram mais cultivados?",disciplina:"Historia",opcao1:"Tomates, cebolas e batatas", opcao2: "Mandiocas, milhos e feijões", opcao3: "Uvas, maçãs e hortelãs", opcaoCorreta: "Trigo, centeio e cevada"});
Question.create({titulo:"O que é uma palafita?",disciplina:"Historia",opcao1:"Cavernas à frente de lagos e rios", opcao2: "Casa feita de palha e bambu", opcao3: "Arma de pedra", opcaoCorreta: "Casas sobre estacas"});
Question.create({titulo:"Na idade dos metais, qual era o resultado da mistura de cobre e estanho?",disciplina:"Historia",opcao1:"Ferro", opcao2: "Ouro", opcao3: "Alumínio", opcaoCorreta: "Bronze"});
Question.create({titulo:"Na idade dos metais, qual metal foi utilizado em escala menor?",disciplina:"Historia",opcao1:"O ouro", opcao2: "A prata", opcao3: "O bronze", opcaoCorreta: "O estanho"});
Question.create({titulo:"Quem é a deusa devoradora dos pecodors reijatados durante a passagem dos mortos?",disciplina:"Historia",opcao1:"Osíris", opcao2: "Anúbis", opcao3: "Hórus", opcaoCorreta: "Amnut"});
Question.create({titulo:"Qual é o deus protetor das famílias e do faraó?",disciplina:"Historia",opcao1:"Thot", opcao2: "Anúbis", opcao3: "Set", opcaoCorreta: "Hórus"});
Question.create({titulo:"Quem foi Osíris?",disciplina:"Historia",opcao1:"Escriba do deuses", opcao2: "Deusa devoradora dos pecadores", opcao3: "Irmão invejoso", opcaoCorreta: "Rei do mundo dos mortos"});
Question.create({titulo:"Qual deles é da mitologia egípcia?",disciplina:"Historia",opcao1:"Poseidon", opcao2: "Tohil", opcao3: "Zeus", opcaoCorreta: "Wadjet"});
Question.create({titulo:"O que Thot trouxe pro Egito?",disciplina:"Historia",opcao1:"O primeiro faraó", opcao2: "As terras", opcao3: "Escribas", opcaoCorreta: "Hieróglifos"});


Geografia


Question.create({titulo:"Assinale a alternativa que apresenta um tipo climático que ocorre ao longo da Linha do Equador",disciplina:"Geografia",opcao1:"Desértico", opcao2: "Subtropical", opcao3: "Tropical", opcaoCorreta: "Equatorial"});
Question.create({titulo:"O clima temperado é aquele que ocorre em médias latitudes, sendo caracterizado pela clara divisão entre as quatro estações do ano. Ele é classificado em:",disciplina:"Geografia",opcao1:"tropical e subtropical", opcao2: "polar e subpolar", opcao3: "árido e semiárido", opcaoCorreta: "oceânico e continental"});
Question.create({titulo:"Qual dos tipos climáticos listados abaixo NÃO ocorre no Brasil?",disciplina:"Geografia",opcao1:"Subtropical", opcao2: "Equatorial", opcao3: "Tropical", opcaoCorreta: "Mediterrâneo"});
Question.create({titulo:"Qual das alternativas abaixo NÃO apresenta um elemento climático?",disciplina:"Geografia",opcao1:"Pressão atmosférica", opcao2: "Umidade", opcao3: "Temperatura", opcaoCorreta: "Correntes marítimas"});
Question.create({titulo:"A continentalidade é um fator climático que indica a influência de grandes porções de terra no clima. Considerando esse conceito, uma cidade do Brasil fortemente influenciada pela continentalidade é:",disciplina:"Geografia",opcao1:"Porto Alegre", opcao2: "Rio de Janeiro", opcao3: "Fortaleza", opcaoCorreta: "Cuiabá"});
Question.create({titulo:"Assinale a alternativa que indica as formas de relevo onde predominam os processos de erosão em detrimento do acúmulo da sedimentação:",disciplina:"Geografia",opcao1:"Planaltos e depressões", opcao2: "Montanhas e planícies", opcao3: "Planícies e depressões", opcaoCorreta: "Montanhas e planaltos"});
Question.create({titulo:"O Mar Morto, paisagem que apresenta as menores altitudes dentre as terras emersas do planeta Terra, caracterizando uma área de:",disciplina:"Geografia",opcao1:"Baixa deposição sedimentar", opcao2: "Formação basáltica", opcao3: "Planícies latitudinais", opcaoCorreta: "Depressão absoluta"});
Question.create({titulo:"A Geopolítica é um campo de estudo que remete às relações entre os países. Atualmente, a lógica geopolítica global é marcada pela:",disciplina:"Geografia",opcao1:"Unipolaridade", opcao2: "Ditadura", opcao3: "Bipolaridade", opcaoCorreta: "Multipolaridade"});
Question.create({titulo:"Qual conceito-chave da Geografia é o mais aplicado nos estudos geopolíticos?",disciplina:"Geografia",opcao1:"Tempo", opcao2: "Paisagem", opcao3: "Lugar", opcaoCorreta: "Território"});
Question.create({titulo:"A Geopolítica é um campo de estudos que tem como objeto central:",disciplina:"Geografia",opcao1:"Os tipos de relações econômicas estabelecidas pelas metrópoles", opcao2: "Os diversos usos das paisagens para o desenvolvimento social", opcao3: "As classificações relacionadas à regionalização dos continentes", opcaoCorreta: "As relações estabelecidas entre os países e territórios do globo"});
Question.create({titulo:"Qual o nome do bloco econômico do qual o Brasil faz parte?",disciplina:"Geografia",opcao1:"Asean", opcao2: "Apec", opcao3: "Nafta", opcaoCorreta: "Mercosul"});
Question.create({titulo:"Qual dos países, entre os listados abaixo, NÃO faz parte do agrupamento político-econômico Brics",disciplina:"Geografia",opcao1:"Rússia", opcao2: "Índia", opcao3: "China", opcaoCorreta: "Argentina"});
Question.create({titulo:"Assinale a alternativa abaixo que apresenta uma região global marcada pelo forte embate político e militar:",disciplina:"Geografia",opcao1:"Austrália", opcao2: "Norte da Europa", opcao3: "Europa Ocidental", opcaoCorreta: "Oriente Médio"});
Question.create({titulo:"Indique, entre as alternativas abaixo, aquela que apresenta dois países que são um foco de tensão geopolítica na atualidade:",disciplina:"Geografia",opcao1:"Malta e Itália", opcao2: "Hungria e Polônia", opcao3: "Estônia e Letônia", opcaoCorreta: "Rússia e Ucrânia"});
Question.create({titulo:"O núcleo é uma das camadas da Terra. Ele é composto principalmente pelos minerais:",disciplina:"Geografia",opcao1:"ferro e prata", opcao2: "prata e silício", opcao3: "ferro e cobalto", opcaoCorreta: "ferro e níquel"});
Question.create({titulo:"Quais são os fatores físicos que contribuem decisivamente para a diferença de estados na formação do núcleo?",disciplina:"Geografia",opcao1:"Evaporação e liquefação", opcao2: "Transpiração e pressão", opcao3: "Umidade e evaporação", opcaoCorreta: "Temperatura e pressão"});
Question.create({titulo:"Assinale a alternativa que aponta uma característica encontrada no núcleo",disciplina:"Geografia",opcao1:"Existência apenas de camadas líquidas", opcao2: "Diminuta umidade relativa do ar", opcao3: "Existência de grandes volumes de lava", opcaoCorreta: "Ocorrência de elevadas temperaturas"});
Question.create({titulo:"O estado mais pastoso das rochas encontradas no manto são o resultado, dentre outros, da",disciplina:"Geografia",opcao1:"Presença de minerais diversos de fácil combustão", opcao2: "Deusa devoradora dos pecadores", opcao3: "Ocorrência de movimentos tectônicos na litosfera", opcaoCorreta: "Influência das elevadas temperaturas do núcleo"});
Question.create({titulo:"O núcleo terrestre atua na dinâmica do planeta por meio da",disciplina:"Geografia",opcao1:"Acentuação do movimento de translação realizado pela esfera planetária", opcao2: "Diminuição da pressão encontrada no interior das camadas terrestres", opcao3: "Modificação da crosta terrestre pelo movimento de tectonismo", opcaoCorreta: "Produção de altas temperaturas que influenciam na composição terrestre"});
Question.create({titulo:"A camada mais externa do planeta, formada principalmente por estruturas rochosas, é corretamente chamada de",disciplina:"Geografia",opcao1:"Atmosfera", opcao2: "Geosfera", opcao3: "Astenosfera", opcaoCorreta: "Litosfera"});


Física

Question.create({titulo:"O empuxo exercido sobre um corpo imerso em um líquido depende:",disciplina:"Fisica",opcao1:"Somente do volume do líquido deslocado", opcao2: "Da densidade e do volume do corpo", opcao3: "Do volume do líquido deslocado e da densidade do corpo", opcaoCorreta: "Do volume e da densidade do líquido deslocado"});
Question.create({titulo:"Uma lata tampada com dois orifícios encontra-se parada, imersa em um recipiente com água. O orifício superior comunica-se com o exterior através de uma mangueira. Ao injetarmos ar pela mangueira, é correto afirmar que a lata:",disciplina:"Fisica",opcao1:"Permanecerá parada", opcao2: "Aumentará de peso", opcao3: "Afundará", opcaoCorreta: "Subirá"});
Question.create({titulo:"Um pedaço de gelo flutua em equilíbrio térmico com uma certa quantidade de água depositada em um balde. À medida que o gelo derrete, podemos afirmar que",disciplina:"Fisica",opcao1:"O nível da água no balde aumenta, pois a densidade da água é maior que a densidade do gelo", opcao2: "O nível da água no balde diminui, pois haverá uma queda de temperatura da água", opcao3: "O nível da água no balde aumenta, pois haverá uma queda de temperatura da água", opcaoCorreta: "O nível da água no balde não se altera"});
Question.create({titulo:"Qual é a velocidade escalar média, em km/h, de uma pessoa que percorre a pé 1200 m em 20 min?",disciplina:"Fisica",opcao1:"1,2", opcao2: "2,1", opcao3: "4,8", opcaoCorreta: "3,6"});
Question.create({titulo:"Uma pessoa, correndo, percorre 4,0 km com velocidade escalar média de 12 km/h. O tempo do percurso é de:",disciplina:"Fisica",opcao1:"33 min", opcao2: "8,0 min", opcao3: "30 min", opcaoCorreta: "20 min"});
Question.create({titulo:"Um carro mantém uma velocidade escalar constante de 72,0 km/h. Em uma hora e dez minutos ele percorre, em quilômetros, a distância de:",disciplina:"Fisica",opcao1:"80,0", opcao2: "82,4", opcao3: "90,0", opcaoCorreta: "84,0"});
Question.create({titulo:"Partindo do instante zero, um veículo sai da posição inicial de 60 metros e chega à posição final de 10 metros após 5 segundos. Qual a velocidade escalar média do veículo para efetuar esse percurso?",disciplina:"Fisica",opcao1:"nula", opcao2: "14 m/s", opcao3: "10 m/s", opcaoCorreta: "– 10 m/s"});
Question.create({titulo:"Um pequeno animal desloca-se com velocidade média igual a 0,5 m/s. A velocidade desse animal em km/dia é:",disciplina:"Fisica",opcao1:"1,80", opcao2: "4,30", opcao3: "48,3", opcaoCorreta: "43,2"});
Question.create({titulo:"Se a energia cinética média das moléculas de um gás aumentar e o volume permanecer constante:",disciplina:"Fisica",opcao1:"A pressão diminuirá e a temperatura aumentará", opcao2: "A pressão permanecerá constante e a temperatura aumentará", opcao3: "A pressão do gás aumentará e a sua temperatura permanecerá constante", opcaoCorreta: "A pressão e a temperatura aumentarão"});
Question.create({titulo:"Do ponto de vista da primeira lei da termodinâmica, o balanço de energia de um dado sistema é dado em termos de três grandezas:",disciplina:"Fisica",opcao1:"Trabalho, calor e densidade", opcao2: "Calor, energia interna e volume", opcao3: "Pressão, volume e temperatura", opcaoCorreta: "Trabalho, calor e energia interna"});
Question.create({titulo:"Qual é a variação de energia interna de um gás ideal sobre a qual é realizado um trabalho de 80J, durante uma compressão adiabática?",disciplina:"Fisica",opcao1:"– 80 J", opcao2: "– 40 J", opcao3: "40 J", opcaoCorreta: "80 J"});
Question.create({titulo:"Aplica-se uma força de 20 N a um corpo de massa m. O corpo desloca-se em linha reta com velocidade que aumenta 10 m/s a cada 2 s. Qual o valor, em kg, da massa m?",disciplina:"Fisica",opcao1:"1", opcao2: "2", opcao3: "3", opcaoCorreta: "4"});
Question.create({titulo:"Uma prensa hidráulica possui pistões com diâmetros 10 cm e 20 cm. Se uma força de 120 N atua sobre o pistão menor, pode-se afirmar que esta prensa estará em equilíbrio quando sobre o pistão maior atuar uma força de",disciplina:"Fisica",opcao1:"60N", opcao2: "120 N", opcao3: "240 N", opcaoCorreta: "480 N"});
Question.create({titulo:"Um carro parte do repouso com aceleração de 5,0 m/s2 e percorre uma distância de 1,0 km. Qual é o valor da velocidade média do carro, em m/s, nesse trecho?",disciplina:"Fisica",opcao1:"20", opcao2: "200", opcao3: "100", opcaoCorreta: "50"});
Question.create({titulo:"Sobre o movimento de queda livre é INCORRETO afirmar que:",disciplina:"Fisica",opcao1:"Graficamente, a variação da velocidade em relação ao tempo é uma reta ascendente", opcao2: "O movimento de queda livre é uniformemente variado", opcao3: "A trajetória de um corpo em queda livre é retilínea, vertical e orientada para baixo", opcaoCorreta: "O corpo em queda livre apresenta aceleração variando a uma taxa constante"});
Question.create({titulo:"Sob a aceleração da gravidade de 10 m/s2, qual a velocidade que uma gota de água cai da torneira a uma altura de 5 m, considerando que partiu do repouso e a resistência do ar é nula?",disciplina:"Fisica",opcao1:"5 m/s", opcao2: "1 m/s", opcao3: "15 m/s", opcaoCorreta: "10 m/s"});
Question.create({titulo:"Quanto tempo, aproximadamente, uma fruta que caiu de uma árvore, localizada a uma altura de 25 m leva para para tocar o chão? Despreze a resistência do ar e considere g = 10 m/s2.", disciplina:"Fisica",opcao1:"5,0 s", opcao2: "4,45 s", opcao3: "3,0 s", opcaoCorreta: "2,24 s"});
Question.create({titulo:"Desprezando a resistência do ar, se um vaso que estava em cima de uma sacada caiu, levando 2 segundos para chegar ao chão, a que altura o objeto estava? Considere g = 10 m/s2.",disciplina:"Fisica",opcao1:"40 m", opcao2: "30 m", opcao3: "10 m", opcaoCorreta: "20 m"});
Question.create({titulo:"Uma bola de boliche foi abandonada de uma sacada, a 80 metros do chão, e adquiriu um movimento de queda livre. A que altura a bola estava após 2 segundos?",disciplina:"Fisica",opcao1:"10 m", opcao2: "20 m", opcao3: "40 m", opcaoCorreta: "60 m"});
Question.create({titulo:"Um corpo em queda livre percorre uma certa distância vertical em 2s; logo, a distância percorrida 6 s será",disciplina:"Fisica",opcao1:"dupla", opcao2: "Seis vezes maior", opcao3: "Doze vezes maior", opcaoCorreta: "Nove vezes maior"});


Matemática

Question.create({titulo:"Mário pretende realizar uma viagem utilizando um veículo cujo consumo médio de combustível é de 10 Km/L. Sabendo que percorrerá 300 000 m, é correto afirmar que o volume de combustível a ser consumido será de:",disciplina:"Matematica",opcao1:"12 litros", opcao2: "15 litros", opcao3: "25 litros", opcaoCorreta: "30 litros"});
Question.create({titulo:"Duas empreiteiras farão conjuntamente a pavimentação de uma estrada, cada uma trabalhando a partir de uma das extremidades. Se uma delas pavimentar 2/5 da estrada e a outra os 81 km restantes, a extensão dessa estrada é de",disciplina:"Matematica",opcao1:"145 km", opcao2: "142 km", opcao3: "125 km", opcaoCorreta: "135 km"});
Question.create({titulo:"O valor de (0,2)³ + (0,16)² é:",disciplina:"Matematica",opcao1:"0,2568", opcao2: "0,1056", opcao3: "0,0264", opcaoCorreta: "0,0336"});
Question.create({titulo:"Por qual número devemos multiplicar o número 0,75 de modo que a raiz quadrada do produto obtido seja igual a 45?",disciplina:"Matematica",opcao1:"3000", opcao2: "2900", opcao3: "2800", opcaoCorreta: "2700"});
Question.create({titulo:"Numa progressão geométrica de quatro termos positivos, a soma dos dois primeiros vale 1 e a soma dos dois últimos vale 9. calcule a razão da progres", disciplina:"Matematica",opcao1:"9", opcao2: "7", opcao3: "5", opcaoCorreta: "3"});
Question.create({titulo:"A parábola de equação y = ax² passa pelo vértice da parábola y = 4x – x². Ache o valor de a:",disciplina:"Matematica",opcao1:"-1", opcao2: "3", opcao3: "2", opcaoCorreta: "1"});
Question.create({titulo:"O ponto P (3, m) é interno a um dos lados do triângulo A (1,2), B (3,1) e C (5,-4). Então:",disciplina:"Matematica",opcao1:"m = 1", opcao2: "m = 1/2", opcao3: "m = 0", opcaoCorreta: "m = -1"});
Question.create({titulo:"Considere um triângulo retângulo tal que o cosseno de um de seus ângulos agudos é igual a 0,8. Sabendo-se que a hipotenusa desse retângulo é igual a 4, o valor da tangente deste mesmo ângulo é:",disciplina:"Matematica",opcao1:"m = 0,5", opcao2: "0,7", opcao3: "1", opcaoCorreta: "0,75"});
Question.create({titulo:"Ao jogar um dado, qual a probabilidade de obtermos um número ímpar voltado para cima?",disciplina:"Matematica",opcao1:"100%", opcao2: "25%", opcao3: "75%", opcaoCorreta: "50%"});
Question.create({titulo:"Se lançarmos dois dados ao mesmo tempo, qual a probabilidade de dois números iguais ficarem voltados para cima?",disciplina:"Matematica",opcao1:"6,66%", opcao2: "66,66%", opcao3: "32,32%", opcaoCorreta: "16,66%"});
Question.create({titulo:"Um saco contém 8 bolas idênticas, mas com cores diferentes: três bolas azuis, quatro vermelhas e uma amarela. Retira-se ao acaso uma bola. Qual a probabilidade da bola retirada ser azul?",disciplina:"Matematica",opcao1:"50%", opcao2: "22,5%", opcao3: "75%", opcaoCorreta: "37,5%"});
Question.create({titulo:"Sorteando-se um número de 1 a 20, qual a probabilidade de que esse número seja múltiplo de 2?",disciplina:"Matematica",opcao1:"100%", opcao2: "25%", opcao3: "75%", opcaoCorreta: "50%"});
Question.create({titulo:"As medidas dos ângulos central, interno e externo de um pentágono regular são, respectivamente:", disciplina:"Matematica",opcao1:"Central = 72º, interno = 252º e externo = 72º", opcao2: "Central = 360º, interno = 108º e externo = 72º", opcao3: "Central = 360º, interno = 72º e externo = 252º", opcaoCorreta: "Central = 72º, interno = 108º e externo = 72º"});
Question.create({titulo:"Um cilindro possui altura de 1 m e volume igual a 27 m³. A área total da superfície deste cilindro é:",disciplina:"Matematica",opcao1:"54 m²", opcao2: "72 m²", opcao3: "64 m²", opcaoCorreta: "18 m²"});
Question.create({titulo:"Dos seguintes trios de medidas a seguir, é possível montar um triângulo apenas com",disciplina:"Matematica",opcao1:"7, 3, 14", opcao2: "19, 3, 6", opcao3: "8, 15, 45", opcaoCorreta: "12, 15, 17"});
Question.create({titulo:"Três números consecutivos somados resultam em 57. Determine quais são os números desta sequência.",disciplina:"Matematica",opcao1:"21, 22 e 23", opcao2: "10, 11 e 12", opcao3: "27, 28 e 29", opcaoCorreta: "18, 19 e 20"});
Question.create({titulo:"A turma de Mariana na escola tem 23 alunos dos quais 11 são meninos. A razão entre o número de meninos e meninas na turma de Mariana é", disciplina:"Matematica",opcao1:"12/23", opcao2: "12/11", opcao3: "11/23", opcaoCorreta: "11/12"});
Question.create({titulo:"Se um veículo possuí autonomia de 12 km com um litro de combustível, com 23 litros, este veículo poderá percorrer, sem parar para abastecer",disciplina:"Matematica",opcao1:"120 km", opcao2: "113 km", opcao3: "156 km", opcaoCorreta: "276 km"});
Question.create({titulo:"Em uma confecção seis costureiras produzem 1200 peças em três dias de trabalho. O número de peças produzidas por oito costureiras em nove dias será de",disciplina:"Matematica",opcao1:"2800 peças", opcao2: "5800 peças", opcao3: "3600 peças", opcaoCorreta: "4800 peças"});
Question.create({titulo:"Em relação aos sólidos geométricos, assinale a afirmativa verdadeira",disciplina:"Matematica",opcao1:"Prismas são figuras com duas bases diferentes", opcao2: "O cone é um poliedro", opcao3: "Pirâmide não é um poliedro", opcaoCorreta: "O cubo é um poliedro com todos os lados iguais"});

*/










module.exports = Question;