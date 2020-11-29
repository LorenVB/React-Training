const persona = {
    nombre: 'Lorenzo',
    edad: '20',
    apellido: 'Vidal',
    direccion: {
        zip: 34.203,
        lat: 2910.32
    },
};


console.table(persona);

const persona2 = {...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);