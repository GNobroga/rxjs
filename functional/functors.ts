/*
    # Functors 

        São objetos que implementam a função (map), ou seja, que podem ser
        mapeados (transformados) para um valor diferente, sem alterar o tamanho
        original.

*/

const numbers = [1, 2, 3, 4, 5] as number[];

console.log(numbers.map(value => value * 2));

////////////////////


function mapToNewValue(value: number) {
    return {
        value,
        map(fnc: (value: number) => number) {
            return mapToNewValue(fnc(this.value));
        }
    }
}


console.log(mapToNewValue(2).map(value => value * 100).value);