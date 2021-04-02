// 1.1
const testingScope = escopo => {
  const verifyScope = 'Não devo ser utilizada fora do meu escopo...'
  const scope = (escopo === true) ? `${verifyScope} ótimo, fui utilizada no meu escopo!` : `${verifyScope} o que estou fazendo aqui? :O`;
  console.log(scope);
}

testingScope(true);

// 1.2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();

console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

// 1.2 (bônus)

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);