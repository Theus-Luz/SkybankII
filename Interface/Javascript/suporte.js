var menusuporte = document.querySelector('#menusup');
var suporte = document.querySelector('.suporte');
var enviaduvida = document.querySelector('#enviaduvida');

menusuporte.addEventListener('click', function menuSup () {
    if (suporte.style.display === 'none') {
        suporte.style.display = 'block';

        areatransf.style.display = 'none';
        pixtransf.style.display = 'none';
        deposit.style.display = 'none';
        movimentos.style.display = 'none';
        areapag.style.display = 'none';
        btnssaq.style.display = 'none';
    } else {
        suporte.style.display = 'block';
        pixtransf.style.display = 'none';
        deposit.style.display = 'none';
        areatransf.style.display = 'none';
        movimentos.style.display = 'none';
        areapag.style.display = 'none';
        btnssaq.style.display = 'none';
    }
});

enviaduvida.addEventListener('click', function(){
    Swal.fire({
        title: 'Confirme sua Dúvida',
        text: "Você foi claro na sua dúvida ? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Não',
        confirmButtonText: 'Sim'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Embreve nossa Equipe irá lhe contatar',
            'Sua dúvida foi enviada com Sucesso!',
            'success'
          )
        }
      })  
})
