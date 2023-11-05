document.addEventListener('DOMContentLoaded', function() {
    var btnperfil = document.querySelector('#menuperfil');
    var perfiluser = document.querySelector('#perfiluser');

    btnperfil.addEventListener('click', function userPerfil() {
        if (perfiluser.style.display === 'none' || perfiluser.style.display === '') {
            perfiluser.style.display = 'block';

            deposit.style.display = 'none';
        areatransf.style.display = 'none';
        areapag.style.display = 'none';
        suporte.style.display = 'none';
        movimentos.style.display = 'none';
        btnssaq.style.display = 'none';
        pixtransf.style.display = 'none'

        } else {
        perfiluser.style.display = 'none';
        deposit.style.display = 'none';
        areatransf.style.display = 'none';
        areapag.style.display = 'none';
        suporte.style.display = 'none';
        movimentos.style.display = 'none';
        btnssaq.style.display = 'none';
        pixtransf.style.display = 'none'
        }
    });
});


document.getElementById('cadastrarPixButton').addEventListener('click', async () => {
    const emailChave = document.getElementById('cadastraemail').value; // Obtenha a chave de e-mail do campo de entrada
  
    // Envie a chave de e-mail para o servidor
    try {
      const response = await fetch('/cadastrar-chave-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailChave }),
      });
  
      if (response.ok) {
        // Chave de e-mail cadastrada com sucesso
        alert('Chave de e-mail cadastrada com sucesso!');
      } else {
        // Trate erros ao cadastrar a chave de e-mail
        console.error('Erro ao cadastrar a chave de e-mail');
        alert('Erro ao cadastrar a chave de e-mail');
      }
    } catch (error) {
      console.error('Erro ao comunicar com o servidor:', error);
      alert('Erro ao comunicar com o servidor');
    }
  });
  

// Adicione um evento de clique ao botão "Cadastrar Chave Pix"
// Adicione um evento de clique ao botão "Cadastrar Chave Pix"
const cadastrarPixButton = document.getElementById('cadastrarPixButton');
cadastrarPixButton.addEventListener('click', async () => {
  const chavePix = document.getElementById('cadastraNovaChave').value; // Certifique-se de usar o ID correto aqui

  if (!chavePix) {
    // Lidar com erros, por exemplo, exibir uma mensagem ao usuário
    Swal.fire('Erro!', 'Por favor, insira uma chave PIX válida.', 'error');
  } else {
    // Verificar se a chave PIX já existe
    const existsResponse = await fetch('/verificar-chavepix-existente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chavePix: chavePix, // Certifique-se de usar o nome de campo correto aqui
      }),
    });

    const existsData = await existsResponse.json();

    if (existsData.exists) {
      // A chave PIX já existe, exiba uma mensagem ao usuário
      Swal.fire('Erro!', 'A chave PIX já cadastrada.', 'error');
    } else {
      // A chave PIX não existe, continue com o cadastro
      const response = await fetch('/cadastrar-chavepix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chavePix: chavePix, // Certifique-se de usar o nome de campo correto aqui
        }),
      });

      if (response.status === 201) {
        // Chave PIX cadastrada com sucesso
        Swal.fire('Sucesso!', 'Chave PIX cadastrada com sucesso!', 'success');
        console.log('Chave PIX cadastrada com sucesso!');
        // Lide com o sucesso, por exemplo, exiba uma mensagem ao usuário
      } else {
        // Lidar com erros, por exemplo, exibir uma mensagem ao usuário
        Swal.fire('Erro!', 'Erro ao cadastrar a nova chave PIX.', 'error');
        console.error('Erro ao cadastrar a nova chave PIX:', response.statusText);
      }
    }
  }
});





// Evento de clique no botão para buscar informações do usuário
document.getElementById("buscarInformacoesUsuario").addEventListener("click", async () => {
  const emailDoUsuario = "Kylers@skybank"; // Substitua pelo email real

  try {
    const response = await fetch(`http://localhost:3000/buscar-informacoes-usuario/${emailDoUsuario}`);
    if (response.ok) {
      const informacoesDoUsuario = await response.json();
      preencherInformacoesNoHTML(informacoesDoUsuario);
    } else {
      console.log('Usuário não encontrado');
    }
  } catch (error) {
    console.error('Erro ao buscar informações do usuário:', error);
  }
});

// Função para preencher as informações no HTML
function preencherInformacoesNoHTML(informacoesDoUsuario) {
  document.getElementById("nomeUsuario").textContent = informacoesDoUsuario.nome;
  document.getElementById("emailUsuario").textContent = informacoesDoUsuario.email;
  document.getElementById("cpfUsuario").textContent = informacoesDoUsuario.cpf;
  document.getElementById("chavePixUsuario").textContent = informacoesDoUsuario.chavepix;
  document.getElementById("agenciaUsuario").textContent = informacoesDoUsuario.agencia;
  document.getElementById("contaUsuario").textContent = informacoesDoUsuario.conta;
}


// Chame a função para buscar as informações ao carregar a página
window.addEventListener("load", () => {
  buscarUsuarioPorEmail(emailDoUsuario);
});


