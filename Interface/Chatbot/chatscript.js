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
function processUserInput() {
    const userText = userInput.value.toLowerCase(); // Converte a entrada do usuário para minúsculas
    addUserMessage(userText);

    // Lógica para responder às opções
    switch (userText) {
        case 'pix':
            addResponseMessage('Para usar o PIX, acesse a página inicial do SkyBank e procure pela área do "Pix". Se sua chave já estiver cadastrada, você poderá transferir seu dinheiro para qualquer pessoa que também tenha uma chave PIX cadastrada.');
            break;

        case 'transferencia':
            addResponseMessage('Acesse a página inicial do SkyBank e procure por "Transferência", lá você poderá transferir a quantia desejada para qualquer outra conta.');
            break;

        case 'deposito':
            addResponseMessage('Acesse a página inicial do SkyBank e procure por "Deposito", lá você terá como depositar a quantia desejada.');
            break;

        case 'sac':
            addResponseMessage('Você selecionou a opção sac. Para mais informações, entre em contato com a nossa central de atendimento: 2525-1212');
            break;

        default:
            addResponseMessage('Para mais informações entre em contato com a nossa central de atendimento: 0800 2525-1212');
            break;
    }

    // Limpar a entrada do usuário
    userInput.value = '';
}

// Event listener para o botão de envio
sendButton.addEventListener('click', function (e) {
    e.preventDefault();
    processUserInput();
});

// Event listener para a tecla Enter
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    // Impedir o comportamento padrão de envio do formulário
    event.preventDefault();
    // Chame a função para enviar o formulário
    enviarFormulario();
    document.getElementById('campoDeTexto').addEventListener('keydown', function(event) {
        // Verifique se a tecla pressionada é a tecla "Enter"
        if (event.key === 'Enter') {
            // Impedir o comportamento padrão de atualização da página
            event.preventDefault();
            // Chame a função para enviar o formulário
            enviarFormulario();
        }
    });

    
    document.getElementById('meuFormulario').addEventListener('submit', function(event) {
        
        event.preventDefault();
        
        enviarFormulario();
    });
});