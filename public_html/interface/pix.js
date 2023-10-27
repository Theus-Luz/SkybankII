var btnpix = document.querySelector('#pix');
var pixtransf = document.querySelector('.pixtransf');
var botaotransf = document.querySelector('#botaotransf');
var entrenumero = document.querySelector('#entrenumero');
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
    text: 'Matheus,' + ' Guilherme, ' + ' Julio, ' + ' Camila, ' + ' Fagner, ' +  ' Vinicius.',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}


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




// function confereSaldo(){
//   var saldocontaElement = document.getElementById('saldoconta');
//   var entrapix = document.getElementById('entrapix');
  
//   var saldoconta = parseFloat(saldocontaElement.innerText);
//   var valordopix = parseFloat(entrapix.value);

//   if(saldoconta > 0 && valordopix <= saldoconta ){

//     Swal.fire({
//       title: 'Você esta preste a finalizar sua Transferência',
//     text: "Se os dados estiverem corretos, clique em Prosseguir, para Prosseguir com sua Transferência!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       cancelButtonText: 'Cancelar',
//       confirmButtonText: 'Prosseguir'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire(
                    
//           'Obrigado por usar nosso Banco!',
//           'Sua Transferência foi realizada com sucesso!',
//           'success')}})
        
  

  
//   }else {
//     Swal.fire({
//       icon: 'error',
//       title: 'Oops...',
//       text: 'Você não tem saldo para realizar essa Transferência',
//       footer: '<a href="http://127.0.0.1:5503/Faq%20de%20ajuda/faq.html"> Esta com dificuldade para Sacar? Acesse nossa Faq</a>'
//     })
  
//   }}

//   function conferePix(){
//     Swal.fire({
//       title: 'Confirme sua Transferência',
//       text: "Você esta presta a finalizar sua Transferência, Confirme se os dados estão corretos!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Transferir'
//     }).then((result) => {
//       if (result.isConfirmed) {
        
//         Swal.fire(
                    
//           'Obrigado por usar nosso Banco!',
//           'Sua Transferência foi realizada com sucesso!',
//           'success')}})
        
//   }



// botaotransf.addEventListener('click', function(){
//   if(entrapix.value == '' || entraemail.value == ''){
//     if(entraemail.value == '') {errochave.innerHTML = "Entre com uma chave válida!"} else{errochave.innerHTML = ''}
//     if(entrapix.value == '') {entrenumero.innerHTML = "Entre com um valor válido!"}else{entrenumero.innerHTML = ''}

//   } else{
   
//         confereSaldo();

       

//   }

// })




