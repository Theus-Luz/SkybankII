const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;
const cors = require('cors'); // Importe o pacote 'cors' aqui

app.use(cors()); // Habilite o CORS para permitir solicitações de diferentes origens

// Configuração para servir arquivos estáticos
app.use(express.static('public_html'));
app.use(express.static('public'));

app.get('/cadastro', (req, res) => {
  res.sendFile(__dirname + '/public_html/cadastro/cadastro.html');
});

// Rota para a página inicial (interface.html)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public_html/interface/interface.html');
});

// Middleware para lidar com solicitações JSON
app.use(express.json());

// Configuração do banco de dados
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'skybankv2',
};

// Função para criar a tabela de usuários com 'idcadastro' como autoincremento
async function criarTabelaUsuarios() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS usuarios (
        idcadastro INT AUTO_INCREMENT PRIMARY KEY,
        saldo INT,
        nome VARCHAR(45),
        nomesocial VARCHAR(45),
        email VARCHAR(45),
        cpf VARCHAR(45),
        senha VARCHAR(45),
        chavedeemail VARCHAR(45),
        chavedecel VARCHAR(45),
        chavedecpf VARCHAR(45),
        chavedecnpj VARCHAR(45)
      )
    `);
    await connection.end();
    console.log('Tabela de usuários criada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar a tabela de usuários:', error);
  }
}
// Rota para inserir um novo usuário
app.post('/inserir-usuario', async (req, res) => {
  const { nome,nomesocial, email, cpf, senha } = req.body;
  
  console.log('Dados recebidos:', nome,nomesocial, email, cpf, senha);

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows, fields] = await connection.execute(
      'INSERT INTO usuarios (nome,nomesocial, email, cpf, senha) VALUES (?, ?, ?, ?, ?)',
      [nome,nomesocial, email, cpf, senha]
    );
    
    await connection.end();
    console.log('Novo usuário inserido com sucesso!');
    res.status(201).send('Usuário inserido com sucesso');
  } catch (error) {
    console.error('Erro ao inserir usuário:', error);
    res.status(500).send('Erro ao inserir usuário');
  }
});

// Rota para buscar o saldo do usuário (por email)
app.get('/buscar-saldo', async (req, res) => {
  const emailUsuario = 'Kylers@skybank'; // Substitua pelo email do usuário logado

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(
      'SELECT saldo FROM usuarios WHERE email = ?',
      [emailUsuario]
    );

    await connection.end();

    if (rows.length === 1) {
      const saldo = rows[0].saldo;
      res.json({ saldo });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar saldo:', error);
    res.status(500).json({ error: 'Erro ao buscar saldo' });
  }
});


// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  criarTabelaUsuarios();
});



//Verificar se E-mail existe no banco de dados
// Rota para realizar a transferência
app.post('/realizar-transferencia', async (req, res) => {
  const emailDestino = req.body.emailDestino;
  const valorTransferencia = req.body.valorTransferencia;
  const emailOrigem = req.body.emailOrigem;

  try {
    const connection = await mysql.createConnection(dbConfig);

    // Verifique se o e-mail de destino existe no banco de dados
    const [destinoRows] = await connection.execute('SELECT saldo FROM usuarios WHERE email = ?', [emailDestino]);

    if (destinoRows.length === 1) {
      // O e-mail de destino existe, prossiga com a transferência
      const [origemRows] = await connection.execute('SELECT saldo FROM usuarios WHERE email = ?', [emailOrigem]);

      if (origemRows.length === 1) {
        const saldoOrigem = origemRows[0].saldo;

        if (saldoOrigem >= valorTransferencia) {
          const novoSaldoOrigem = saldoOrigem - valorTransferencia;

          // Atualize o saldo no banco de dados para o usuário de origem
          await connection.execute('UPDATE usuarios SET saldo = ? WHERE email = ?', [novoSaldoOrigem, emailOrigem]);

          const saldoDestino = destinoRows[0].saldo;
          const novoSaldoDestino = saldoDestino + valorTransferencia;

          // Atualize o saldo no banco de dados para o usuário de destino
          await connection.execute('UPDATE usuarios SET saldo = ? WHERE email = ?', [novoSaldoDestino, emailDestino]);

          await connection.end();

          console.log('Transferência realizada com sucesso!');

          // Envie o novo saldo de volta para o cliente
          res.status(201).json({ saldo: novoSaldoOrigem });
        } else {
          res.status(400).json({ error: 'Saldo insuficiente para a transferência.' });
        }
      } else {
        res.status(404).json({ error: 'Usuário de origem não encontrado.' });
      }
    } else {
      // O e-mail de destino não existe, retorne um erro
      res.status(400).json({ error: 'E-mail de destino não cadastrado.' });
    }
  } catch (error) {
    console.error('Erro ao realizar a transferência:', error);
    res.status(500).json({ error: 'Erro ao realizar a transferência.' });
  }
});
// Rota para verificar se o e-mail de destino existe
app.post('/verificar-email', async (req, res) => {
  const emailDestino = req.body.emailDestino;

  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute('SELECT COUNT(*) as count FROM usuarios WHERE email = ?', [emailDestino]);

    await connection.end();

    if (rows[0].count > 0) {
      // O e-mail de destino existe, responda com status HTTP 200
      res.status(200).send('E-mail de destino encontrado.');
    } else {
      // O e-mail de destino não existe, responda com status HTTP 404
      res.status(404).send('E-mail de destino não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao verificar o e-mail de destino:', error);
    res.status(500).send('Erro ao verificar o e-mail de destino.');
  }
});


app.get('/buscar-nomesocial/:email', async (req, res) => {
  const email = req.params.email;

  try {
    const connection = await mysql.createConnection(dbConfig); // Certifique-se de que 'dbConfig' está definido corretamente

    const [results] = await connection.execute('SELECT nomesocial FROM usuarios WHERE email = ?', [email]);

    if (results.length > 0) {
      const nomesocial = results[0].nomesocial;
      res.json({ nomesocial });
    } else {
      res.status(404).json({ error: 'E-mail não encontrado' });
    }

    connection.end();
  } catch (error) {
    console.error('Erro ao buscar nome social:', error);
    res.status(500).json({ error: 'Erro ao buscar nome social' });
  }
});

