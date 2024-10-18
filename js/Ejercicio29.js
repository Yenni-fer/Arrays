function agruparPorDecadas(personas) {
    return personas.reduce((grupos, persona) => {
        // Determinar la década en la que se encuentra la persona
        const decada = Math.floor(persona.edad / 10) * 10;
        const clave = `${decada}s`;

        // Si no existe ese grupo, se inicializa como un arreglo vacío
        if (!grupos[clave]) {
            grupos[clave] = [];
        }

        // Agregar la persona al grupo correspondiente
        grupos[clave].push(persona);

        return grupos;
    }, {}); // Inicia con un objeto vacío
}


const personas = [
    { nombre: 'Juan', edad: 23 },
    { nombre: 'María', edad: 31 },
    { nombre: 'Pedro', edad: 28 },
    { nombre: 'Lucía', edad: 35 },
    { nombre: 'Carlos', edad: 42 },
    { nombre: 'Ana', edad: 55 }
];

const resultado = agruparPorDecadas(personas);
console.log(resultado);
