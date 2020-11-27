
const nombre= 'Lorenzo';
const apellido= 'Vidal';

const nombreCompleto= `
${nombre}
${apellido}
`;


function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);