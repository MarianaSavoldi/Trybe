let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for (let iMaior = 1; iMaior < numbers.length; iMaior++) {
    if(numbers[iMaior] > maiorNumero) {
        maiorNumero = numbers[iMaior]
    }
}

console.log(maiorNumero);