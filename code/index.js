/**
 *  Operators:
 *  
 *  share - Permite compartilhar um único observable para todos os inscritos.
 * 
 */
//#region ReplaySubject

const rxjs = require('rxjs');

const replyObs$ = new rxjs.ReplaySubject(5); // ReplaySubject sempre emitirá os últimos 5 observables.

for (let i = 1 ; i <= 5 ; i++) {
    replyObs$.next(i);
}

replyObs$.subscribe(result => console.log('Sub 1', result));

replyObs$.next(500);

replyObs$.subscribe(result => console.log('Sub 2', result));

//#endregion

//#region BehaviorSubject

const bs$ = new rxjs.BehaviorSubject(100); // Emite o primeiro valor assim que se inscreve

bs$.subscribe(console.log);

//#endregion


//#region Subject

const s$ = new rxjs.Subject(); // Não emite nada enquanto não for adicionado 

s$.next(100000); // Não vai ser emitido

s$.subscribe(console.log);

s$.next('YES'); 

//#endregion


//#region AsyncSubject

// Ele só vai emitir quando chamarmos o .complete() e só vai emitir o último observable.
const as$ = new rxjs.AsyncSubject(); 

as$.subscribe(console.log);

as$.next('Async Yes'); 
as$.complete();

//#endregion
