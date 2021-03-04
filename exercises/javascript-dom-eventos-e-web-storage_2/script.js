//requisito 1
let h1Title = document.createElement('h1');
document.body.appendChild(h1Title);
h1Title.innerHTML = 'Exercício 5.2 - JavaScript DOM';

//requisito 2
let divMae = document.createElement('div');
document.body.appendChild(divMae);
divMae.className = 'main-content';

//requisito 3
let divFilha = document.createElement('div');
divMae.appendChild(divFilha);
divFilha.className = 'center-content';

//requisito 4
let pFilho = document.createElement('p');
divFilha.appendChild(pFilho);
pFilho.innerText = 'Parágrafo Filho da Div Filha';
