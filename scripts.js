// Função que será responsável por adicionar um novo produto na listagem
function adicionarProduto(nome, valor) {
    var table = document.querySelector('table tbody');
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.textContent = nome;
    cell2.textContent = valor;
  }
  
  // Event listener para o formulário de cadastro de produtos
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var produto = document.getElementById('produto').value;
    var valor = document.getElementById('valor').value;
    adicionarProduto(produto, valor);
    document.getElementById('produto').value = '';
    document.getElementById('valor').value = '';
  });
  
  // Event listener para o botão de cadastrar novo produto
  document.querySelector('.add-button').addEventListener('click', function() {
    document.querySelector('.form-container').style.display = 'block';
  });
  