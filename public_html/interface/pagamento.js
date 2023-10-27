var btnpag = document.querySelector('#pag');
var areapag = document.querySelector('.areapag');

btnpag.addEventListener('click', function areaPagamento () {
    if (areapag.style.display === 'none') {
        areapag.style.display = 'block';

        areatransf.style.display = 'none';
        pixtransf.style.display = 'none';
        deposit.style.display = 'none';
        suporte.style.display = 'none';
        movimentos.style.display = 'none';
        btnssaq.style.display = 'none';
    } else {
        areapag.style.display = 'block';
        pixtransf.style.display = 'none';
        deposit.style.display = 'none';
        areatransf.style.display = 'none';
        suporte.style.display = 'none';
        movimentos.style.display = 'none';    
        btnssaq.style.display = 'none';
    }
}
);


const form = document.getElementById("form-pagamento");

const btnGerar = document.getElementById("gerar");
const btnPagar = document.getElementById("pagar");

btnGerar.addEventListener("click", gerarCodigoBarras);
btnPagar.addEventListener("click", exibirInformacoesBoleto);

function gerarCodigoBarras() {
  const codigo = Math.floor(Math.random() * 1000000000000000000000000000000000000000).toString();
  document.getElementById("codigo").value = codigo;
}

function exibirInformacoesBoleto() {
  const codigo = document.getElementById("codigo").value;
  Swal.fire({
    title: 'Confirme o seu Pagamento',
    text: "Você esta preste a pagar um Boleto, Revise o Código de Barras!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Prosseguir'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Obrigado por Usar nosso Banco!',
        'Seu boleto foi Pago !',
        'success'
      )
    }
  })

}

// alert("Você vai pagar\n\nEmpresa: \nNome da Empresa\n\nCódigo de Barras: " + "\n" + codigo);