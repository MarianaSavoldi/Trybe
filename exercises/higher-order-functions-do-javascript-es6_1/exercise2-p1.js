const verificaNum = (sorteado, aposta) => {
 return aposta === sorteado ? 'Parabéns você ganhou!' : 'Tente novamente'; 
}

const checkAposta = (apostado, verifica) => {
  const numero = Math.ceil(Math.random() * 5);
  return verifica(numero, apostado);
}

console.log(checkAposta(3, verificaNum));
