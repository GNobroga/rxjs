# Join Creation Operators

Servem para unir e criar observables

## combineLatest

Esse operador pega os últimos elementos do primeiro e do penúltimo observable e cria tuplas seguinte o fluxo normal
do último observable adicionado no parâmetro da função.

```js
    const { combineLatest, of } = require('rxjs');

    const observable1 = of('A', 'B', 'C');
    const observable2 = of(1, 2, 3);

    const combinedObservable = combineLatest(observable1, observable2);

    combinedObservable.subscribe(combinedValues => {
        console.log(combinedValues);
        // A cada emissão em qualquer dos Observables, será impresso:
        // ['C', 1]
        // ['C', 2]
        // ['C', 3]
    });

```

## concat 

Permite concatenar observables emitir os valores 

```js
    const { concat, of, interval } = require('rxjs');
    const { take } = require('rxjs/operators');

    const observable1 = of('A', 'B', 'C');
    const observable2 = interval(1000).pipe(take(3)); // Emite 0, 1, 2 a cada segundo

    const concatenatedObservable = concat(observable1, observable2);

    concatenatedObservable.subscribe(value => {
        console.log(value);
        // A saída será:
        // 'A'
        // 'B'
        // 'C'
        // 0
        // 1
        // 2
    });
```

## forkJoin

Serve para combinar os valores dos observables (pegar os valores mais recentes, ou seja, os últimos a serem emitidos pelo observable) e aguarda até que todos tenham completado sua execução. 

```js
    const { forkJoin, of, interval } = require('rxjs');
    const { take } = require('rxjs/operators');

    const observable1 = of('A', 'B', 'C');
    const observable2 = interval(1000).pipe(take(3)); // Emite 0, 1, 2 a cada segundo

    const forkJoinedObservable = forkJoin(observable1, observable2);

    forkJoinedObservable.subscribe(combinedValues => {
        console.log(combinedValues);
        // A saída será:
        // ['C', 2] após ambos os Observables concluírem
    });
```

## merge

```js
    const { merge, interval } = require('rxjs');
    const { take } = require('rxjs/operators');

    const observable1 = interval(1000).pipe(take(3)); // Emite 0, 1, 2 a cada segundo
    const observable2 = interval(500).pipe(take(4));  // Emite 0, 1, 2, 3 a cada meio segundo

    const mergedObservable = merge(observable1, observable2);

    mergedObservable.subscribe(value => {
    console.log(value);
    // A saída pode ser não sequencial, dependendo do momento em que os valores são emitidos:
    // 0, 0, 1, 1, 2, 2, 3, 3
    });
```

## partition

O operador partition no RxJS é utilizado para dividir um Observable único em dois Observables com base em uma condição fornecida. Ele retorna um array contendo dois Observables: um contendo os valores que atendem à condição e outro contendo os valores que não atendem.

```js
    const { of, partition } = require('rxjs');

    const source = of(1, 2, 3, 4, 5, 6);

    const [evenObservable, oddObservable] = partition(source, value => value % 2 === 0);

    evenObservable.subscribe(value => {
        console.log(`Even: ${value}`);
        // Emite os valores pares: 2, 4, 6
    });

    oddObservable.subscribe(value => {
        console.log(`Odd: ${value}`);
        // Emite os valores ímpares: 1, 3, 5
    });

```

## race

Emite o observable que completar primeiro

```js
    const { race, interval, of } = require('rxjs');
    const { mapTo, take } = require('rxjs/operators');

    const observable1 = interval(1000).pipe(mapTo('Observable 1'), take(3));
    const observable2 = interval(500).pipe(mapTo('Observable 2'), take(4));

    const racingObservable = race(observable1, observable2);

    racingObservable.subscribe(winner => {
        console.log(`O vencedor é: ${winner}`);
        // Emitirá 'Observable 2' porque completa antes do Observable 1
    });

```

## zip

O operador zip no RxJS é utilizado para combinar os valores de vários Observables em uma única emissão, criando uma matriz que contém os valores correspondentes de cada Observable. Ele emite apenas quando todos os Observables fornecidos emitirem um valor.

```js
    import { of, zip } from 'rxjs';

    const obs1$ = of(1, 2, 3)
    const obs2$ = of(4, 5, 6)

    zip(obs1$, obs2$).subscribe(value => console.log(value));
    // [ 1, 4 ]
    // [ 2, 5 ]
    // [ 3, 6 ]
```