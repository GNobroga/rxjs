/*
    # Funções puras:
        ## Não modificam variáveis externas
        ## Não geram efeitos colaterias (Ter um resultado diferente por causa de variáveis externas que mudam ao longo prazo), já que não utilizam variáveis externa


    # Observação:
        O ideal é sempre utilizar funções puras.

*/

const PI = 3.14;

// No pure function
function calcAreaCircleNoPure(raio: number) {
    return raio ** 2 * PI;
}

// Pure function
function calcAreaCirclePure(raio: number, pi: number) {
    return  raio ** 2 * pi;
}