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
        perfiluser.style.display = 'none'

    } else {
        areatransf.style.display = 'block';
        pixtransf.style.display = 'none';
        deposit.style.display = 'none';
        areapag.style.display = 'none';
        suporte.style.display = 'none';
        movimentos.style.display = 'none';
        btnssaq.style.display = 'none';
        perfiluser.style.display = 'none'
    }
   

});

// Adicione um evento de clique ao botão "Transferir TED"
const btnTED = document.getElementById('btnted');
btnTED.addEventListener('click', async () => {
  const nomeDestinatario = document.getElementById('caixaNome').value;
  const cpfDestino = document.getElementById('caixaCpf').value;
  const agenciaDestino = document.getElementById('caixaAgencia').value;
  const contaDestino = document.getElementById('caixaConta').value;
  const valorTransferencia = parseFloat(document.getElementById('caixaValor').value);

  // Limpar mensagens de erro anteriores
  document.getElementById('nometed').textContent = '';
  document.getElementById('cpfted').textContent = '';
  document.getElementById('agenciated').textContent = '';
  document.getElementById('contated').textContent = '';
  document.getElementById('valorted').textContent = '';

  // Verificar se os campos estão preenchidos corretamente
  let hasError = false;

  if (nomeDestinatario === '') {
    document.getElementById('nometed').textContent = 'Informe o nome.';
    hasError = true;
  }

  if (cpfDestino === '' || cpfDestino.length !== 11) {
    document.getElementById('cpfted').textContent = 'Informe um CPF válido com 11 dígitos.';
    hasError = true;
  }

  if (agenciaDestino === '' || agenciaDestino.length !== 4) {
    document.getElementById('agenciated').textContent = 'Informe uma agência válida com 4 dígitos.';
    hasError = true;
  }

  if (contaDestino === '' || contaDestino.length !== 6) {
    document.getElementById('contated').textContent = 'Informe uma conta válida com 6 dígitos.';
    hasError = true;
  }

  if (isNaN(valorTransferencia) || valorTransferencia <= 0) {
    document.getElementById('valorted').textContent = 'Informe um valor de transferência válido.';
    hasError = true;
  }

  if (hasError) {
    // Exibir mensagem de erro
    Swal.fire('Erro', 'Corrija os erros antes de prosseguir.', 'error');
    return;
  }
    
  const confirmacaoTransferencia = await Swal.fire({
    title: 'Confirme os dados',
    text: 'Se os dados estiverem corretos, clique em Prosseguir para continuar com a Transferência!',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Prosseguir'
  });

  if (confirmacaoTransferencia.isConfirmed) {
    try {
      const transferenciaResponse = await fetch('/realizar-transferencia-ted', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomeDestinatario: nomeDestinatario,
          cpfDestino: cpfDestino,
          agenciaDestino: agenciaDestino,
          contaDestino: contaDestino,
          valorTransferencia: valorTransferencia,
        }),
      });
    
      if (transferenciaResponse.status === 201) {
        const data = await transferenciaResponse.json();
        console.log('Dados retornados:', data); // Adicione esta linha para depuração
        Swal.fire('Transferência TED realizada com sucesso!', '', 'success');
        buscarSaldo(); // Certifique-se de que esta função está funcionando corretamente
      } else if (transferenciaResponse.status === 400) {
        Swal.fire('Saldo Insuficiente', 'Você não possui saldo suficiente para realizar a transferência TED.', 'error');
      } else if (transferenciaResponse.status === 404) {
        Swal.fire('Dados não localizados', 'Os dados informados não foram encontrados. Por segurança, não informaremos qual dados esta incorreto,Verifique os dados e tente novamente!', 'error');
      } else {
        Swal.fire('Erro na Transferência TED', 'Houve um erro ao realizar a transferência TED. Tente novamente mais tarde.', 'error');
        console.error('Erro ao realizar a transferência TED:', transferenciaResponse.statusText);
      }
    } catch (error) {
      console.error('Erro ao realizar a transferência TED:', error);
      Swal.fire('Erro na Transferência TED', 'Houve um erro ao realizar a transferência TED. Tente novamente mais tarde.', 'error');
    }
}});



  





