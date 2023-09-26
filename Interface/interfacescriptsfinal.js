// const funcCadastro = require("./interfacescriptsini");

// funcCadastro.funcCadastro()

var btndiv = document.getElementById('btn-div');
var versaldo = document.querySelector('.saldo');

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
