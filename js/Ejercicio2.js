
function encontrarNumeroMasGrande(arr) {
    if (arr.length === 0) {
        return "El arreglo está vacío";
    }

    let max = arr[0]; // Asignar el primer valor como el máximo inicialmente

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Actualizar el máximo si se encuentra un número mayor
        }
    }

    return max;
}

let numeros = [45, 72, 34, 89, 21];
console.log("El número más grande es: " + encontrarNumeroMasGrande(numeros));



