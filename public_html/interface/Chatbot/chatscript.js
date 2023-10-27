const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const body = document.querySelector('.body');

// Função para adicionar uma mensagem do usuário à interface
function addUserMessage(message) {
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user_message');
    userMessage.textContent = message;
    body.appendChild(userMessage);
}

// Função para adicionar uma mensagem de resposta à interface
function addResponseMessage(message) {
    const responseMessage = document.createElement('div');
    responseMessage.classList.add('message');
    responseMessage.textContent = message;
    body.appendChild(responseMessage);
}

// Função para processar a entrada do usuário e gerar respostas
// Função para processar a entrada do usuário
function processUserInput() {
    const userText = userInput.value.toLowerCase(); // Converte a entrada do usuário para minúsculas
    addUserMessage(userText);

    // Lógica para responder às opções
    switch (userText) {
        case '1':
            addResponseMessage('Para usar o PIX, acesse a página inicial do SkyBank e procure pela área do "Pix". Se sua chave já estiver cadastrada, você poderá transferir seu dinheiro para qualquer pessoa que também tenha uma chave PIX cadastrada.');
            break;
        
        case '2':
                addResponseMessage('Procure no "Menu" por "Minhas chaves Pix", No campo "Cadastrar nova chave" entre com a chave que deseja cadastrar, sendo ela: "E-mail,Telefone,CPF');
                break;

        case '3':
            addResponseMessage('Acesse a página inicial do SkyBank e procure por "Transferência", lá você poderá transferir a quantia desejada para qualquer outra conta.');
            break;

        case '4':
            addResponseMessage('Acesse a página inicial do SkyBank e procure por "Depósito", lá você terá como depositar a quantia desejada.');
            break;

        case '5':
            addResponseMessage('Para realizar um Saque, Acesse a Área de Saque, clique no botão "Bancos 24H Próximos", Se locomova até um caixa da rede 24H, Insira o valor e clique em Sacar" ');
            break;
        case '6':
            addResponseMessage('Temos a nossa Faq de ajuda para informações mais detalhadas, Acessando "Suporte" no menu e clicando em "Faq".');
            break;

        default:
            addResponseMessage('Digite uma das Opções, ou acesse a nossa FAQ de ajuda!');
            break;
    }

    // Limpar a entrada do usuário
    userInput.value = '';
}


sendButton.addEventListener('click', function (e) {
    e.preventDefault();
    processUserInput();
});


document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    processUserInput();
});

