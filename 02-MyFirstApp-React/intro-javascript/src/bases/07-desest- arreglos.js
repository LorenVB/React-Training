const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p2] = personajes;

console.log(p2);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamará setNombre

const useState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

// const [nombre, setNombre] = useState('Goku');

// console.log(nombre);
// console.log(setNombre);

const arr = useState('Vegeta');

const nombre = arr[1];
const setNombre

console.log(nombre);
console.log(setNombre);