/*
    # Currying

        A ideia da currying é passar parâmetros parcialmente para uma função através de chaamdas 
        para outras funções;
*/

function startCalc(a: number) {
    return function(add: number) {
        return function (mul: number) {
            return (a + add) * mul;
        }
    }
}

console.log('Not arrow function: ' + startCalc(5)(5)(5)); // Output 50

// Reduzindo a função acima

const startCalcWithArrowFunction = (a: number) => (add: number) => (mul: number) => (a + add) * mul;

console.log('With arrow function: ' + startCalcWithArrowFunction(5)(5)(5)) // Output 50