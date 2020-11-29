import { getHeroeById } from "./bases/08-import&export";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //Tarea
//         //importen el
//         const heroe = getHeroeById(2);
//         reject('No se puede manejar el error');
//     }, 2000)
// });

// promesa.then((heroe) => {
//         console.log(heroe)
//     })
//     .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Tarea
            //importen el
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);
    });
};

getHeroeByIdAsync(2).then(console.log)
    .catch(console.warn);