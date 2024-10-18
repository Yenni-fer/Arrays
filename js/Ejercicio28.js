function extraerNombres(arreglo) {
    return arreglo.map(objeto => objeto.nombre);
}


const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 35 },
    { nombre: 'Lucía', edad: 28 }
];

const nombres = extraerNombres(personas);
console.log(nombres);
