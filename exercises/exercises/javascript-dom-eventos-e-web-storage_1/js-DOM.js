/*Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
 1- Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 2- Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 3- Crie uma função que mude a cor do quadrado vermelho para branco.
 4- Crie uma função que corrija o texto da tag <h1>.
 5 -Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 6- Crie uma função que exiba o conteúdo de todas as tags <p> no console.*/
 //exercício 1
 document.getElementById("parag-teste").innerText = "Daqui 2 anos eu me vejo morando em outro país";

 //exercício 2
document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";

//exercício 3
document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";

//exercício 4
document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript";

//exercício 5
document.getElementsByTagName("p")[0].style.textTransform = "uppercase";

