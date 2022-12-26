const db = require('./db');

const User = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    sobrenome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    contato: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    pontuacao: {
        type: db.Sequelize.INTEGER,
        allowNull: true
    }
});
//User.create({nome:"Breno Gabriel",sobrenome:"da Silva Sacerdote",contato:"breno@email.com",senha:"breno123",pontuacao: 0});

//User.sync({force:true}); //so execute essa linha uma vez

module.exports = User;