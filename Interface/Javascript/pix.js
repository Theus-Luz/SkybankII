var btnpix = document.querySelector('#pix');
var pixtransf = document.querySelector('.pixtransf');
var botaotransf = document.querySelector('#botaotransf');
var entrenumero = document.querySelector('#entrenumero');
// var entrapix = document.querySelector('#entrapix');
var entrachave = document.querySelector('#entrachave');
var errochave = document.querySelector('#errochave');
var saldocontaElement;
var saldoconta;
var chaveemail = document.querySelector('#chaveemail');
var chavecel = document.querySelector('#chavecel');
var chavecpf = document.querySelector('#chavecpf');
var chavecnpj = document.querySelector('#chavecnpj');


var valorSelecionado = selecao.value;



var easteregg = document.getElementById('easteregg');
easteregg.addEventListener('click', easterEggg);

function easterEggg(){
  Swal.fire({
    title: 'Desenvolvedores:',
    text: 'Matheus,' + ' Guilherme, ' + ' Julio, ' + ' Camila, ' + ' Fagner, ' + ' Mayara, ' + ' Vinicius.',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}



// // Obtém o elemento de entrada
// var entrapix = document.getElementById('entrapix');
        
// // Adiciona um ouvinte de evento para detectar a entrada do usuário
// entrapix.addEventListener('input', function() {
//     // Obtém o valor do campo de entrada
//     var valor1 = entrapix.value;

//     // Formata o valor para adicionar a vírgula e "00" na parte decimal
//     var valorFormatado = formatarValor(valor1);

//     // Define o valor formatado de volta no campo de entrada
//     entrapix.value = valorFormatado;
// });

// // Função para formatar o valor com vírgula e "00" na parte decimal
// function formatarValor(valor1) {
//     // Remove qualquer caractere não numérico
//     valor1 = valor1.replace(/[^\d,]/g, '');

//     // Divide o valor em parte inteira e parte decimal
//     var partes = valor1.split(',');

//     // Formata a parte inteira
//     var parteInteira = partes[0] || '0';
//     parteInteira = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

//     // Formata a parte decimal
//     var parteDecimal = partes[1] || '00';
//     parteDecimal = parteDecimal.substr(0, 2);

//     // Retorna o valor formatado com vírgula e "00" na parte decimal
//     return parteInteira + ',' + parteDecimal;
// }





onload = function carregarSaldo(){
  
  var saldocontaElement = document.getElementById('saldoconta');
  var saldoconta = parseFloat(saldocontaElement.innerText);
  saldocontaElement.innerText = saldoconta.toFixed(2);
}



function mostrarCaixaTexto(){
  var selecao = document.getElementById("selecao");
  var valorSelecionado = selecao.value;
  var caixaTexto = document.getElementById("caixaTexto");
}


btnpix.addEventListener('click', function areaPix () {
    if (pixtransf.style.display === 'none') {
        pixtransf.style.display = 'block';
        deposit.style.display = 'none';
        areatransf.style.display = 'none';
        areapag.style.display = 'none';
        suporte.style.display = 'none';
        movimentos.style.display = 'none';
        btnssaq.style.display = 'none';

    } else {
        pixtransf.style.display = 'block';
        deposit.style.display = 'none';
        areatransf.style.display = 'none';
        areapag.style.display = 'none';
        suporte.style.display = 'none';
        movimentos.style.display = 'none';
        btnssaq.style.display = 'none';
    }
});






// chavecel.addEventListener('click', function(){
//   if (chavecel.style.display === 'none'){
//     chaveemail.style.display = 'block';

//   }})










function confereSaldo(){
  var saldocontaElement = document.getElementById('saldoconta');
  var entrapix = document.getElementById('entrapix');
  
  var saldoconta = parseFloat(saldocontaElement.innerText);
  var valordopix = parseFloat(entrapix.value);

  if(saldoconta > 0 && valordopix <= saldoconta ){

    Swal.fire({
      title: 'Você esta preste a finalizar sua Transferência',
    text: "Se os dados estiverem corretos, clique em Prosseguir, para Prosseguir com sua Transferência!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Prosseguir'
    }).then((result) => {
      if (result.isConfirmed) {
        saldoconta -= parseFloat(valordopix);
        saldocontaElement.innerText = saldoconta.toFixed(2);
        Swal.fire(
                    
          'Obrigado por usar nosso Banco!',
          'Sua Transferência foi realizada com sucesso!',
          'success')}})
        
  

  
  }else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você não tem saldo para realizar essa Transferência',
      footer: '<a href="http://127.0.0.1:5503/Faq%20de%20ajuda/faq.html"> Esta com dificuldade para Sacar? Acesse nossa Faq</a>'
    })
  
  }}

  function conferePix(){
    Swal.fire({
      title: 'Confirme sua Transferência',
      text: "Você esta presta a finalizar sua Transferência, Confirme se os dados estão corretos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Transferir'
    }).then((result) => {
      if (result.isConfirmed) {
        
        Swal.fire(
                    
          'Obrigado por usar nosso Banco!',
          'Sua Transferência foi realizada com sucesso!',
          'success')}})
        
  }



botaotransf.addEventListener('click', function(){
  if(entrapix.value == '' || entraemail.value == ''){
    if(entraemail.value == '') {errochave.innerHTML = "Entre com uma chave válida!"} else{errochave.innerHTML = ''}
    if(entrapix.value == '') {entrenumero.innerHTML = "Entre com um valor válido!"}else{entrenumero.innerHTML = ''}

  } else{
   
        confereSaldo();

       

  }

})



// saqueTransf.addEventListener('click', function(){
  
// if () {

//   Swal.fire({
//     title: 'Atenção',
//   text: 'Bancos 24h próximos a você',
//   imageUrl: 'https://cartaodecreditocontacorrente.net/wp-content/uploads/2022/03/BANCO24Horas.png',
//   imageAlt: 'A tall image'})

//   saldoconta -= parseFloat(saqueValor.value);
//   saldocontaElement.innerText = saldoconta.toFixed(2);

  
  
// } else {
//   Swal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: 'Você não tem saldo para realizar esse Saque!',
//     footer: '<a href="http://127.0.0.1:5503/Faq%20de%20ajuda/faq.html"> Esta com dificuldade para Sacar? Acesse nossa Faq</a>'
//   })

// }});






// botaotransf.addEventListener('click', function(){
//      if(entrachave.value == ''){ errochave.innerHTML = "Entre com um chave.";
// }else{
//   Swal.fire(
//        'Obrigado por Usar nosso Banco',
//         'Seu pix foi encaminhado com Sucesso!',
//        'success'
//       )}
//  });







 //Anotações:
 // chaveemail.addEventListener('option', function areachaveemail () {
//   entraemail.style.display = 'block'; });

// }if(entrachave.value == ''){errochave.innerHTML = "Entre com um Chave Válida!";

// }if(entrapix.value == '' && entrachave.value == true ){ entrenumero.innerHTML = "Entre com um Valor Válido!";


// }if(entrapix.value == true && entrachave.value == '' ){ errochave.innerHTML = "Entre com um Chave Válida!";


//entrapix
//botaotransf


// // Função para aumentar o saldo
// document.getElementById('aumentar').addEventListener('click', function() {
//   // Obtem o elemento de saldo
//   var saldocontaElement = document.getElementById('saldoconta');
  
//   // Obtém o valor atual do saldo
//   var saldoconta = parseFloat(saldocontaElement.innerText);

//   // Aumenta o saldo em 1 (você pode definir outro valor se quiser)
//   saldoconta += 1;

//   // Atualiza o elemento de saldo na página
//   saldocontaElement.innerText = saldoconta;
// });

// Função para diminuir o saldo
// document.getElementById('botaotransf').addEventListener('click', function() {
//   var saldocontaElement = document.getElementById('saldoconta');
//   var saldoconta = parseFloat(saldocontaElement.innerText);
//   saldoconta -= entrapix.value;
//   // Atualiza o elemento de saldo na página
//   saldocontaElement.innerText = saldoconta;
// });


 //&& entrachave.value != ''





 // botaotransf.addEventListener('click', function(){
//   Swal.fire(
//          'Obrigado por Usar nosso Banco',
//          'Seu pix foi encaminhado com Sucesso!',
//          'success'
//        )}  
// );

// document.getElementById('swal2-confirm swal2-styled swal2-default-outline').addEventListener('click', function() {
//   var saldocontaElement = document.getElementById('saldoconta');
//   var saldoconta = parseFloat(saldocontaElement.innerText);
//   saldoconta -= entrapix.value;
//   // Atualiza o elemento de saldo na página
//   saldocontaElement.innerText = saldoconta;
// });



// entrapix.value == true && entrachave.value == true


// function valorTransferido ()
// {if(btnsucesso.value === NaN){ entrenumero.innerHTML = "Entre com um Valor Válido!";

// }else{
//     Swal.fire(
//         'Obrigado por Usar nosso Banco',
//         'Seu pix foi encaminhado com Sucesso!',
//         'success'
//       )}

// }

