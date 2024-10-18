function combinarYOrdenar(...arreglos) {
    // Combinar todos los arreglos en uno solo usando spread operator
    const combinado = [].concat(...arreglos);
    
    // Ordenar el arreglo combinado de menor a mayor
    const ordenado = combinado.sort((a, b) => a - b);
    
    return ordenado;
}

const arreglo1 = [5, 12, 7];
const arreglo2 = [1, 3, 9];
const arreglo3 = [8, 2, 4];

const resultado = combinarYOrdenar(arreglo1, arreglo2, arreglo3);
console.log(resultado);
