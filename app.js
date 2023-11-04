const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;
const cors = require('cors'); // Importe o pacote 'cors' aqui


app.use(cors()); // Habilite o CORS para permitir solicitações de diferentes origens
// Middleware para analisar o corpo das solicitações como JSON
app.use(express.json());

// Configuração para servir arquivos estáticos
app.use(express.static('public_html'));
app.use(express.static('public'));

app.get('/cadastro', (req, res) => {
  res.sendFile(__dirname + '/public_html/cadastro/cadastro.html');
});


// Rota para a página de login
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public_html/login/login.html');
});

//funçao login

app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const jwt = require('jsonwebtoken');
  // Simule uma lógica de verificação de credenciais (substitua isso por sua própria lógica)
  if (email === 'email' && senha === 'senha') {
    // Gere um token de autenticação (exemplo com JWT)
    const token = 'seu_token_jwt';

    // Envie o token como resposta
    res.json({ token });
  } else {
    // Se as credenciais não forem válidas, envie uma resposta de não autorizado
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});



// Fim









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
        chavepix VARCHAR(45)
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
  const chavePixDestino = req.body.chavePixDestino;
  const valorTransferencia = req.body.valorTransferencia;
  const emailOrigem = req.body.emailOrigem;

  try {
    const connection = await mysql.createConnection(dbConfig);

    // Verifique se a chave PIX de destino existe no banco de dados
    const [destinoRows] = await connection.execute('SELECT saldo FROM usuarios WHERE chavePix = ?', [chavePixDestino]);

    if (destinoRows.length === 1) {
      // A chave PIX de destino existe, prossiga com a transferência
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
          await connection.execute('UPDATE usuarios SET saldo = ? WHERE chavePix = ?', [novoSaldoDestino, chavePixDestino]);

          await connection.end();

          console.log('Transferência realizada com sucesso!');

          // Envie o novo saldo de volta para o cliente
          res.status(201).json({ saldo: novoSaldoOrigem });
        } else {
          res.status(400).json({ error: 'Saldo insuficiente para a transferência.' });
        }
      } else {
        res.status(404).json({ error: 'Chave PIX de origem não encontrada.' });
      }
    } else {
      // A chave PIX de destino não existe, retorne um erro
      res.status(400).json({ error: 'Chave PIX de destino não cadastrada.' });
    }
  } catch (error) {
    console.error('Erro ao realizar a transferência:', error);
    res.status(500).json({ error: 'Erro ao realizar a transferência.' });
  }
});

// Rota para verificar se a chave PIX de destino existe
app.post('/verificar-chavepix', async (req, res) => {
  const chavePixDestino = req.body.chavePixDestino;

  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute('SELECT COUNT(*) as count FROM usuarios WHERE chavePix = ?', [chavePixDestino]);

    await connection.end();

    if (rows[0].count > 0) {
      // A chave PIX de destino existe, responda com status HTTP 200
      res.status(200).send('Chave PIX de destino encontrada.');
    } else {
      // A chave PIX de destino não existe, responda com status HTTP 404
      res.status(404).send('Chave PIX de destino não encontrada.');
    }
  } catch (error) {
    console.error('Erro ao verificar a chave PIX de destino:', error);
    res.status(500).send('Erro ao verificar a chave PIX de destino.');
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

// Rota para cadastrar uma nova chave PIX para um usuário
app.post('/cadastrar-chavepix', async (req, res) => {
  const emailUsuario = 'Kylers@skybank'; // Substitua pelo e-mail do usuário
  const chavePix = req.body.chavePix;

  // Verifique se a chavePix não é nula ou vazia
  if (!chavePix) {
    return res.status(400).json({ error: 'Chave PIX inválida' });
  }

  // Conecte-se ao banco de dados e insira a chavePix na tabela de usuários
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute('UPDATE usuarios SET chavepix = ? WHERE email = ?', [chavePix, emailUsuario]);
    await connection.end();
    res.status(201).json({ message: 'Chave PIX cadastrada com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar a nova chave PIX:', error);
    res.status(500).json({ error: 'Erro ao cadastrar a nova chave PIX' });
  }
});

app.post('/verificar-chavepix-existente', async (req, res) => {
  const chavePix = req.body.chavePix;
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute('SELECT COUNT(*) AS count FROM usuarios WHERE chavepix = ?', [chavePix]);
    await connection.end();
    
    if (result[0].count > 0) {
      res.status(200).json({ exists: true });
    } else {
      res.status(200).json({ exists: false });
    }
  } catch (error) {
    console.error('Erro ao verificar a chave PIX existente:', error);
    res.status(500).json({ error: 'Erro ao verificar a chave PIX existente' });
  }
});






