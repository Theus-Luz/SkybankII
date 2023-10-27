var btnentra = document.querySelector("#entrar");
var btncadastro = document.querySelector("#cliqueaqui")

btnentra.addEventListener('click', clicaBotao);

btncadastro.addEventListener('click', clicaCadastro);


document.addEventListener('DOMContentLoaded', function () {
    const entrarButton = document.getElementById('entrar');
    const mensagemElement = document.getElementById('mensagem');
    
    entrarButton.addEventListener('click', async function () {
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;
  
      try {
        const response = await fetch('/processar-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, senha }),
        });
  
        if (response.ok) {
          // Login bem-sucedido, redireciona para a página de sucesso
          window.location.href = '/sucesso.html';
        } else {
          // Login falhou, exibe uma mensagem de erro
          mensagemElement.innerText = 'Credenciais inválidas. Tente novamente.';
        }
      } catch (error) {
        console.error('Erro ao processar o login:', error);
        mensagemElement.innerText = 'Erro ao processar o login. Tente novamente mais tarde.';
      }
    });
  });