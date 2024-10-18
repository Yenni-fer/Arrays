//Dado un arreglo de números, 
//crea una función que calcule y }
//retorne el promedio de esos números.

let calificacion1 = parseFloat( prompt("Ingrese el primer numero"));
let calificacion2 = parseFloat( prompt("Ingrese el segundo numero"));
let calificacion3 = parseFloat( prompt("Ingrese el tercer numero"));
let calificacion4 = parseFloat( prompt("Ingrese el cuarto numero"));

function promedio4Numeros(calificacion1, calificacion2, calificacion3, calificacion4){
    let suma = (calificacion1 + calificacion2+ calificacion3+ calificacion4)/4;
    return suma; // Retornamos el promedio
}

// Llamada a la función y mostrar el resultado
let promedio = promedio4Numeros(calificacion1, calificacion2, calificacion3, calificacion4);
console.log("El promedio es: " + promedio);