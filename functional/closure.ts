/*
    # Closure
        Funções guardam um snapshot do escôpo acima dela.
*/

function createClosureCount() {
    let count = 0;
    return () => {
        console.log('Conter: ' + count);
        count += 1;
    }
}

const showCount = createClosureCount();

showCount(); // Output 0
showCount(); // Output 1