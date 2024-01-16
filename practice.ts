import { filter, generate, map, mergeMap, tap, of, interval, takeWhile, skip, take, Observable, combineLatest, from, groupBy, first, last} from 'rxjs';

//Crie um Observable que emita os números de 1 a 10 e multiplique cada valor por 2

console.log('Crie um Observable que emita os números de 1 a 10 e multiplique cada valor por 2\n')


interval().pipe(
    skip(1),
    takeWhile(x => x <= 10), 
    map(x => x * 2),
    tap(console.log)).subscribe();


// Filtrar os impares

console.log('Filtrar os impares')

interval().pipe(
    take(100),
    filter(x => x % 2 != 0),
    tap(console.log)
)

console.log('Criar um observable pra emitir a representação dos dias da semana\n')

const daysOfWeek$ = new Observable(subscriber => {
    const formatter = Intl.DateTimeFormat('pt-br', { weekday: 'long' });

    const date = new Date();
    let currentWeekDay = date.getDay();

    while (currentWeekDay != 1) {
        date.setDate(date.getDate() - 1);
        currentWeekDay = date.getDay();
    }

    let currentDate = date.getDate();

    for (let i = currentDate ; i <  currentDate + 7 ; i++) { 
        date.setDate(i);
        subscriber.next(formatter.format(date));
    }
});

daysOfWeek$.subscribe(console.log);

console.log('Use o operador mergeMap para adicionar um sufixo "-RxJS" a cada string emitida.\n')

daysOfWeek$.pipe(map(x => `${x}-RxJS`)).subscribe(console.log);

console.log('Crie dois Observables que emitem uma sequência de números (por exemplo, de 1 a 3 e de 4 a 6)\n')

combineLatest(of(1,2,3), of(4, 5, 6)).subscribe(console.log);


console.log('Crie um Observable que emita um número aleatório a cada segundo.');

interval(1000).pipe(map(_ => Math.floor(Math.random() * 10000))).subscribe(console.log);

console.log('Agrupar elementos pelo nome')

const people: { id: number; name: string; }[] = [
    {
        id: 1,
        name: 'Gabriel',
    },
    {
        id: 2,
        name: 'Gabriel',
    },
    {
        id: 3,
        name: 'José',
    },
    {
        id: 4,
        name: 'Carlinho',
    }
];

from(people).pipe(groupBy(x => x.name)).subscribe({
    next: value => {
        value.pipe(first()).forEach(console.log);
    }
});