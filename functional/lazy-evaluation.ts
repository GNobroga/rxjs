/*
    # lazy Evaluation
    
        É uma estratégia de avaliação em programação em que a 
        computação de uma expressão é adiada até o momento em que o
        resultado é realmente necessário.

*/


// Nesse exemplo sempre que eu precisar do valor, vou ter que aguardar 5 segundos.
function powEager(a: number, b: number) {
    const end = Date.now() + 5000;
    while (Date.now() < end) {};
    const pow = Math.pow(a, b);
    return pow;
}

// Nesse exemplo sempre que eu precisar do valor,
// eu vou apenar chamar a função carrying sem precisar processar o calculo novamente.
function powLazy(a: number, b: number) {
    const end = Date.now() + 5000;
    while (Date.now() < end) {};
    const pow = Math.pow(a, b);
    return function() {
        return pow;
    }
}

console.log('Pow eager: ' + powEager(10, 2));

const calcLazy = powLazy(10, 2);

console.log('Pow lazy 1: ' + calcLazy());
console.log('Pow lazy 2: ' + calcLazy());