// const funcCadastro = require("./interfacescriptsini");

// funcCadastro.funcCadastro()

var btndiv = document.getElementById('btn-div');
var versaldo = document.querySelector('.saldo');



document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('/api/saldo');
    const data = await response.json();
    const saldoSpan = document.getElementById('saldoconta');
    
    if (data.saldo) {
      saldoSpan.textContent = data.saldo.toFixed(2); // Formate o saldo conforme necessário
    } else {
      saldoSpan.textContent = 'Erro ao buscar saldo';
    }
  } catch (error) {
    console.error('Erro ao buscar saldo:', error);
    const saldoSpan = document.getElementById('saldoconta');
    saldoSpan.textContent = 'Erro ao buscar saldo';
  }
});












//saque

//pix


//Deposito

//transf

//Pagamento

//Menu suporte

//movimentos

//Perfil


btndiv.addEventListener('click', function() {
    
  if(versaldo.style.display === 'block') {
    versaldo.style.display = 'none';
  } else {
    versaldo.style.display = 'block';
  }
});
