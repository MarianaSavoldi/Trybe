function palindromo(word) {
  let arrayLetras = word.split("");
  let ehPalindromo = true;
  for (let index in arrayLetras) {
    if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
      isPalindrome = false;
    }
  }
  return ehPalindromo;
}

function palindromo(string) {
  let reverso = string.split("").reverse().join("");
  if (reverso === string) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));