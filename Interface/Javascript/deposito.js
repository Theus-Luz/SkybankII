const numeroAleatorio = Math.floor(Math.random() * 333333333333333330);

var btndep = document.querySelector('#dep');
var depvalor = document.querySelector('#dep1');
var deposit = document.querySelector('.deposit');
var btnboleto = document.querySelector('#boletogerado');


btndep.addEventListener('click', function areaDep () {
  if (deposit.style.display === 'none') {
      deposit.style.display = 'block';
      pixtransf.style.display = 'none';
      areatransf.style.display = 'none';
      areapag.style.display = 'none';
      suporte.style.display = 'none';
      movimentos.style.display = 'none';
      btnssaq.style.display = 'none';
  } else {
      deposit.style.display = 'block';
      pixtransf.style.display = 'none';
      areatransf.style.display = 'none';
      areapag.style.display = 'none';
      suporte.style.display = 'none';
      movimentos.style.display = 'none';
      btnssaq.style.display = 'none';

  }
});



btnboleto.addEventListener('click', boletoPronto);




function boletoPronto () {
    Swal.fire(
        'Obrigado por Usar nosso Banco',
        'Seu boleto foi gerado com sucesso',
        'success'
      )
      salvaboleto.innerHTML = "Atenção ao número do seu Boleto: "+ numeroAleatorio;

}