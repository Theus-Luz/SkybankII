const numeroAleatorio = Math.floor(Math.random() * 333333333333333330);


var saldoElement = document.getElementById("saldoconta");















// Verifique se o elemento foi encontrado
if (saldoElement) {
  // Obtenha o texto dentro do elemento e remova espaços em branco extras
  var saldoTexto = saldoElement.textContent.trim();

  // Converta o texto para um número inteiro
  var saldoInt = parseInt(saldoTexto);

  // Verifique se a conversão foi bem-sucedida
  if (!isNaN(saldoInt)) {
    // Agora, saldoInt conterá o valor inteiro 2000
    console.log(saldoInt);
  } else {
    console.log("Não foi possível converter o valor em um número inteiro.");
  }
} else {
  console.log("Elemento com id 'saldoconta' não encontrado.");
}




function clicaBotao () {
    alert("Alo Mundo!")
}


function valorTransferido (){
    if(entrapix.value == 1){ entrenumero.innerHTML = "Entre com um Valor Válido!";

}else{
    Swal.fire(
        'Obrigado por Usar nosso Banco',
        'Seu pix foi encaminhado com Sucesso!',
        'success'
      )}

}


function funcCadastro () {

    saldoconta.innerHTML = "R$" + saldo;
    document.getElementById("usernome").innerHTML =
      "Olá " + person + "! Seja Bem vindo!";
      
    }


    function areaPix () {
        if (pixtransf.style.display === 'none') {
            pixtransf.style.display = 'block';
            deposit.style.display = 'none';
            areatransf.style.display = 'none';
            areapag.style.display = 'none';
            suporte.style.display = 'none';
            movimentos.style.display = 'none';
            perfil.style.display = 'none';
        } else {
            pixtransf.style.display = 'block';
            deposit.style.display = 'none';
            areatransf.style.display = 'none';
            areapag.style.display = 'none';
            suporte.style.display = 'none';
            movimentos.style.display = 'none';
            perfil.style.display = 'none';
        }
    }
    
    function areaDep () {
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
    }
    
    function areaTransferir () {
        if (areatransf.style.display === 'none') {
            areatransf.style.display = 'block';
    
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            areapag.style.display = 'none';
            suporte.style.display = 'none';
            movimentos.style.display = 'none';
            perfil.style.display = 'none';
        } else {
            areatransf.style.display = 'block';
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            areapag.style.display = 'none';
            suporte.style.display = 'none';
            movimentos.style.display = 'none';
            perfil.style.display = 'none';
        }
    }
    
    function areaPagamento () {
        if (areapag.style.display === 'none') {
            areapag.style.display = 'block';
    
            areatransf.style.display = 'none';
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            suporte.style.display = 'none';
            movimentos.style.display = 'none';
            perfil.style.display = 'none';
        } else {
            areapag.style.display = 'block';
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            areatransf.style.display = 'none';
            suporte.style.display = 'none';
            movimentos.style.display = 'none';
            perfil.style.display = 'none';
        }
    }
    
    function menuSup () {
        if (suporte.style.display === 'none') {
            suporte.style.display = 'block';
    
            areatransf.style.display = 'none';
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            movimentos.style.display = 'none';
            perfil.style.display = 'none';
            areapag.style.display = 'none';
        } else {
            suporte.style.display = 'block';
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            areatransf.style.display = 'none';
            movimentos.style.display = 'none';
            perfil.style.display = 'none';
            areapag.style.display = 'none';
        }
    }
    
    function menuMov () {
        if (movimentos.style.display === 'none') {
            movimentos.style.display = 'block';
    
            areatransf.style.display = 'none';
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            perfil.style.display = 'none';
            suporte.style.display = 'none';
            areapag.style.display = 'none';
        } else {
            movimentos.style.display = 'block';
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            areatransf.style.display = 'none';
            perfil.style.display = 'none';
            suporte.style.display = 'none';
            areapag.style.display = 'none';
        }
    }
    function contaPerfil () {
        if (perfil.style.display === 'none') {
            perfil.style.display = 'block';
            areatransf.style.display = 'none';
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            movimentos.style.display = 'none';
            areapag.style.display = 'none';
        } else {
            perfil.style.display = 'block';
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            areatransf.style.display = 'none';
            movimentos.style.display = 'none';
            areapag.style.display = 'none';
        }
    }
    
    function menuInicio () {
        if (menuperfil === true) {
            perfil.style.display = 'none';
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            areatransf.style.display = 'none';
            movimentos.style.display = 'none';
            areapag.style.display = 'none';
            suporte.style.display = 'none';
    
        } else {
            perfil.style.display = 'none';
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            areatransf.style.display = 'none';
            movimentos.style.display = 'none';
            areapag.style.display = 'none';
            suporte.style.display = 'none';
    
        }
    }
    function botaoSacar() {
        if (btnssaq.style.display === 'none') {
            btnssaq.style.display = 'block';
      
            areatransf.style.display = 'none';
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            suporte.style.display = 'none';
            movimentos.style.display = 'none';
            perfil.style.display = 'none';
            areapag.style.display = 'none';
        } else {
            btnssaq.style.display = 'block';
            areatransf.style.display = 'none';
            pixtransf.style.display = 'none';
            deposit.style.display = 'none';
            suporte.style.display = 'none';
            movimentos.style.display = 'none';
            perfil.style.display = 'none';
            areapag.style.display = 'none';
        }
      }

      function userPerfil() {
        if (perfiluser.style.display === 'none') {
           perfiluser.style.display = 'block';
   
            deposit.style.display = 'none';
            areatransf.style.display = 'none';
            areapag.style.display = 'none';
            suporte.style.display = 'none';
            movimentos.style.display = 'none';
            btnssaq.style.display = 'none';
          
        } else {
           pixtransf.style.display = 'block';
           deposit.style.display = 'none';
           areatransf.style.display = 'none';
           areapag.style.display = 'none';
           suporte.style.display = 'none';
           movimentos.style.display = 'none';
           btnssaq.style.display = 'none';
   
        }
    }

      