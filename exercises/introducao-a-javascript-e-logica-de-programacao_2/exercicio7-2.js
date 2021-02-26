let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0];

for (let iMenor = 1; iMenor < numbers.length; iMenor++) {
    if(numbers[iMenor] < menorNumero) {
        menorNumero = numbers[iMenor]
    }
}

console.log(menorNumero);