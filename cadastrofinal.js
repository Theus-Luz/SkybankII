(async () => {
    const database = require('./Banco/db');
    const User = require('./Banco/user');
    await database.sync();


    const novoUser = await User.create({

        nome: 'Juliao',
        sobrenome: 'Cesar',
        cpf: 424505345,
        email: 'testebanco2@gmail.com',
        saldo: 90000,
        telefone: 40028922,
        endereco: 'Rua Terceira',
        cidade: 'Sâo Paulo',
        senha: 'testeprojeto2',


    

    })

    
})();



