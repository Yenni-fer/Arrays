function buscarIndice(arr, valor) {
    return arr.indexOf(valor); // Retorna el índice del valor o -1 si no existe
}


let numeros = [10, 20, 30, 40, 50];
console.log(buscarIndice(numeros, 30)); // 2
console.log(buscarIndice(numeros, 60)); // -1
