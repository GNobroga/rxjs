/*
    # Immutability

        Esse princípio define que não devemos mudar variáveis ou objetos após sua criação. 
        Em vez de alterar os valores de variáveis existentes, você cria novas instâncias com os valores desejados.

*/

const numbers: number[] = [1, 2, 3, 4, 5];


function orderByNumber(array: number[]) {
    // Se não fosse usado o operador spread aqui, essa função seria considera impura e 
    // violaria o princípio da imutabilidade alterando o array original já que é um tipo referência.
    return [...array].sort((a, b) => a - b);
}

console.log(orderByNumber(numbers));


interface IPerson {
    name: string;
    city: string;
    age: number;
}

const person = {
    name: 'Gabriel Cardoso',
    age: 23,
    city: 'Castelo',
} as IPerson;


// Função pura, garantindo imutabilidade pois não gera efeitos colaterais
function changePersonName(person: IPerson, newName: string) {
    const clone = {...person};
    clone.name = newName;
    return clone;
}

console.log(changePersonName(person, 'Gabriel').name);
console.log(person.name);