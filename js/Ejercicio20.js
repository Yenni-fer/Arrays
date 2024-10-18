function productoDeElementos(arr) {
    return arr.reduce((acumulador, num) => acumulador * num, 1); // Multiplica todos los números
}

// Ejemplo de uso:
let numeros = [1, 2, 3, 4, 5];
let producto = productoDeElementos(numeros);
console.log("Producto de todos los elementos:", producto); // 120
