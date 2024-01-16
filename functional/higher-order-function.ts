/*
    # Higher Order Function

    ## Funções que permite receber como parâmetro outras funções (callback)

        ### Exemplo o filter, reducer, etc do prototype do Array.

*/


interface ICalc<T> {
    (args: T[]): number;
}

const sum: ICalc<number> = (args) => args.reduce((x, y) => x + y); 

function execute(callback: ICalc<number>, ...others: number[]) {
    return callback(others);
}

console.log(execute(sum, 1, 2, 3, 4, 5, 6, 7));