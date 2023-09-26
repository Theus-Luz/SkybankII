// const numeroAleatorio = Math.floor(Math.random() * 333333333333333330);

var btndep = document.querySelector('#dep');
var depvalor = document.querySelector('#dep1');
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
  } else {
      deposit.style.display = 'block';
      pixtransf.style.display = 'none';
      areatransf.style.display = 'none';
      areapag.style.display = 'none';
      suporte.style.display = 'none';
      movimentos.style.display = 'none';
      perfil.style.display = 'none';
  }
});
btnboleto.addEventListener('click', boletoPronto);

function abrirModal() {
  document.getElementById("myModal").style.display = "block";
}

function fecharModal() {
  document.getElementById("myModal").style.display = "none";
}


// FUNCÃO QUE VERIFICA SE O NUMERO DIGITADO NO CAMPO É O CORRETO

btnboleto.addEventListener('click', boletoPronto);

function boletoPronto () {
  if(dep1.value != 100){
  errodep.innerHTML = "Entre com um Valor Válido!"; 
}else{
  Swal.fire({
    title: 'Obrigado por usar o SKYBANK',
  text: 'Seu boleto foi gerado com sucesso, vá até uma lotérica e realize o pagamento.',
  imageUrl: 'https://lh3.googleusercontent.com/pw/AIL4fc-D_UqBaBz2nrJSaO9uHsJzrys3oVZe1tZU0PPqgusqLRTuwnxvENXlPK_xquK_gcXEUC7W2_xzlc-1zb1ZlBTKRZxdRbGkOGJ81Y_SP0IVggaieMNX_zVxbN98qyr4lbJQqHwptWFGT4-eUsXK6CVOTQ=w715-h613-s-no?authuser=0',
  imageAlt: 'A tall image'})
      // salvaboleto.innerHTML = "Atenção ao número do seu Boleto: "+ numeroAleatorio;
    }
}



//  btndeposita.addEventListener('click', function(){
//    if (depvalor.value == ''){ errosdep.innerHTML = "Entre com um Valor Válido!";
//  }else{
  
//  }});




// function irdep(){

//   var dep1 = document.getElementById('dep1').value;

//   if(dep1 == '100'){
//   abrirModal();
//   return;
// } else {
//   alert('Entre com o valor correto');
//   return;
// }
// }

// function boletoPronto () {
//   Swal.fire(
//       'Obrigado por Usar nosso Banco',
//        'Seu boleto foi gerado com sucesso',
//       'success'
//     )}
