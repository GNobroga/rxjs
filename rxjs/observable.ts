import * as rxjs from 'rxjs';

/*
    Permite criar uma observable, ele trabalha com um fluxo então 
    para 1 mesmo observable eu posso dar o next em vários valores;

*/

const observable = new rxjs.Observable(subscriber => {
    for (let i = 0 ; i < 100 ; i++) {
        subscriber.next(i);
    }
    subscriber.complete();
});

observable.forEach(value => console.log('Valor: ' + value));