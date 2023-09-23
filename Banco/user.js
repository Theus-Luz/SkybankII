const Sequelize = require('sequelize');
const database = require('./db');

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    }, cpf: {
        type: Sequelize.INTEGER,
        allowNull: false
    },email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    saldo: {
        type: Sequelize.INTEGER,       
},telefone: {
    type: Sequelize.INTEGER,       
},endereco: {
    type: Sequelize.STRING,
    allowNull: false
},
cidade: {
    type: Sequelize.STRING,
    allowNull: false
},
senha: {
    type: Sequelize.STRING,
    allowNull: false
},


})
module.exports = User;