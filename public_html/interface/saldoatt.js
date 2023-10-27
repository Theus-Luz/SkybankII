 // Função para carregar o saldo do usuário
 function carregarSaldo() {
    // Faça uma solicitação AJAX (ou use fetch) para buscar o saldo no servidor
    fetch('/buscar-saldo')
        .then(response => response.json())
        .then(data => {
            const saldo = data.saldo;
            document.getElementById('saldoconta').textContent = saldo;
        })
        .catch(error => {
            console.error('Erro ao buscar saldo:', error);
        });
}

// Chame a função para carregar o saldo quando a página for carregada
carregarSaldo();