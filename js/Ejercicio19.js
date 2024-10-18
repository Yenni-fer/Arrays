function sumaAcumulada(arr) {
    return arr.reduce((acumulador, num) => acumulador + num, 0); // Suma todos los números
}

// Ejemplo de uso:
let numeros = [1, 2, 3, 4, 5];
let suma = sumaAcumulada(numeros);
console.log("Suma acumulada:", suma); // 15
