const testingScope = escopo => {
  const verifyScope = 'Não devo ser utilizada fora do meu escopo'
  const scope = (escopo === true) ? `${verifyScope} ótimo, fui utilizada no meu escopo!` : `${verifyScope} o que estou fazendo aqui? :O`;
  console.log(scope);
}

testingScope(true);
