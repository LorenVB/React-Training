//Funciones

const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = nombre => {
    return `Hola ${nombre}`;
}

const saludar3 = nombre => `Hola ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());


const getUser = () =>
    ({
        uid: 'ABC123',
        username: "HolaQuePasa"
    })


console.log(getUser());


//Tarea
//1. Transformar en función de Flecha
//2. Retornar un objeto implícito
//3. Pruebas

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Lorenzo');
console.log(usuarioActivo);