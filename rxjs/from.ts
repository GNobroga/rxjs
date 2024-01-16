import * as rxjs from 'rxjs';


/*

    O operador from no RxJS é utilizado para converter uma série de outros tipos de objetos e estruturas de dados em Observables.
*/

const numbers = [[1,3,4], 2, 3, 4, 5];

rxjs.from(numbers).forEach(console.log);