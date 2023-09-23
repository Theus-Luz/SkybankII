var menuMov = document.querySelector('#menumov');
var movimentos = document.querySelector('.movimentos');
const listaTransferencias = document.getElementById("lista-transferencias");
const detalhesTransferencia = document.getElementById("detalhes-transferencia");
const descricaoTransferencia = document.getElementById("descricao-transferencia");
const valorTransferencia = document.getElementById("valor-transferencia");
const remetenteTransferencia = document.getElementById("remetente-transferencia");
const destinatarioTransferencia = document.getElementById("destinatario-transferencia");
const dataTransferencia = document.getElementById("data-transferencia");
const contaOrigem = document.getElementById("conta-origem");
const contaDestino = document.getElementById("conta-destino");

const popupBtn = document.querySelector('#popupbtn');
const popup = document.querySelector('.popup-wrapper');
const popup2 = document.querySelector('.popup-wrapper2');
const popup3 = document.querySelector('.popup-wrapper3');

const closeButton = document.querySelector('.popup-close');

const transf1 = document.querySelector('#transf1');
const transf2 = document.querySelector('#transf2');
const transf3 = document.querySelector('#transf3');


menuMov.addEventListener('click', function menuMov1 () {
    if (movimentos.style.display === 'none') {
        movimentos.style.display = 'block';

        areatransf.style.display = 'none';
        pixtransf.style.display = 'none';
        deposit.style.display = 'none';
        suporte.style.display = 'none';
        areapag.style.display = 'none';
        btnssaq.style.display = 'none';

    } else {
        movimentos.style.display = 'block';
        pixtransf.style.display = 'none';
        deposit.style.display = 'none';
        areatransf.style.display = 'none';
        suporte.style.display = 'none';
        btnssaq.style.display = 'none';
        areapag.style.display = 'none';

    }
});


transf1.addEventListener('click', function() {
    popup.style.display = 'block';
})

transf2.addEventListener('click', function() {
    popup2.style.display = 'block';
})

transf3.addEventListener('click', function() {
    popup3.style.display = 'block';
})






// closeButton.addEventListener('click', () =>{
//     popup.style.display = 'none';
// })

popup.addEventListener('click', event => {
    const classNameOfClikedElement = event.target.classList[0]
    const classNames = ['popup-close','popup-wrapper', 'popup-link']
    const shouldClosePopup = classNames.some(className => className === classNameOfClikedElement)


    if (shouldClosePopup){
        popup.style.display = 'none'
    }
    console.log(classNameOfClikedElement)
    // popup.style.display = 'none'
})

popup2.addEventListener('click', event => {
    const classNameOfClikedElement = event.target.classList[0]
    const classNames = ['popup-close','popup-wrapper2', 'popup-link']
    const shouldClosePopup = classNames.some(className => className === classNameOfClikedElement)


    if (shouldClosePopup){
        popup2.style.display = 'none'
    }
    console.log(classNameOfClikedElement)
    // popup.style.display = 'none'
})

popup3.addEventListener('click', event => {
    const classNameOfClikedElement = event.target.classList[0]
    const classNames = ['popup-close','popup-wrapper3', 'popup-link']
    const shouldClosePopup = classNames.some(className => className === classNameOfClikedElement)


    if (shouldClosePopup){
        popup3.style.display = 'none'
    }
    console.log(classNameOfClikedElement)
    // popup.style.display = 'none'
})



menusuporte.addEventListener('click', menuSup);





