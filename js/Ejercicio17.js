function todosMayoresQue(arr, n) {
    return arr.every(num => num > n); // Verifica si todos los números son mayores que n
}

// Ejemplo de uso:
let numeros = [10, 20, 30, 40, 50];
console.log(todosMayoresQue(numeros, 5));  // true
console.log(todosMayoresQue(numeros, 25)); // false
