var btnsacar = document.querySelector('#saq');
var saqueValor = document.querySelector('#saqueInput');
var saqueTransf = document.querySelector('#saqueButton');
var valorSaque = saqueInput.value;



btnsacar.addEventListener('click', function botaoSacar() {
  if (btnssaq.style.display === 'none') {
      btnssaq.style.display = 'block';

      areatransf.style.display = 'none';
      pixtransf.style.display = 'none';
      deposit.style.display = 'none';
      suporte.style.display = 'none';
      movimentos.style.display = 'none';
  
      areapag.style.display = 'none';
  } else {
      btnssaq.style.display = 'block';
      areatransf.style.display = 'none';
      pixtransf.style.display = 'none';
      deposit.style.display = 'none';
      suporte.style.display = 'none';
      movimentos.style.display = 'none';

      areapag.style.display = 'none';
  }
});





// saqueTransf.addEventListener('click', function(){
  
//  if(saldoconta >= -1){
//   alert("Digite um valor válido!")
//  }   }  );  



saqueTransf.addEventListener('click', function(){
  var saldocontaElement = document.getElementById('saldoconta');
  var saqueInput = document.getElementById('saqueInput');
  
  var saldoconta = parseFloat(saldocontaElement.innerText);
  var valorSaque = parseFloat(saqueInput.value);

if (saldoconta > 0 && valorSaque <= saldoconta) {

  Swal.fire({
    title: 'Atenção',
  text: 'Bancos 24h próximos a você',
  imageUrl: 'https://cartaodecreditocontacorrente.net/wp-content/uploads/2022/03/BANCO24Horas.png',
  imageAlt: 'A tall image'})

  saldoconta -= parseFloat(saqueValor.value);
  saldocontaElement.innerText = saldoconta.toFixed(2);

  
  
} else {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Você não tem saldo para realizar esse Saque!',
    footer: '<a href="http://127.0.0.1:5503/Faq%20de%20ajuda/faq.html"> Esta com dificuldade para Sacar? Acesse nossa Faq</a>'
  })

}});


// var saldocontaElement = document.getElementById('saldoconta');
// var saldoconta = parseFloat(saldocontaElement.innerText);

































// btnsacar.addEventListener('click', function(){
//      Swal.fire({
//        title: 'Atenção',
//        text: "Será cobrado uma Taxa de R$4,90 por Saque, Mais informações em ''Ajuda'' ",
//        icon: 'warning',
//       showCancelButton: true,
//      confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       cancelButtonText: 'Cancelar',
//        confirmButtonText: 'Continuar'
//     }).then((result) => {
//        if (result.isConfirmed) {
//          Swal.fire({
//           title: 'Atenção',
//          text: 'Bancos 24h próximos a você',
//          imageUrl: 'https://cartaodecreditocontacorrente.net/wp-content/uploads/2022/03/BANCO24Horas.png',
//          imageAlt: 'A tall image'})
//        }
//      })
//     });