# Creation operators

São operadores que criam observables.

## Ajax

Esse operador permite fazer chamadas http e cria um observable apartir do conteúdo retornado.

```js
    const { ajax } = require('rxjs/ajax');

    const url = 'https://api.example.com/data';

    ajax(url).subscribe(
        response => console.log('Resposta bem-sucedida:', response),
        error => console.error('Erro na requisição:', error)
    );

```


## bindCallback

Essa função obtém os valores que são passados para a função de callback e cria um observable a partir disso.


```js
    const { bindCallback } = require('rxjs');

    function asyncFunction(callback) {
    setTimeout(() => {
        callback(null, 'Resultado assíncrono');
    }, 1000);
    }


    const observableFromCallback = bindCallback(asyncFunction);

    observableFromCallback().subscribe(result => {
        console.log(result); 
    });

```

## bindNodeCallback

Essa função consegue criar um observable apartir de uma função que segue o padrão do NodeJS, onde o primeiro argumento é um erro. 

```js
    const { bindNodeCallback } = require('rxjs');

    function asyncNodeFunction(arg1, arg2, callback) {
    setTimeout(() => {
        if (arg1 && arg2) {
        callback(null, 'Resultado assíncrono');
        } else {
        callback(new Error('Erro na operação assíncrona'));
        }
    }, 1000);
    }

    const observableFromNodeCallback = bindNodeCallback(asyncNodeFunction);

    observableFromNodeCallback(true, true).subscribe(
        result => console.log(result), 
        error => console.error(error)  
    );

```

## defer

Permite adiar a criação do observable até que alguém faça uma inscrição nele

```js
    const { defer, of } = require('rxjs');

    const observableWithDefer = defer(() => of(new Date()));

    observableWithDefer.subscribe(value => console.log('Com defer:', value));

```

## empty

Permite criar um observable que não emite nenhum valor

```js
    const { empty } = require('rxjs');

    const observable = empty();

    observable.subscribe(
    () => console.log('Este bloco de código não será executado, pois o Observable está vazio.'),
    () => console.log('Este bloco de código não será executado, pois o Observable está vazio.'),
    () => console.log('O Observable foi concluído imediatamente.')
    );
```

## from 

Permite criar um observable a partir de uma veridade de fonte de dados, como arrays, objetos iteráveis, promises, observables e funções assincronas.

```js
    const { from } = require('rxjs');

    const array = [1, 2, 3, 4, 5];
    const observableFromArray = from(array);

    observableFromArray.subscribe(valor => console.log(valor));
```

## fromEvent

Permite criar um observable que monitora eventos 

```js
    const { fromEvent } = require('rxjs');

    const button = document.getElementById('meuBotao');

    const observableFromClick = fromEvent(button, 'click');

    observableFromClick.subscribe(event => {
        console.log('Clique no botão detectado!', event);
    });

```

## fromEventPattern

Permite criar um observable a partir de um conjunto de eventos.

```js
    const { fromEventPattern } = require('rxjs');

    const addClickHandler = (handler) => document.addEventListener('click', handler);
    const removeClickHandler = (handler) => document.removeEventListener('click', handler);

    const observableFromClickPattern = fromEventPattern(addClickHandler, removeClickHandler);

    observableFromClickPattern.subscribe(event => {
    console.log('Clique detectado!', event);
    });

```

## generate 

O operador generate no RxJS é usado para gerar um fluxo de valores a partir de um valor inicial, uma condição e um incremento.

```js

    import { generate } from 'rxjs';

    const sequence = generate(0, (x) => x < 10, (x) => x + 1);

    sequence.subscribe((x) => console.log(x));
```

## interval

É utilizado para criar um observable que emite valores a cada X timer.

```js
    const { interval } = require('rxjs');

    const observableInterval = interval(1000);

    const subscription = observableInterval.subscribe(value => {
     console.log(value);
    });

    setTimeout(() => {
        subscription.unsubscribe();
        console.log('Assinatura cancelada após 5 segundos.');
    }, 5000);

```

## of

Permite criar uma observable a partir de um sequência de valores

```js
    const { of } = require('rxjs');

    const observableOf = of(1, 2, 3);

    observableOf.subscribe(value => {
        console.log(value);
    });
```

## range

Permite criar um observable a partir de um range

```js
    const { range } = require('rxjs');

    const observableRange = range(1, 5);

    observableRange.subscribe(value => {
        console.log(value); 
    });

```

## throwError

É utilizado para criar um Observable que emite um erro imediatamente após a subscrição.

```js
    const { throwError } = require('rxjs');

    const observableThrowError = throwError('Ocorreu um erro!');


    observableThrowError.subscribe(
        () => console.log('Este bloco de código não será executado, pois ocorreu um erro.'),
        error => console.error('Erro:', error) 
    );
```

## timer 

Ele é semelhante ao interval mas permite especificar um timeout para começar a disparar os valores.

```js
    const { timer } = require('rxjs');

    const observableTimer = timer(2000, 1000);

    observableTimer.subscribe(value => {
     console.log(value); 
    });

```

## iif

Permite cria um observable que será disparado apartir de uma condição

```js
    const { iif, of } = require('rxjs');

    const condition = true;

    const observableIif = iif(
        () => condition,
        of('Condição verdadeira'),
        of('Condição falsa')
    );

    observableIif.subscribe(value => {
        console.log(value);
    });

```