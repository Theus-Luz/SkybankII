var btntransf = document.querySelector('#transf');
var areatransf = document.querySelector('.areatransf');
var btnted = document.querySelector('#btnted');
const nometed = document.querySelector('#nometed');
const cpfted = document.querySelector('#cpfted');
const agenciated = document.querySelector('#agenciated');
const contated = document.querySelector('#contated');
const valorted = document.querySelector('#valorted');

const caixaNome = document.querySelector('#caixaNome');
const caixaCpf = document.querySelector('#caixaCpf');
const caixaAgencia = document.querySelector('#caixaAgencia');
const caixaConta = document.querySelector('#caixaConta');
var caixaValor = document.querySelector('#caixaValor');




btntransf.addEventListener('click', function areaTransferir () {
    if (areatransf.style.display === 'none') {
        areatransf.style.display = 'block';

        pixtransf.style.display = 'none';
        deposit.style.display = 'none';
        areapag.style.display = 'none';
        suporte.style.display = 'none';
        movimentos.style.display = 'none';
        btnssaq.style.display = 'none';

    } else {
        areatransf.style.display = 'block';
        pixtransf.style.display = 'none';
        deposit.style.display = 'none';
        areapag.style.display = 'none';
        suporte.style.display = 'none';
        movimentos.style.display = 'none';
        btnssaq.style.display = 'none';
    }

});

addEventListener('input', function() {
  // Remove todos os caracteres numéricos do nome
  const valor = caixaNome.value;
  const nomeApenasLetras = valor.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
    caixaNome.value = nomeApenasLetras;
  

  // Remove todos os caracteres não numéricos
  const cpf = caixaCpf.value.replace(/\D/g, '');
  const agencia = caixaAgencia.value.replace(/\D/g, '');
  const conta = caixaConta.value.replace(/\D/g, '');
 
  
if(cpf.length > 11) {caixaCpf.value = cpf.substring(0,11);} // Limita o CPF a 11 dígitos
if (agencia.length > 4) {caixaAgencia.value = agencia.substring(0, 4);}// Limita a Agencia em 4 digitos
if (conta.length > 4) {caixaConta.value = conta.substring(0, 4);}// Limita a Conta em 4 digitos
});


btnted.addEventListener('click', function(){

  var saldocontaElement = document.getElementById('saldoconta');
  var saldoconta = parseFloat(saldocontaElement.innerText);
  valordatransferencia = caixaValor.value;

  if(caixaNome.value == '') {nometed.innerHTML = "Entre com um Nome!"}
  if(caixaCpf.value == '') {cpfted.innerHTML = "Entre com um CPF!"}
  if(caixaAgencia.value == ''){agenciated.innerHTML = "Entre com uma agencia"}
  if(caixaConta.value == ''){contated.innerHTML = "Entre com uma Conta"}
  if(caixaValor.value == ''){valorted.innerHTML = "Entre com um Valor!"}
  
  
  
   if(caixaNome.value != '' && caixaCpf.value != '' && caixaAgencia != '' && caixaConta != '' && caixaValor != ''){
    
    nometed.innerHTML = '',
   cpfted.innerHTML = '',
   agenciated.innerHTML = '',
   contated.innerHTML = '',
   valorted.innerHTML = '',
  
  
  
  (saldoconta)
  
  
    if(saldoconta > 0 && valordatransferencia <= saldoconta) {

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

      saldoconta -= parseFloat(valordatransferencia);
      saldocontaElement.innerText = saldoconta.toFixed(2);

      Swal.fire(
       

        'Obrigado por Usar nosso Banco!',
        'Sua Transferência foi realizada com sucesso!',
        'success' )}})

    
      } else {
          Swal.fire({
            icon: 'error',
           title: 'Oops...',
            text: 'Você não tem saldo para realizar a transferência!',
            footer: '<a href="http://127.0.0.1:5503/Faq%20de%20ajuda/faq.html"> Esta com dificuldade para Sacar? Acesse nossa Faq</a>'
          })}

    
        }});

  


  


  

// entrapix.value > 1 && entrachave.value > 1







// btnted.addEventListener('click', function btnTransferir(){
//     Swal.fire({
//         title: 'Confirme sua Transferência',
//         text: "Você esta presta a finalizar sua Transferência, Confirme se os dados estão corretos!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Transferir'
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire(
//             'Obrigado por Usar nosso Banco!',
//             'Sua Transferência foi realizada com sucesso!',
//             'success'
//           )
//         }
//       })
// })
