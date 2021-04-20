let n = 5;
let output = "";

for (let index = 0; index < n; index += 1) {
    for (let indexOutput = 0; indexOutput < n; indexOutput += 1) {
        
        output += "*";
    }
    console.log(output);
    output = "";
}