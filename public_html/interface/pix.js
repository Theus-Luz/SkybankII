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



// function mostrarCaixaTexto(){
//   var selecao = document.getElementById("selecao");
//   var valorSelecionado = selecao.value;
//   var caixaTexto = document.getElementById("caixaTexto");
// }


btnpix.addEventListener('click', function areaPix () {
    if (pixtransf.style.display === 'none') {
        pixtransf.style.display = 'block';
        deposit.style.display = 'none';
        areatransf.style.display = 'none';
        areapag.style.display = 'none';
        suporte.style.display = 'none';
        movimentos.style.display = 'none';
        btnssaq.style.display = 'none';
        perfiluser.style.display = 'none'

    } else {
        pixtransf.style.display = 'block';
        deposit.style.display = 'none';
        areatransf.style.display = 'none';
        areapag.style.display = 'none';
        suporte.style.display = 'none';
        movimentos.style.display = 'none';
        btnssaq.style.display = 'none';
        perfiluser.style.display = 'none'
    }
});


// Adicione um evento de clique ao botão "Transferir"
const botaoTransferir = document.getElementById('botaotransf');
botaoTransferir.addEventListener('click', async () => {
  const chavePixDestino = document.getElementById('entraemail').value;
  const valorTransferencia = parseFloat(document.getElementById('entrapix').value);
  const emailOrigem = 'Kylers@skybank'; // AQUI É O E-MAIL DO USUARIO DE ORIGEM!!!!!!!!!
  const saldoConta = parseFloat(document.getElementById('saldoconta').textContent);

  if (!chavePixDestino || isNaN(valorTransferencia) || valorTransferencia <= 0) {
    document.getElementById('errochave').textContent = 'Preencha os campos corretamente';
  } else if (valorTransferencia > saldoConta) {
    // Exibir um SweetAlert informando que o saldo é insuficiente
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você não tem saldo para realizar essa Transferência',
      footer: '<a href="http://127.0.0.1:5503/Faq%20de%20ajuda/faq.html">Está com dificuldade para Sacar? Acesse nossa Faq</a>'
    });
  } else {
    // Verificar se a chave PIX de destino existe
    const response = await fetch('/verificar-chavepix', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chavePixDestino: chavePixDestino,
      }),
    });

    if (response.status === 200) {
      // A chave PIX de destino existe

      Swal.fire({
        title: 'Você está prestes a finalizar sua Transferência',
        text: 'Se os dados estiverem corretos, clique em Prosseguir para continuar com a Transferência!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Prosseguir'
      }).then(async (result) => {
        if (result.isConfirmed) {
          // Realize a transferência
          const transferenciaResponse = await fetch('/realizar-transferencia', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chavePixDestino: chavePixDestino,
              valorTransferencia: valorTransferencia,
              emailOrigem: emailOrigem,
            }),
          });

          if (transferenciaResponse.status === 201) {
            const data = await transferenciaResponse.json();
            const novoSaldo = data.saldo;

            // Atualize o saldo na interface
            document.getElementById('saldoconta').textContent = novoSaldo;
            console.log('Transferência realizada com sucesso! Novo saldo:', novoSaldo);
            document.getElementById('errochave').textContent = ' ';

            // Exiba um SweetAlert de sucesso
            Swal.fire('Obrigado por usar nosso Banco!', 'Sua Transferência foi realizada com sucesso!', 'success');
          } else {
            console.error('Erro ao realizar a transferência:', transferenciaResponse.statusText);
            // Manipule o erro e exiba uma mensagem de erro ao usuário, se necessário
          }
        }
      });
    } else {
      // A chave PIX de destino não existe, mostre uma mensagem de erro usando o SweetAlert
      Swal.fire('Chave PIX não localizada', 'Chave PIX de destino não localizada. Digite uma chave PIX válida.', 'error');
      document.getElementById('errochave').textContent = 'Chave PIX de destino não cadastrada.';
    }
  }
});







