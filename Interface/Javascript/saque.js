var btnsacar = document.querySelector('#saq');




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


var saqueValor = document.querySelector('#saqueInput');
var saqueTransf = document.querySelector('#saqueButton');



saqueTransf.addEventListener('click', function(){
  
 if(saldoconta <= 0){
  alert("Digite um valor válido!")
 }else{        var saldocontaElement = document.getElementById('saldoconta');
 var saldoconta = parseFloat(saldocontaElement.innerText);
 saldoconta -= parseFloat(saqueValor.value);
 saldocontaElement.innerText = saldoconta.toFixed(2);

 }   }  );  





































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