let n = 5;
let inputLine = "";
let inputPosition = n;

for (let indexLine = 0; indexLine <= n; indexLine += 1) {
    for (indexColuna = 0; indexColuna < n; indexColuna += 1) {
        if (indexColuna < inputPosition) {
            inputLine = inputLine + " ";
        } else {
            inputLine = inputLine + "*";
        }
    }
    console.log(inputLine);
    inputLine = "";
    inputPosition -= 1;    
};