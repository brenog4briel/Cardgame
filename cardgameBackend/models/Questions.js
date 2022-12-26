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

//História 

/*
Question.create({titulo:"O que eram as entradas?",disciplina:"Historia",opcao1:"Expedições bancadas pelos mineradores", opcao2: "Expedições da Corte Portuguesa", opcao3: "Expedições bancadas pelos índios", opcaoCorreta: "Expedições bancadas pela Coroa Portuguesa"});
Question.create({titulo:"O que eram as bandeiras?",disciplina:"Historia",opcao1:"Expedições que saiam para encontrar cidades europeias", opcao2: "Expedições bancadas pelos espanhóis", opcao3: "Expedições da Família Real", opcaoCorreta: "Expedições particulares que saiam do sudeste para encontrar ouro e escravos em Minas Gerais"});
Question.create({titulo:"O que o quinto(1/5 ou 20%) defendia?",disciplina:"Historia",opcao1:"Todos deveriam dar o que tinha de valor a Coroa", opcao2: "Que a quantidade de escravos que se tinha era 30 arrobas mensais para a Coroa", opcao3: "que se você não pagasse até o final do ano 100 arrobas, você perderia suas propriedades até quitar sua divida", opcaoCorreta: "Que 20% da produção deveria ir para a Coroa"});
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
*/


//Question.sync({force:true}); //so execute essa linha uma vez

module.exports = Question;