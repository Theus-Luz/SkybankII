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
      perfiluser.style.display = 'none'
      areapag.style.display = 'none';
  } else {
      btnssaq.style.display = 'block';
      areatransf.style.display = 'none';
      pixtransf.style.display = 'none';
      deposit.style.display = 'none';
      suporte.style.display = 'none';
      movimentos.style.display = 'none';
      perfiluser.style.display = 'none'
      areapag.style.display = 'none';
  }
});



document.getElementById("mostraMapa").addEventListener("click", function() {
  var mapa = document.getElementById("googlemap");
  if (mapa.style.display === "none" || mapa.style.display === "") {
      mapa.style.display = "block";
  } else {
      mapa.style.display = "none";
  }
});





document.getElementById('saqueButton').addEventListener('click', () => {
  const valorDoSaque = document.getElementById('saqueInput').value;
  const emailUsuario = 'Kylers@skybank'; // Substitua pelo e-mail do usuário
  const saldoConta = parseFloat(document.getElementById('saldoconta').textContent);

  if (valorDoSaque <= 0) {
    // Exibir um SweetAlert informando que o valor do saque é inválido
    Swal.fire({
      icon: 'error',
      title: 'Valor Inválido',
      text: 'Digite um valor de saque válido.',
    });
  } else if (valorDoSaque > saldoConta) {
    // Exibir um SweetAlert informando que o saldo é insuficiente
    Swal.fire({
      icon: 'error',
      title: 'Saldo Insuficiente',
      text: 'Você não tem saldo suficiente para realizar esse saque.',
      footer: '<a href="http://127.0.0.1:5503/Faq%20de%20ajuda/faq.html">Está com dificuldade para Sacar? Acesse nossa Faq</a>',
    });
  } else {
    // O valor do saque é válido, prosseguir com a solicitação ao servidor
    Swal.fire({
      title: 'Você está prestes a realizar seu saque!',
      text: 'Verifique as informações fornecidas na tela do Banco 24h. Se tudo estiver correto, prossiga!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Prosseguir',
    }).then(async (result) => {
      if (result.isConfirmed) {
        fetch('/realizar-saque', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ valor: valorDoSaque }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.novoSaldo !== undefined) {
              // Se o novo saldo estiver definido na resposta
              const novoSaldo = data.novoSaldo;
               // Atualize o saldo na interface
      buscarSaldo();

              // Exiba um SweetAlert de sucesso
              Swal.fire('Saque Realizado', 'Saque realizado com sucesso!', 'success');
            } else {
              // Exiba um SweetAlert de erro genérico
              Swal.fire('Erro no Saque', 'Erro ao realizar o saque.', 'error');
            }
          })
          .catch((error) => {
            console.error('Erro ao realizar saque:', error);

            // Exiba um SweetAlert de erro
            Swal.fire('Erro no Saque', 'Erro ao realizar o saque.', 'error');
          });
      }
    });
  }
});
