const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;

app.use(express.static('public'));
// Middleware para lidar com solicitações JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Cadastro/cadastro.html');
});

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
        saldo DECIMAL(10, 2) DEFAULT 0.00,
        nome VARCHAR(45),
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
  const { nome, email, cpf, senha } = req.body;

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows, fields] = await connection.execute(
      'INSERT INTO usuarios (nome, email, cpf, senha) VALUES (?, ?, ?, ?)',
      [nome, email, cpf, senha]
    );
    
    await connection.end();
    console.log('Novo usuário inserido com sucesso!');
    res.status(201).send('Usuário inserido com sucesso');
  } catch (error) {
    console.error('Erro ao inserir usuário:', error); // Mostrar o erro no console
    res.status(500).send('Erro ao inserir usuário');
  }
});

// Chame a função para criar a tabela quando o servidor for iniciado
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  criarTabelaUsuarios();
});

app.post('/cadastrar-usuario', async (req, res) => {
  const { nome, email, cpf, senha } = req.body;
  console.log('Dados recebidos:', { nome, email, cpf, senha });

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows, fields] = await connection.execute(
      'INSERT INTO usuarios (nome, email, cpf, senha) VALUES (?, ?, ?, ?)',
      [nome, email, cpf, senha]
    )
  
    await connection.end();
    console.log('Novo usuário cadastrado com sucesso!');
    res.status(201).send('Usuário cadastrado com sucesso');
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).send('Erro ao cadastrar usuário');
  }
});