/////////////////////////
function * generate() {
    while (true) { yield *[1, 2, 3]};
}

rxjs.from(generate()) // Qualquer Iterator é possível por no from, promises, observables, etc.
    .pipe(rxjs.take(3), rxjs.tap(x => console.log('Tap', x)))
    .subscribe()

console.log();

///////////////////////////
rxjs.range(1000, 10) // Começa de 1000 e emite 10
    .subscribe(x => console.log('Emitindo', x))


///////////////////////////
rxjs.generate([-1, 0, 0], x => x[2] <= 10, x => [x[1], Math.abs(x[0] + x[1]), x[2] + 1]) // initialValue, condition, increment1111
    .subscribe(fib => console.log('FIB', fib[0]));

/////////////////////////////////
const rectangle = document.querySelector('.rectangle');

const mouseDown$ = rxjs.fromEvent(rectangle, 'mousedown');
const mouseUp$ = rxjs.fromEvent(document, 'mouseup');
const mouseMove$ = rxjs.fromEvent(document, 'mousemove');
const keyUp$ = rxjs.fromEvent(document, 'keyup');

mouseDown$.pipe(
    rxjs.map(e => ({
        x: e.clientX,
        y: e.clientY,
        offsets: {
            x: e.target.offsetLeft,
            y: e.target.offsetTop,
        },
    })),
    rxjs.switchMap((start) => 
        rxjs.merge(
            mouseMove$.pipe(
                rxjs.takeUntil(mouseUp$),
                rxjs.delay(50),
                rxjs.map(e => {
                    return {
                        x: e.clientX - start.x + start.offsets.x,
                        y: e.clientY - start.y + start.offsets.y
                    }
                })
            ),
            keyUp$.pipe(
                rxjs.filter(e => e.which === 32),
                rxjs.tap(e => {
                    const clone = rectangle.cloneNode(true);
                    clone.style.width = `${clone.style.width / 0.50}px`;
                    clone.style.height = `${clone.style.height / 0.50}px`;
                    document.body.insertBefore(clone, rectangle);
                }),
                rxjs.skip() // Ignorar esse observable no resultado final
            )
        ))
    )
    .subscribe(({ x, y }) => {
        rectangle.style.top = `${y}px`;
        rectangle.style.left = `${x}px`;
    }); 