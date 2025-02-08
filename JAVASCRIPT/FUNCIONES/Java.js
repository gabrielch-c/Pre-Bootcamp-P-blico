
function nombre() {
    console.log("Hola mundo");
}
nombre();

function imprimirFOR() {
    for (var indice = 1; indice < 6; indice++) {
        console.log("Hola mundo ");
        console.log(indice);
        console.log("chao");
    }
}

imprimirFOR();

function imprimirFOR(inicio, hasta) {
    for (var indice = inicio; indice < hasta; indice++) {
        console.log("Hola mundo ");
        console.log(indice);
        console.log("chao");
    }
}

imprimirFOR(1, 6);


function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}

var resultado = sumar(5, 10);
console.log(resultado);

console.log(sumar(80, 20));
