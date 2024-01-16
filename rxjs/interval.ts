import * as rxjs from 'rxjs';

/*
    
O interval é um operador no RxJS que cria um Observable que emite 
uma sequência de números em intervalos de tempo regulares. 

*/

const generateNumbers = rxjs.interval(500);

const subscription = generateNumbers.subscribe(value => console.log(value));

setTimeout(() => {
    subscription.unsubscribe();
}, 5000);