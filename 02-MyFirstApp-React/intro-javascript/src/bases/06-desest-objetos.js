// Desestructuración

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona;


console.log(nombre);
console.log(edad);
console.log(clave);


const useContext = ({ clave, edad, nombre }) => {

    // console.log(usuario);

    return {
        nombreClave: clave,
        anios: edad
    }
}

const avenger = useContext(persona);

const { nombreClave, anios } = avenger;
console.log(nombreClave, anios);