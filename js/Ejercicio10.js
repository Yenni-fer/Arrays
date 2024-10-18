function multiplicarPorDos(arr) {
    return arr.map(num => num * 2); // Multiplica cada número por 2
}


let numeros = [1, 2, 3, 4, 5];
let multiplicados = multiplicarPorDos(numeros);
console.log("Números multiplicados por 2:", multiplicados); 
