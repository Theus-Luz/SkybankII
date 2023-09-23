const express = require('express');
const app = express();



// Especificar local do CSS e imagem
app.use(express.static(__dirname + '/Cadastro/stylecadastro.css'));

// API rotas
app.get("/", function (req, res) {
  res.send('Pagina Inicial Banco de dados Skybank');
})

app.get("/contato", function (req, res)  {
  res.sendFile(__dirname + '/Cadastro/cadastro.html');
})

app.listen(3000, function(){
  console.log("Servidor iniciado na porta 3000")
});
