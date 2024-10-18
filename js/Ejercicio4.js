function invertirArreglo(arr) {
    let arregloInvertido = []; // Creamos un nuevo arreglo vacío

    // Recorremos el arreglo original desde el final hasta el inicio
    for (let i = arr.length - 1; i >= 0; i--) {
        arregloInvertido.push(arr[i]); // Añadimos los elementos en orden inverso
    }

    return arregloInvertido;
}
let numeros = [1, 2, 3, 4, 5];
let invertido = invertirArreglo(numeros);
console.log("El arreglo invertido es: " + invertido);
 