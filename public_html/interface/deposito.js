// const numeroAleatorio = Math.floor(Math.random() * 333333333333333330);

var btndep = document.querySelector('#dep');
var deposit = document.querySelector('.deposit');
var btnboleto = document.querySelector('#boletogerado');
var errodep = document.querySelector('#errodep');

btndep.addEventListener('click', function areaDep () {
  if (deposit.style.display === 'none') {
      deposit.style.display = 'block';
      pixtransf.style.display = 'none';
      areatransf.style.display = 'none';
      areapag.style.display = 'none';
      suporte.style.display = 'none';
      movimentos.style.display = 'none';
      perfil.style.display = 'none';
      btnssaq.style.display = 'none';
      perfiluser.style.display = 'none'
      

  } else {
      deposit.style.display = 'block';
      btnssaq.style.display = 'none'
      pixtransf.style.display = 'none';
      areatransf.style.display = 'none';
      areapag.style.display = 'none';
      suporte.style.display = 'none';
      movimentos.style.display = 'none';
      perfil.style.display = 'none';
      
      perfiluser.style.display = 'none'
  }
});

btn50.addEventListener('click', bol50);

function bol50(){
  Swal.fire({
    title: 'Boleto Gerado!',
    text: 'Basta ir a qualquer lotérica e efetuar o pagamento.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ADCreHdjOcQKr0kcyNyn8FU3NuZIAVfLSndpOOLiE-YMP1JP8M4aHDqtwA2Uj_LmPzrkFYtD8vbHqEmiRhNEqDNjociFPDSn6MLhAGuWDuk17dEiqdawEllnCXL_QAB7B61f_yWBrak1s1TkfmUeEvqyswkzcg=w903-h915-s-no?authuser=0',
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: 'Custom image',
  })
}
function bol100(){
  Swal.fire({
    title: 'Boleto Gerado!',
    text: 'Basta ir a qualquer lotérica e efetuar o pagamento.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ADCreHdGjoSYW8TGyD02fokyY8NY71Gqn5zAYnk1h9cSWCtJyS15kYNoLill1cum7qqZLIs7YGlKOGoJKOcw-jo5NbnXRq2TJedkkBMKdp8s0VkVB3Qw13yyBJVOwO-RX4mKIBt9LdlnoFpNSuFslcwcOtb3VA=w887-h915-s-no?authuser=0',
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: 'Custom image',
  })
}
function bol200(){
  Swal.fire({
    title: 'Boleto Gerado!',
    text: 'Basta ir a qualquer lotérica e efetuar o pagamento.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ADCreHdYbCjL2r0KTsAbtyndVS6UZPWVU2EuN9chwRE7Rt1nteHzE8nU1s11nFPAvwLvppLq3rm2-DyyamOI-O2ggkKoHpe9yJZVnp-hl06UJYZY2SZrY0S-DutSPu1wJ4pRZlc6WXVjntg39fM-AZQ6tFkM0Q=w866-h915-s-no?authuser=0',
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: 'Custom image',
  })
}
function bol300(){
  Swal.fire({
    title: 'Boleto Gerado!',
    text: 'Basta ir a qualquer lotérica e efetuar o pagamento.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ADCreHdffdI8q_n1-lMZXJbBaP0m5Y6cMTxHAQ8JqjWVjMAyw1yRorpolzPo3o8Nnl6Sef5bHdCekXfnhz-MtkWkzTQLz1cbjglW-YEXXqFTBEdY5qaJzvyNfFLIszb7a4NJV1VvSvXsHonm8RPgjUy221os0Q=w845-h915-s-no?authuser=0',
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: 'Custom image',
  })
}
function bol500(){
  Swal.fire({
    title: 'Boleto Gerado!',
    text: 'Basta ir a qualquer lotérica e efetuar o pagamento.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ADCreHeF-X6lXDVXlJDop2do1v8Q33oCTCztHq7Y6U0krjbEtyRn0JiITZBT1xeKMhmA71dY45_keR-mkMhm-uBQ5IcShbE1HUMIgkhkMgT_kwNfJpXL4fIMpsCWWZrmPvTK967jyx41JvCvqqGJq4YN6i-w6g=w884-h915-s-no?authuser=0',
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: 'Custom image',
  })
}
function bol1000(){
  Swal.fire({
    title: 'Boleto Gerado!',
    text: 'Basta ir a qualquer lotérica e efetuar o pagamento.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/ADCreHcS-kauO3fx7brMUBbw6JFdn9Tc8ZYULfzokkV4zISahhRLNFHki5pFlmKrqtmX532jP0aiN0LqkjY8u1CYj8CVfwyFy72zxaBc7efEOYJTAzFQz6NY3adXdHxLoB4qLfTQR-tVhnUOwZoRloRY9uJmpA=w878-h915-s-no?authuser=0',
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: 'Custom image',
  })
}










// CHAT BOX DO SKYBANK (MODAL)

const floatButtonc = document.querySelector('.float-buttonc');
const modalchat = document.querySelector('.modalchat');
const closeButtonc = document.querySelector('.close-buttonc');

floatButtonc.addEventListener('click', () => {
    modalchat.style.display = 'block';
});

closeButtonc.addEventListener('click', () => {
    modalchat.style.display = 'none';
});




// CHATBOX DO SKYBANK (CODIGO)

const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const bodychat = document.querySelector('.bodychat');

// Função para adicionar uma mensagem do usuário à interface
function addUserMessage(message) {
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user_message');
    userMessage.textContent = message;
    bodychat.appendChild(userMessage);
}

// Função para adicionar uma mensagem de resposta à interface
function addResponseMessage(message) {
    const responseMessage = document.createElement('div');
    responseMessage.classList.add('message');
    responseMessage.textContent = message;
    bodychat.appendChild(responseMessage);
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















// btnboleto.addEventListener('click', boletoPronto);

// function abrirModal() {
//   document.getElementById("myModal").style.display = "block";
// }

// function fecharModal() {
//   document.getElementById("myModal").style.display = "none";
// }


// FUNCÃO QUE VERIFICA SE O NUMERO DIGITADO NO CAMPO É O CORRETO

//  btnboleto.addEventListener('click', boletoPronto);

//  function boletoPronto () {
//    if(dep1.value != 100){
//    errodep.innerHTML = "Entre com um Valor Válido!"; 
//  }else{
//    Swal.fire({
//     title: 'Obrigado por usar o SKYBANK',
//    text: 'Seu boleto foi gerado com sucesso, vá até uma lotérica e realize o pagamento.',
//    imageUrl: 'https://lh3.googleusercontent.com/pw/AIL4fc-D_UqBaBz2nrJSaO9uHsJzrys3oVZe1tZU0PPqgusqLRTuwnxvENXlPK_xquK_gcXEUC7W2_xzlc-1zb1ZlBTKRZxdRbGkOGJ81Y_SP0IVggaieMNX_zVxbN98qyr4lbJQqHwptWFGT4-eUsXK6CVOTQ=w715-h613-s-no?authuser=0',  imageAlt: 'A tall image'})
//       // salvaboleto.innerHTML = "Atenção ao número do seu Boleto: "+ numeroAleatorio;
//      }
//  }

















//  btndeposita.addEventListener('click', function(){
//    if (depvalor.value == ''){ errosdep.innerHTML = "Entre com um Valor Válido!";
//  }else{
  
//  }});