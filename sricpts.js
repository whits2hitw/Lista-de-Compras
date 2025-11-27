
// Constantes para obter os elementos do formulário

const newItem = document.getElementById("new-item")
const form = document.querySelector("form")
const list = document.querySelectorAll('input[type="checkbox"]');
const itemList = document.getElementById('default-items')
const alertFooter = document.getElementById('alert-footer')
const Xbtn = document.getElementById('x-btn')




// Manipulando o input para receber somente letras.
newItem.addEventListener("input", () => {

  const hasNumbersRegex = /\d+/g
  newItem.value = newItem.value.replace(hasNumbersRegex, "")

})





form.addEventListener('submit', function (event) {
  // Não resetar a pagina quando clicar no Adicionar Item
  event.preventDefault();

  // Cria constante para receber o valor do item novo
  const newItemText = newItem.value.trim();

  if (newItemText !== '') {
    // Criar nova label
    const newLabel = document.createElement('label');
    newLabel.classList.add('item-list', 'flex')// Adiciona as classes de estilização

    // Criar um input do tipo checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'item';
    checkbox.value = newItemText.toLowerCase().replace(/\s/g, '-');

    // Criar o span e seus estilos
    const newSpan = document.createElement('span')
    newSpan.id = 'new-check';

    // Cria a tag <p> e seus estilos
    const newP = document.createElement('p')
    newP.textContent = newItemText;

    // Cria o botão da lixeira e sua estilização
    const buttonTrash = document.createElement('button');
    buttonTrash.id = 'trashcan';
    const imgTrash = document.createElement('img');
    imgTrash.src = 'assets/icons/trash.svg';
    imgTrash.alt = 'Ícone de lixeira';
    buttonTrash.appendChild(imgTrash);

    // Adiciona um listener para remover o item quando a lixeira for clicada e aparecer o aviso do footer
    buttonTrash.addEventListener('click', function () {
      newLabel.remove();
      alertFooter.classList.remove('disappear');
    })

    // Adiciona a função de "fechar" o footer quando o botão X clicado
    Xbtn.addEventListener('click', function () {
      alertFooter.classList.add('disappear');
    })

    // Montar a estrutura completa dentro do label
    newLabel.appendChild(checkbox);
    newLabel.appendChild(newSpan);
    newLabel.appendChild(newP);
    newLabel.appendChild(buttonTrash);

    // Adiciona o label já completo na div que funciona como lista
    itemList.appendChild(newLabel);

    // Limpa o input
    newItem.value = '';
    newItem.focus();

  }




})
