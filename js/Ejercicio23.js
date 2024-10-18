function aplanarArreglo(arr) {
    return arr.flat(); // Aplana el arreglo en un solo nivel
}

// Ejemplo de uso:
let arregloAnidado = [1, [2, 3], [4, 5, [6, 7]], 8];
let arregloPlano = aplanarArreglo(arregloAnidado);
console.log("Arreglo aplanado:", arregloPlano); // [1, 2, 3, 4, 5, [6, 7], 8]


